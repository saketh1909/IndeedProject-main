const mysql =  require('mysql')
var mysqlConnection = require('../../utils/mysqlConfig');
var userModel = require('../../models/userModel'); 
var bcrypt = require('bcryptjs')
const signup = async (msg,callback) => {
    let res= {};
    let password = await bcrypt.hash(msg.password, 12)
    //let userId=msg.userId;
    console.log(msg)

    // checkQuery = "SELECT email FROM User WHERE email = ? ",[msg.email]; 
    // console.log("checkquery=" + checkQuery);
    mysqlConnection.query("SELECT email FROM User WHERE email = ? ",[msg.email], function(err, result){
    if(err){
        console.log("error is checking user",err);
        res.status=500;
        res.data="MySQL Error while checking for existing user";
        callback(null,res);    
    }
    else{

    if(result.length === 0){

       
        console.log('after bcrypt',password);
            const newUser = new userModel({
             emailId : msg.email
        });
        
        newUser.save((err, result) => {
        if (err) {
            console.log("error while creating record in mongodb",err);
            res.status=500;
            res.data="MongoDB Error";
            callback(null,res);
        } 
        else{
            //JSON.stringify(result._id)
            mysqlConnection.query("INSERT into User (user_id, email, password, user_type) VALUES (?,?,?,?)",[JSON.stringify(result._id), msg.email, password, msg.user_type],(err,result1) => {
                console.log(err);
                if(err){
                    console.log("error is creating record in mysql",err)
                    res.status=500;
                    res.data="MySQL Error";
                    userModel.deleteOne({_id: result._id}, (err, result2) => {
                        if(err){
                         console.log("error while deleting" + err);   //figure out how to handle
                        //  res.status=500;
                        //  res.data="MongoDB Error";
                        //  callback(null,res);
                        }
                        else{
                            console.log("deleted successfully from mongo " + JSON.stringify(result2));
                        }
                    })
                
                    callback(null,res);
                }
              else{
                res.status=200;
                res.data=result1;
                callback(null,res);
                }
            })
        }
        });
    } 
    
    else{
        res.status=401;
        res.data="User already exists";
        callback(null,res);
    }
    }
});
}


const login = async (msg,callback) => {
    let res= {};
    //let userId=msg.userId;
    console.log(msg)

    mysqlConnection.query("SELECT password, user_type FROM User WHERE email = ?",[msg.email], function(err, result){
    if(err){
        res.status=500;
        res.data="MySQL Error";
        callback(null,res);    
    }
    else{
        if(result.length === 0){
            res.status=401;
            callback(null,"User does not exist");
            }
        else{
            console.log("password is" + result[0].password, " comparing with " + msg.password);
            var validPassword = bcrypt.compareSync(msg.password,result[0].password);
            if(validPassword) {
                res.status=200;
                res.data= {
                    email: msg.email,
                    user_type: result[0].user_type
                }
                callback(null,res);
            }
            else{
                res.status=401;
                res.data="Incorrect credentials";
                callback(null,res);
            }
        }
    }   
    });
}

async function handle_request(msg, callback) {
    if(msg.path=="signup"){
        delete msg.path;
        signup(msg,callback);
    }
    else if(msg.path=="login"){
        delete msg.path;
        login(msg,callback);
    }
   
}

exports.handle_request = handle_request;


