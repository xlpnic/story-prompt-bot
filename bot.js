var Twit = require('twit');
var config = require('./config.nic');
var common = require('./common');
var tweetConstructor = require('./tweetConstructor');

var T = new Twit(config);

function tweetResponse(err, data, response) {
    if (err){
        console.log("Something went wrong whilst trying to tweet!");
        console.log("Error returned from Twitter: " + err);
    }
    else{
        console.log("Tweet tweeted!");
        console.log("Tweet: " + data.text)
    }
};

function run(){
    console.log('The bot is starting');

    try{
        // Remember: Don't tweet the same tweet twice in a row!
        // Or twitter gets angry.
        var tweet = tweetConstructor.constructTweet();
        
        var proposedTweetLength = tweet.status.length;
        if(proposedTweetLength > common.MaxNumberOfCharacters){
            throw "Tweet would be too long! Tweet length: " + proposedTweetLength;
        }

        T.post('statuses/update', tweet, tweetResponse)
    }
    catch(e){
        console.log("Something went wrong!");
        console.log("Exception: " + e);
    }
}

run();