var common = require('./common');
var emojiTags = require('./emojiTags');

function getLocation(){
    var possibleTags = [emojiTags.countryFlags, emojiTags.locations];
    var location = common.randomItemPicker(possibleTags);

    return location;
}

function getCharacter(){
    var possibleTags = [emojiTags.animals, emojiTags.creatures, emojiTags.humans];
    var item = common.randomItemPicker(possibleTags);

    return item;
}

function getCallToAdventure(){
    var possibleTags = [emojiTags.animals, emojiTags.transportation, emojiTags.time, emojiTags.symbols, emojiTags.sportsAndActivities, emojiTags.plants, emojiTags.objects, emojiTags.food, emojiTags.drinks, emojiTags.creatures, emojiTags.actionsAndBodyParts];
    var item = common.randomItemPicker(possibleTags);

    return item;
}

function getRefusal(){
    var possibleTags = [emojiTags.negativeEmotions];
    var item = common.randomItemPicker(possibleTags);

    return item;
}

function getThreshold(){
    var possibleTags = [emojiTags.locations, emojiTags.actionsAndBodyParts, emojiTags.sportsAndActivities];
    var item = common.randomItemPicker(possibleTags);

    return item;
}

function getTests(){
    var possibleTags = [emojiTags.actionsAndBodyParts, emojiTags.sportsAndActivities, emojiTags.objects, emojiTags.symbols, emojiTags.transportation, emojiTags.humans, emojiTags.animals, emojiTags.creatures];
    var item = common.randomItemPicker(possibleTags);

    return item;
}

function getApproach(){
    var possibleTags = [emojiTags.actionsAndBodyParts, emojiTags.sportsAndActivities, emojiTags.transportation, emojiTags.locations];
    var item = common.randomItemPicker(possibleTags);

    return item;
}

function getOrdeal(){
    var possibleTags = [emojiTags.actionsAndBodyParts, emojiTags.sportsAndActivities, emojiTags.objects, emojiTags.symbols, emojiTags.transportation, emojiTags.humans, emojiTags.animals, emojiTags.creatures];
    var item = common.randomItemPicker(possibleTags);

    return item;
}

function getReward(){
    var possibleTags = [emojiTags.transportation, emojiTags.plants, emojiTags.objects, emojiTags.lovehearts, emojiTags.locations, emojiTags.humans, emojiTags.food, emojiTags.drinks, emojiTags.creatures, emojiTags.animals];
    var item = common.randomItemPicker(possibleTags);

    return item;
}

function getRoadBack(){
    var possibleTags = [emojiTags.transportation, emojiTags.locations];
    var item = common.randomItemPicker(possibleTags);

    return item;
}

function getResurrection(){
    var possibleTags = [emojiTags.positiveEmotions];
    var item = common.randomItemPicker(possibleTags);

    return item;
}

function getHerosJourneyPrompt(){
    var location = getLocation();

    var herosJourneyPromptText = "Hero's Journey!" + 
    "\n" + common.Underline + "\n" +
    "\n" + "1)Ordinary World: " + location + 
    "\n" + "2)Call 2 Adventure: " + getCallToAdventure() + 
    "\n" + "3)Refusal: " + getRefusal() + 
    "\n" + "4)Meeting the Mentor:" + getCharacter() + 
    "\n" + "5)Crossing Threshold: " + getThreshold() + 
    "\n" + "6)Tests/Allies/Enemies: " + getTests() + 
    "\n" + "7)Approach: " + getApproach() + 
    "\n" + "8)Ordeal/Death/Rebirth: " + getOrdeal() + 
    "\n" + "9)Reward: " + getReward() + 
    "\n" + "10)Road Back: " + getRoadBack() + 
    "\n" + "11)Resurrection: " + getResurrection() + 
    "\n" + "12)Return w/Elixir: " + location;
    
    return herosJourneyPromptText;
}

module.exports.getHerosJourneyPrompt = getHerosJourneyPrompt