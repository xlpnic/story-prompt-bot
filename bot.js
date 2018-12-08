console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config.nic')
var emojis = require('./emojis')

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

function randomEmojiPicker(emojiArray){
    var numOfEmotions = emojiArray.length;
    var chosenEmojiIndex = Math.floor(Math.random() * Math.floor(numOfEmotions));
    var chosenEmoji = emojiArray[chosenEmojiIndex];
    return chosenEmoji;
};

function constructTweet(){
    var chosenEmoji = randomEmojiPicker(emojis.emotions.faces)
    var tweetText = "Here is a random emoji: " + chosenEmoji;
    var constructedTweet = { status: tweetText }
    return constructedTweet;
}

function run(){
    try{
        // Don't tweet the same tweet twice in a row! Or twitter gets angry.
        var tweet = constructTweet();

        T.post('statuses/update', tweet, tweetResponse)
    }
    catch(e){
        console.log("Something went wrong!");
        console.log("Exception: " + e);
    }
}

run();