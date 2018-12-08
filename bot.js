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

function getArrayForTag(emojiTag){
    var arrayToUse = [];

    switch(emojiTag) {
        case emojiTags.emotions:
        arrayToUse = emojis.emotions;
          break;
        case emojiTags.lovehearts:
        arrayToUse = emojis.lovehearts;
          break;
        default:
        arrayToUse = emojis.emotions;
      }

      return arrayToUse;
}

function getEmojiVariation(emojiWithVariations){
    var emojiWithoutVariationTag = emojiWithVariations.replace(emojiTags.varationAvailable, "");
    var stringLength = emojiWithoutVariationTag.length;
    var emojiTag = emojiWithoutVariationTag.substring(stringLength-5, stringLength);
    var variations = getArrayForTag(emojiTag);
    chosenEmojiVariation = randomItemPicker(variations);
    return chosenEmojiVariation;
}

function getUniqueEmoji(textToAnalyse, tagToReplace){
    var arrayToUse = getArrayForTag(tagToReplace);

    var uniqueEmojiFound = false;
    var chosenEmoji = "";

    while(!uniqueEmojiFound){
        chosenEmoji = randomItemPicker(arrayToUse);
        if (chosenEmoji.includes(emojiTags.varationAvailable)){
            chosenEmoji = getEmojiVariation(chosenEmoji);
        }

        if (!textToAnalyse.includes(chosenEmoji)){
            uniqueEmojiFound = true;
        }
    }

    return chosenEmoji;
}

function generateTweetText(structure){
    var tweetText = structure.text;
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