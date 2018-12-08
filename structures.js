var emojiTags = require('./emojiTags');

var StoryPrompt1 = {
    text: "Story Prompt!" + 
    "\n\nTitle: " + 
    "\n\"The " + emojiTags.objects + " of the " + emojiTags.locations + "\"" +
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

module.exports = [StoryPrompt1];