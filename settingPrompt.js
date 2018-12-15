var common = require('./common');
var emojiTags = require('./emojiTags');

function getLocation(){
    var possibleTags = [emojiTags.countryFlags, emojiTags.locations];
    var location = common.randomItemPicker(possibleTags);

    location = "Location: " + location;

    return location;
}

function getWeather(){
    var weather = "Weather: " + emojiTags.weather;

    return weather;
}

function getTimeOfDay(){
    var timeOfDay = "Time of Day: " + emojiTags.time;

    return timeOfDay;
}

function getTransportation(){
    var possibleTags = [emojiTags.transportation, emojiTags.animals];
    var transportation = common.randomItemPicker(possibleTags);
    var transportation = "Transportation: " + transportation;

    return transportation;
}

function getRuler(){
    var possibleTags = [emojiTags.humans, emojiTags.creatures, emojiTags.animals];
    var ruler = common.randomItemPicker(possibleTags);
    var ruler = "Ruler: " + ruler;

    return ruler;
}

function getRandomSettingPrompt(){
    var location = getLocation();
    var weather = getWeather();
    var timeOfDay = getTimeOfDay();
    var transportation = getTransportation();
    var ruler = getRuler();

    var setingPromptText = "Setting Prompt!" + 
    "\n" + common.Underline +
    "\n" + location + 
    "\n\n" + weather + 
    "\n\n" + timeOfDay + 
    "\n\n" + transportation + 
    "\n\n" + ruler;

    return setingPromptText;
}

module.exports.getRandomSettingPrompt = getRandomSettingPrompt