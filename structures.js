var common = require('./common');
var emojiTags = require('./emojiTags');

var structureTypesEnum = {"storyPrompt":1,"characterPrompt":2};

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

    return chosenTitleFormat;
}

function getCharacters(){
    var possibleTags = [emojiTags.humans, emojiTags.animals, emojiTags.creatures];
    var tag1 = common.randomItemPicker(possibleTags);
    var tag2 = common.randomItemPicker(possibleTags);
    var tag3 = common.randomItemPicker(possibleTags);

    var characterFormats = [
        emojiTags.humans + " " + emojiTags.humans + " " + emojiTags.humans,
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
        "The " + tag1 + " was in " + emojiTags.locations + " all along!",
        emojiTags.humans + " was secretly " + emojiTags.humans + " in disguise!"
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

    return storyPromptText;
}

function getAppearance(){
    var possibleTags = [emojiTags.animals, emojiTags.creatures, emojiTags.humans];
    var tag1 = common.randomItemPicker(possibleTags);

    return tag1;
}

function getCharArc(){
    return emojiTags.emotions + " -> " + emojiTags.emotions + " -> " + emojiTags.emotions + " -> " + emojiTags.emotions + " -> ";
}

function getOccupationOrHobby(){
    var possibleTags = [emojiTags.objects, emojiTags.sportsAndActivities];
    var tag1 = common.randomItemPicker(possibleTags);
    var tag2 = common.randomItemPicker(possibleTags);

    return tag1 + " " + tag2;
}

function getFear(){
    var possibleTags = [emojiTags.objects, emojiTags.animals, emojiTags.creatures, emojiTags.transportation, emojiTags.weather];
    var tag1 = common.randomItemPicker(possibleTags);

    return tag1;
}

function getFood(){
    var possibleTags = [emojiTags.food, emojiTags.drinks];
    var tag1 = common.randomItemPicker(possibleTags);

    return tag1;
}

function getRandomlyGeneratedCharacterPrompt(){
    var appearance = getAppearance();
    var charArc = getCharArc();
    var occuHobby = getOccupationOrHobby();

    var charPromptText = "Character Prompt!" + 
    "\n============" + 
    "\nAppearance: " + appearance
    "\n\nCharacter Arc:" +
    "\n" + charArc + 
    "\n\nOccupation/Hobby:" + 
    "\n" + occuHobby;

    if(common.coinFlip()){
        var fear = getFear();
        charPromptText = charPromptText +
        "\n\nBiggest Fear:" +
        "\n" + fear;
    }

    if(common.coinFlip()){
        var food = getFood();
        charPromptText = charPromptText +
        "\n\nFavourite Food:" +
        "\n" + food;
    }

    if(common.coinFlip()){
        var appearance = getAppearance();
        charPromptText = charPromptText +
        "\n\nArch Enemy:" +
        "\n" + appearance;
    }

    return charPromptText;
}

function getRandomlyGeneratedStructure(){
    var structureTypesArray = Object.values(structureTypesEnum);
    var chosenStructureType = common.randomItemPicker(structureTypesArray);
    var generatedStructure = "";
    switch(chosenStructureType){
        case structureTypesEnum.storyPrompt:
        generatedStructure = getRandomlyGeneratedStoryPrompt();
        break;
        case structureTypesEnum.characterPrompt:
        generatedStructure = getRandomlyGeneratedCharacterPrompt();
        default:
        generatedStructure = getRandomlyGeneratedStoryPrompt();
    }

    return generatedStructure;
}

module.exports.getRandomlyGeneratedStructure = getRandomlyGeneratedStructure