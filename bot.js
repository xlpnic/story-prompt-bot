console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config.nic')

var T = new Twit(config);

//
//  tweet 'hello world!'
//
var tweet = { status: 'Here is a robot face: 🤖' };

T.post('statuses/update', tweet, tweetResponse)

function tweetResponse(err, data, response) {
    if (err){
        console.log("Something went wrong!");
        console.log(err);
    }
    else{
        console.log("Tweet tweeted!");
        console.log("Tweet: " + data.text)
    }
  };