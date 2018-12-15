var common = require('./common');
var emojiTags = require('./emojiTags');

function getTitle(){
    var possibleTags = [emojiTags.objects, emojiTags.animals, emojiTags.creatures, emojiTags.plants];
    var tag1 = common.randomItemPicker(possibleTags);

    var titleFormats = [
        "\"The " + tag1 + " of the " + emojiTags.locations + "\"",
        "\"The " + tag1 + " of " + emojiTags.countryFlags + "\"",
        "\"The " + tag1 + "s of the " + emojiTags.locations + "\"",
        "\"The " + tag1 + "s of " + emojiTags.countryFlags + "\"",
        "\"The " + tag1 + "s of the " + emojiTags.locations + "\"",
        "\"The " + tag1 + "s of " + emojiTags.countryFlags + "\"",
        "\"The " + tag1 + "\"",
        "\"" + emojiTags.humans + "'s " + tag1 + "\"",
        "\"" + emojiTags.humans + "'s " + tag1 + "\"",
        "\"" + emojiTags.humans + "'s " + tag1 + "\"",
    ];
    
    var chosenTitleFormat = common.randomItemPicker(titleFormats);

    chosenTitleFormat = "Title: " + chosenTitleFormat;

    return chosenTitleFormat;
}

function getCharacters(){
    var possibleTags = [emojiTags.humans, emojiTags.animals, emojiTags.creatures];
    var tag1 = common.randomItemPicker(possibleTags);
    var tag2 = common.randomItemPicker(possibleTags);
    var tag3 = common.randomItemPicker(possibleTags);

    var characterFormats = [
        emojiTags.humans + ", " + emojiTags.humans + ", " + emojiTags.humans,
        tag1 + ", " + tag2 + ", " + tag3,
    ];

    var chosenCharacterFormat = common.randomItemPicker(characterFormats);

    chosenCharacterFormat = "Characters:\n" + chosenCharacterFormat;

    return chosenCharacterFormat;
}

function getPlotTwist(){
    var possibleTags = [emojiTags.animals, emojiTags.creatures, emojiTags.objects];
    var tag1 = common.randomItemPicker(possibleTags);
    var tag2 = common.randomItemPicker(possibleTags);

    var plotTwistFormats = [
        "The " + tag1 + " was a " + tag2 + " all along!",
        "The " + tag1 + " was in " + emojiTags.locations + " all along!",
        emojiTags.humans + " was secretly " + emojiTags.humans + " in disguise!"
    ];

    var chosenPlotTwistFormat = common.randomItemPicker(plotTwistFormats);

    chosenPlotTwistFormat = "\n\nPlot Twist:" +
    "\n" + chosenPlotTwistFormat;

    return chosenPlotTwistFormat;
}

function getClimacticScene(){
    var climacticScene = emojiTags.objects + ", " + emojiTags.locations + ", " + emojiTags.emotions;

    climacticScene = "\n\nClimactic Scene:" +
    "\n" + climacticScene;
    
    return climacticScene;
}

function getPlot(){
    var possibleTags1 = [emojiTags.objects, emojiTags.humans, emojiTags.animals, emojiTags.creatures, emojiTags.groupsOfPeople];
    var possibleTags2 = [emojiTags.locations, emojiTags.transportation, emojiTags.countryFlags];
    var tag1 = common.randomItemPicker(possibleTags1);
    var tag2 = common.randomItemPicker(possibleTags1);
    var tag3 = common.randomItemPicker(possibleTags1);
    var tag4 = common.randomItemPicker(possibleTags2);
    var tag5 = common.randomItemPicker(possibleTags2);
    var tag6 = common.randomItemPicker(possibleTags2);

    var plotFormats = [
        "Plot - Act 1:" +
        "\n" + tag1 + ", " + tag4 + ", " + emojiTags.emotions +  
        "\n\nPlot - Act 2:" + 
        "\n" + tag2 + ", " + tag5 + ", " + emojiTags.emotions + 
        "\n\nPlot - Act 3:" + 
        "\n" + tag3 + ", " + tag6 + ", " + emojiTags.emotions,
    ];

    var chosenPlotFormat = common.randomItemPicker(plotFormats);
    return chosenPlotFormat;
}

function getMacguffin(){
    var macguffin = "\n\nMacGuffin:" +
    "\n" + emojiTags.objects;

    return macguffin;
}

function getRandomStoryPrompt(){
    var title = getTitle();
    var characters = getCharacters();
    var plot = getPlot();

    var storyPromptText = "Story Prompt!" + 
    "\n============" + 
    "\n" + title +
    "\n\n" + characters +
    "\n\n" + plot;

    if(common.coinFlip()){
        var climacticScene = getClimacticScene();
        storyPromptText = storyPromptText + "\n\n" + climacticScene;
    }

    if(common.coinFlip()){
        var macguffin = getMacguffin();
        storyPromptText = storyPromptText + "\n\n" + macguffin;
    }

    if(common.coinFlip()){
        var plotTwist = getPlotTwist();
        storyPromptText = storyPromptText + "\n\n" + plotTwist;
    }

    return storyPromptText;
}

module.exports.getRandomStoryPrompt = getRandomStoryPrompt