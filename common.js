var MaxNumberOfCharacters = 280;
var Underline = "============";

function randomItemPicker(itemArray){
    var numOfItems = itemArray.length;
    var chosenItemIndex = Math.floor(Math.random() * Math.floor(numOfItems));
    var chosenItem = itemArray[chosenItemIndex];
    return chosenItem;
}

function coinFlip(){
    var randomResult = Math.floor(Math.random() * Math.floor(2));
    return randomResult == 0;
}

function tweetIsTooLong(tweetText){
    var proposedTweetLength = tweetText.length;
    if(proposedTweetLength > MaxNumberOfCharacters){
        return true;
    }

    return false;
}

module.exports.randomItemPicker = randomItemPicker;
module.exports.coinFlip = coinFlip;
module.exports.MaxNumberOfCharacters = MaxNumberOfCharacters;
module.exports.tweetIsTooLong = tweetIsTooLong;
module.exports.Underline = Underline;