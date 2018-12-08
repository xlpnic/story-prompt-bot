function randomItemPicker(itemArray){
    var numOfItems = itemArray.length;
    var chosenItemIndex = Math.floor(Math.random() * Math.floor(numOfItems));
    var chosenItem = itemArray[chosenItemIndex];
    return chosenItem;
}

module.exports.randomItemPicker = randomItemPicker;