var Twit = require('twit');
var config = require('./config.nic');
var common = require('./common');
var tweetConstructor = require('./tweetConstructor');

var T = new Twit(config);

function returnLambdaReponse(result, callback){
    var tweetSent = result.data.text;
    //Lambda will stop after this as long as context.callbackWaitsForEmptyEventLoop was set to false 
    callback(null, JSON.stringify("Tweet sent succesfully! Tweet: " + tweetSent));
}

function constructAndSendTweet(callback){
    try{
        // Remember: Don't tweet the same tweet twice in a row!
        // Or twitter gets angry.
        var tweet = tweetConstructor.constructTweet();
        if(common.tweetIsTooLong(tweet)){
            throw "Tweet would be too long! Tweet length: " + tweet.status.length;
        }

        T.post('statuses/update', tweet)
        .catch(function (err) {
            console.log("Something went wrong whilst trying to tweet!");
            console.log("Error returned from Twitter: " + err);
        })
        .then(function (result) {
            returnLambdaReponse(result, callback);
        });
    }
    catch(e){
        console.log("Something went wrong!");
        console.log("Exception: " + e);
    }
}

function run(){
    var callback = () => {};
    constructAndSendTweet(callback);
}

// AWS Lambda entry point:
exports.handler = (event, context, callback) => {
    /*
    Ensures the javascript event loop is never empty.
    This is the key to keeping lambda from exiting early
    */
    setInterval(function(){}, 1000);

    /*
    Tell lambda to stop when I issue the callback.
    This is super important or the lambda funciton will 
    always go until it hits the timeout limit you set.
    */
    context.callbackWaitsForEmptyEventLoop = false;
    
    constructAndSendTweet(callback);
};

module.exports.run = run;