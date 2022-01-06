var reviewsDemo = require('../models/reviewsDemo');
const redis = require("redis");
// REDIS_HOSTNAME="redis-11113.c15.us-east-1-4.ec2.cloud.redislabs.com"
// REDIS_PORT=11113

REDIS_HOSTNAME="127.0.0.1"
REDIS_PORT=6379

REDIS_PASSWORD="lK2VgfnxhM77grEXT5BjM5TFXfSQorVB"
const client = redis.createClient({
    host: REDIS_HOSTNAME,
    port: REDIS_PORT,
    // password: REDIS_PASSWORD
});

client.on("connect", () => {
    console.log("Connected to our redis instance!");
});
function handle_request(msg, callback){
    let res= {};
    client.get('reviewskafka',async function(err, reply) {
        if(reply){
        callback(null,reply);
    }
        else {
            const value = await reviewsDemo.find({},{_id:1}).limit(10000);
            client.set("reviewskafka", JSON.stringify(value));
            callback(null,value);
        }
      }); 
    console.log("Inside book kafka backend");
};

exports.handle_request = handle_request;