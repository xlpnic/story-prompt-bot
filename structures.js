var common = require('./common');
var emojiTags = require('./emojiTags');

var StoryPrompt1 = {
    text: "Story Prompt!" + 
    "\n==========" + 
    "\nTitle: \"The " + emojiTags.objects + " of the " + emojiTags.locations + "\"" +
    "\n\nCharacters: " + 
    "\n" + emojiTags.humans + " " + emojiTags.humans + " " + emojiTags.humans + 
    "\n\nPlot - Act 1:" + 
    "\n" + emojiTags.sportsAndActivities + " " + emojiTags.locations + " " + emojiTags.emotions +  
    "\n\nPlot - Act 2:" + 
    "\n" + emojiTags.objects + " " + emojiTags.locations + " " + emojiTags.emotions + 
    "\n\nPlot - Act 3:" + 
    "\n" + emojiTags.transportation + " " + emojiTags.locations + " " + emojiTags.emotions + 
    "\n\nPlot Twist:" +
    "\nThe " + emojiTags.objects + " was a " + emojiTags.animals + " all along!"
};

var structureTypesEnum = {"storyPrompt":1};

function getTitle(){
    var titleFormats = [
        "\"The " + emojiTags.objects + " of the " + emojiTags.locations + "\"",
        "\"The " + emojiTags.objects + " of " + emojiTags.countryFlags + "\"",
        "\"The " + emojiTags.animals + "s of the " + emojiTags.locations + "\"",
        "\"The " + emojiTags.animals + "s of " + emojiTags.countryFlags + "\"",
        "\"The " + emojiTags.plants + "s of the " + emojiTags.locations + "\"",
        "\"The " + emojiTags.plants + "s of " + emojiTags.countryFlags + "\"",
        "\"The " + emojiTags.objects + "\"",
        "\"" + emojiTags.humans + "'s " + emojiTags.objects + "\"",
        "\"" + emojiTags.humans + "'s " + emojiTags.animals + "\"",
        "\"" + emojiTags.humans + "'s " + emojiTags.plants + "\"",
    ];
    
    var chosenTitleFormat = common.randomItemPicker(titleFormats);

    return chosenTitleFormat;
}

function getCharacters(){
    var possibleTags = [emojiTags.humans, emojiTags.animals, emojiTags.creatures];
    var tag1 = common.randomItemPicker(possibleTags);
    var tag2 = common.randomItemPicker(possibleTags);
    var tag3 = common.randomItemPicker(possibleTags);

    var characterFormats = [
        tag1 + " " + tag2 + " " + tag3,
    ];

    var chosenCharacterFormat = common.randomItemPicker(characterFormats);

    return chosenCharacterFormat;
}

function getPlotTwist(){
    var possibleTags = [emojiTags.animals, emojiTags.creatures, emojiTags.objects];
    var tag1 = common.randomItemPicker(possibleTags);
    var tag2 = common.randomItemPicker(possibleTags);

    var plotTwistFormats = [
        "The " + tag1 + " was a " + tag2 + " all along!",
        "The " + tag1 + " was in " + emojiTags.locations + " all along!"
    ];

    var chosenPlotTwistFormat = common.randomItemPicker(plotTwistFormats);

    return chosenPlotTwistFormat;
}

function getClimacticScene(){
    return emojiTags.objects + " " + emojiTags.locations + " " + emojiTags.emotions;
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
        "\n" + tag1 + " " + tag4 + " " + emojiTags.emotions +  
        "\n\nPlot - Act 2:" + 
        "\n" + tag2 + " " + tag5 + " " + emojiTags.emotions + 
        "\n\nPlot - Act 3:" + 
        "\n" + tag3 + " " + tag6 + " " + emojiTags.emotions,
    ];

    var chosenPlotFormat = common.randomItemPicker(plotFormats);
    return chosenPlotFormat;
}

function getRandomlyGeneratedStoryPrompt(){
    var title = getTitle();
    var characters = getCharacters();
    var plot = getPlot();
    var storyPromptText = "Story Prompt!" + 
    "\n==========" + 
    "\nTitle: " + title +
    "\n\nCharacters:" +
    "\n" + characters +
    "\n\n" + plot;

    if(common.coinFlip()){
        var climacticScene = getClimacticScene()
        storyPromptText = storyPromptText +
        "\n\nClimactic Scene:" +
        "\n" + climacticScene;
    }

    if(common.coinFlip()){
        storyPromptText = storyPromptText +
        "\n\nMacGuffin:" +
        "\n" + emojiTags.objects;
    }

    if(common.coinFlip()){
        var plotTwist = getPlotTwist();
        storyPromptText = storyPromptText +
        "\n\nPlot Twist:" +
        "\n" + plotTwist;
    }

    return StoryPrompt1;
}

function getRandomlyGeneratedStructure(){
    var structureTypesArray = Object.values(structureTypesEnum);
    var chosenStructureType = common.randomItemPicker(structureTypesArray);
    var generatedStructure = "";
    switch(chosenStructureType){
        case structureTypesEnum.storyPrompt:
        generatedStructure = getRandomlyGeneratedStoryPrompt();
        break;
        default:
        generatedStructure = getRandomlyGeneratedStoryPrompt();
    }

    return generatedStructure;
}

module.exports.getRandomlyGeneratedStructure = getRandomlyGeneratedStructure