console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config.nic');
var emojis = require('./emojis');
var structures = require('./structures');
var emojiTags = require('./emojiTags');

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

function getUniqueEmoji(textToAnalyse, tagToReplace){
    var arrayToUse = [];
    if (tagToReplace == "<EMO>"){
        arrayToUse = emojis.emotions.faces;
    }

    var uniqueEmojiFound = false;
    var chosenEmoji = "";

    while(!uniqueEmojiFound){
        chosenEmoji = randomItemPicker(arrayToUse);
        if (!textToAnalyse.includes(chosenEmoji)){
            uniqueEmojiFound = true;
        }
    }

    return chosenEmoji;
}

function generateTweetText(structure){
    var tweetText = structure.text;
    //var tags = ["<EMO>"];
    var tags = Object.values(emojiTags);

    tags.forEach(tag => {
        while(tweetText.includes(tag)){
            var uniqueEmoji = getUniqueEmoji(tweetText, tag);
            tweetText = tweetText.replace(tag, uniqueEmoji);
        }
    });

    return tweetText;
}

function constructTweet(){
    var chosenTweetStructure = randomItemPicker(structures);
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