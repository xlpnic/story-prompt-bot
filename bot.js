var Twit = require('twit');
var config = require('./config.nic');
var emojis = require('./emojis');
var structures = require('./structures');
var emojiTags = require('./emojiTags');
var common = require('./common');

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

function getArrayForTag(emojiTag){
    var arrayToUse = [];

    switch(emojiTag) {
        case emojiTags.actionsAndBodyParts:
            arrayToUse = emojis.actionsAndBodyParts;
            break;
        case emojiTags.animals:
            arrayToUse = emojis.animals;
            break;
        case emojiTags.astronomical:
            arrayToUse = emojis.astronomical;
            break;
        case emojiTags.countryFlags:
            arrayToUse = emojis.countryFlags;
            break;            
        case emojiTags.creatures:
            arrayToUse = emojis.creatures;
            break;
        case emojiTags.drinks:
            arrayToUse = emojis.drinks;
            break;
        case emojiTags.emotions:
            arrayToUse = emojis.emotions;
            break;
        case emojiTags.food:
            arrayToUse = emojis.food;
            break;     
            case emojiTags.groupsOfPeople:
            arrayToUse = emojis.groupsOfPeople;
            break;
        case emojiTags.humans:
            arrayToUse = emojis.humans;
            break;
        case emojiTags.locations:
            arrayToUse = emojis.locations;
            break;
        case emojiTags.lovehearts:
            arrayToUse = emojis.lovehearts;
            break;            
        case emojiTags.objects:
            arrayToUse = emojis.objects;
            break;
        case emojiTags.plants:
            arrayToUse = emojis.plants;
            break;
        case emojiTags.sportsAndActivities:
            arrayToUse = emojis.sportsAndActivities;
            break;
        case emojiTags.symbols:
            arrayToUse = emojis.symbols;
            break;                     
            case emojiTags.time:
            arrayToUse = emojis.times;
            break;
        case emojiTags.transportation:
            arrayToUse = emojis.transportation;
            break;
        case emojiTags.weather:
            arrayToUse = emojis.weather;
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
    chosenEmojiVariation = common.randomItemPicker(variations);
    return chosenEmojiVariation;
}

function getUniqueEmoji(textToAnalyse, tagToReplace){
    var arrayToUse = getArrayForTag(tagToReplace);

    var uniqueEmojiFound = false;
    var chosenEmoji = "";

    while(!uniqueEmojiFound){
        chosenEmoji = common.randomItemPicker(arrayToUse);
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
    var tweetText = structure;
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
    var chosenTweetStructure = structures.getRandomStructure();
    var tweetText = generateTweetText(chosenTweetStructure);
    var constructedTweet = { status: tweetText }
    return constructedTweet;
}

function run(){
    console.log('The bot is starting');

    try{
        // Remember: Don't tweet the same tweet twice in a row!
        // Or twitter gets angry.
        var tweet = constructTweet();
        
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