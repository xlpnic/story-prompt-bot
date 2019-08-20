var common = require('./common');
var emojiTags = require('./emojiTags');

function getRandomPerson(){
    var possibleTags = [emojiTags.animals, emojiTags.creatures, emojiTags.humans];
    var appearance = common.randomItemPicker(possibleTags);

    return appearance;
}

function getRandomPlace(){
    var possibleTags = [emojiTags.countryFlags, emojiTags.locations];
    var location = common.randomItemPicker(possibleTags);

    return location;
}

function getRandomThing(){
    var possibleTags = [emojiTags.animals, emojiTags.drinks, emojiTags.food, emojiTags.objects, emojiTags.plants, emojiTags.transportation];
    var thing = common.randomItemPicker(possibleTags);

    return thing;
}

function getRandomFlashCardPrompt(){
    var flashCardPromptText = "🃏 Flash Cards! 🃏" + 
    "\n" + common.Underline;

    var person = getRandomPerson();
    var place = getRandomPlace();
    var thing = getRandomThing();

    var cardsText = 
`________
|           |
|   ` + person + `   |______
|_______|          |
          |    ` + place + `   |
______|________|
|           |
|   ` + thing + `   |
|_______|`;

    flashCardPromptText = flashCardPromptText + "\n" + cardsText;
    return flashCardPromptText;
}

module.exports.getRandomFlashCardPrompt = getRandomFlashCardPrompt