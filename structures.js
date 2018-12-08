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

function getRandomlyGeneratedStoryPrompt(){
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