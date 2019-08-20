var common = require('./common');
var storyPromptGenerator = require('./storyPrompt');
var characterPromptGenerator = require('./characterPrompt');
var settingPromptGenerator = require('./settingPrompt');
var flashCardPromptGenerator = require('./flashCardPrompt');

var structureTypesEnum = {"storyPrompt":1,"characterPrompt":2,"settingPrompt":3,"flashCardPrompt":4};

function getRandomStructure(){
    var structureTypesArray = Object.values(structureTypesEnum);
    var chosenStructureType = common.randomItemPicker(structureTypesArray);
    var generatedStructure = "";
    switch(chosenStructureType){
        case structureTypesEnum.storyPrompt:
            generatedStructure = storyPromptGenerator.getRandomStoryPrompt();
            break;
        case structureTypesEnum.characterPrompt:
            generatedStructure = characterPromptGenerator.getRandomCharacterPrompt();
            break;
        case structureTypesEnum.settingPrompt:
            generatedStructure = settingPromptGenerator.getRandomSettingPrompt();
            break;
        case structureTypesEnum.flashCardPrompt:
            generatedStructure = flashCardPromptGenerator.getRandomFlashCardPrompt();
            break;
        default:
            generatedStructure = storyPromptGenerator.getRandomStoryPrompt();
    }

    return generatedStructure;
}

module.exports.getRandomStructure = getRandomStructure