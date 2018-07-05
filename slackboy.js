const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-391154088833-391870896018-kDStzn1uNFTI31TnO1bhyF5T',
    name: 'slackboy'
});

// Start Handler

bot.on('start', () => {

    const firebase = require("firebase");
// Required for side-effects
require("firebases");

var config = {
    apiKey: "AIzaSyATH9RWK-NnonMf3U0oGP3Fs5pbjdRZZ-I",
    authDomain: "slackboy-ce88d.firebaseapp.com",
    databaseURL: "https://slackboy-ce88d.firebaseio.com",
    projectId: "slackboy-ce88d",
    storageBucket: "slackboy-ce88d.appspot.com",
    messagingSenderId: "956604632978"
  };
  firebase.initializeApp(config);
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();


    const params = {
        icon_emoji: ':spinny_interapt:'
    }
    bot.postMessageToChannel('general', 'Who is the best attendance bot around?.....................@slackboy' ,
        params
    );
}); 

// Error Handler
bot.on('error', (err) => console.log(err));

//Message handler
bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }
    handleMessage(data.text);
});

//Responses to Data3
if(message.includes(' Attendance' || ' attendance')){
    db.collection("TA Group #1").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            bot.postMessageToChannel(`${doc.id} => ${doc.data()}`);
        });
    });
}



function handleMessage(message) {
    
}