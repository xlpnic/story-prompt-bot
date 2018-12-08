console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config.nic');
var emojis = require('./emojis');
var structures = require('./structures').default;

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

function randomItemPicker(itemArray){
    var numOfItems = itemArray.length;
    var chosenItemIndex = Math.floor(Math.random() * Math.floor(numOfItems));
    var chosenItem = itemArray[chosenItemIndex];
    return chosenItem;
}

function generateTweetText(structure){
    var chosenEmoji = randomItemPicker(emojis.emotions.faces)
    return structure.text + chosenEmoji;
}

function constructTweet(){
    var chosenTweetStructure = randomItemPicker(structures.structures);
    var tweetText = generateTweetText(chosenTweetStructure);
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