var common = require('./common');
var emojiTags = require('./emojiTags');

function getAppearance(){
    var possibleTags = [emojiTags.animals, emojiTags.creatures, emojiTags.humans];
    var appearance = common.randomItemPicker(possibleTags);

    return appearance;
}

function getMainCharacterAppearance(){
    var appearance = getAppearance();
    appearance = "Appearance: " + appearance;
    return appearance;
}

function getAntagonistAppearance(){
    var appearance = getAppearance();
    appearance = "Arch Enemy: " + appearance;
    return appearance;
}

function getCharArc(){
    var charArc = emojiTags.emotions + " -> " + emojiTags.emotions + " -> " + emojiTags.emotions + " -> " + emojiTags.emotions;
    charArc = "Character Arc:" +
    "\n" + charArc;
    return charArc;
}

function getOccupationOrHobby(){
    var possibleTags = [emojiTags.objects, emojiTags.sportsAndActivities];
    var tag1 = common.randomItemPicker(possibleTags);
    var tag2 = common.randomItemPicker(possibleTags);

    var occuHobby =  tag1 + ", " + tag2; 
    
    occuHobby = "Occupation/Hobby:" + 
    "\n" + occuHobby;

    return occuHobby;
}

function getFear(){
    var possibleTags = [emojiTags.objects, emojiTags.animals, emojiTags.creatures, emojiTags.transportation, emojiTags.weather];
    var fear = common.randomItemPicker(possibleTags);

    fear = "Biggest Fear :" + fear;

    return fear;
}

function getFood(){
    var possibleTags = [emojiTags.food, emojiTags.drinks];
    var food = common.randomItemPicker(possibleTags);

    food = "Favourite Food: " + food;

    return food;
}

function getClosestFriend(){
    var possibleTags = [emojiTags.humans, emojiTags.animals, emojiTags.creatures];
    var friend = common.randomItemPicker(possibleTags);

    friend = "Closest Friend: " + friend;

    return friend;
}

function getSecretHandshake(){
    var shake = emojiTags.actionsAndBodyParts + "-" + emojiTags.actionsAndBodyParts + "-" + emojiTags.actionsAndBodyParts + "-" + emojiTags.actionsAndBodyParts;
    shake = "Secret Handshake:" +
    "\n" + shake;
    return shake;
}

function getRandomCharacterPrompt(){
    var appearance = getMainCharacterAppearance();
    var charArc = getCharArc();
    var occuHobby = getOccupationOrHobby();

    var charPromptText = "Character Prompt!" + 
    "\n============" + 
    "\n" + appearance +
    "\n\n" + charArc + 
    "\n\n" + occuHobby;

    if(common.coinFlip()){
        var fear = getFear();
        charPromptText = charPromptText + "\n\n" + fear;
    }

    if(common.coinFlip()){
        var food = getFood();
        charPromptText = charPromptText + "\n\n" + food;
    }

    if(common.coinFlip()){
        var appearance = getAntagonistAppearance();
        charPromptText = charPromptText + "\n\n" + appearance;
    }

    if(common.coinFlip()){
        var friend = getClosestFriend();
        charPromptText = charPromptText + "\n\n" + friend;

        if(common.coinFlip()){
            var shake = getSecretHandshake();
            charPromptText = charPromptText + "\n\n" + shake;
        }
    }

    return charPromptText;
}

module.exports.getRandomCharacterPrompt = getRandomCharacterPrompt