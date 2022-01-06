var userModel = require('../../models/userModel'); 
const updateProfileDetails = async (msg,callback) => {
    let res= {};
    let userId=msg.userId;
    delete msg.userId;
    console.log(msg);
    userModel.findOneAndUpdate({_id:userId},msg,(error,results)=>{
        console.log(error,results);
        if(error){
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        }else{
            res.status=200;
            res.data="Update Successful";
            console.log(res);
            callback(null,res);
        }
    });
}

const updateProfileImage = async (msg,callback) => {
    let res= {};
    let userId=msg.userId;
    let update={
        profileImg:msg.ImageURL
    }
    delete msg.userId;
    userModel.findOneAndUpdate({_id:userId},update,(error,results)=>{
        if(error){
            res.status=500;
            res.data="Database Error";
            callback(null,res);
        }else{
            res.status=200;
            res.data="Image updated successful";
            callback(null,res);
        }
    });
}
handle_request = (msg, callback) => {
    if(msg.path=="updateProfileDetails"){
        delete msg.path;
        updateProfileDetails(msg,callback);
    }
    else if(msg.path=="updateProfileImage"){
        delete msg.path;
        updateProfileImage(msg,callback);
    }
}

exports.handle_request = handle_request;