var common = require('./common');
var tweetConstructor = require('./tweetConstructor');

var tweet = tweetConstructor.constructTweet();
console.log(tweet);

console.log("Tweet length: " + tweet.status.length);

if(common.tweetIsTooLong(tweet)){
    console.log("Tweet would be too long!");
}