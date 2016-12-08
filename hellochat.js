var builder = require ('botbuilder');
var restify = require('restify');

//Create CHAT connector
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

//Create the bot
var bot = new builder.UniversalBot(connector);

//Waterfall dialog for the bot
bot.dialog(
'/',[function(session){
//Ask for user Name
builder.Prompts.text(session, 'What is your name?');
},
function(session,results){   
//Respond with the Name
session.send('Hello ' + results.response);
}]
);

var server = restify.createServer();
server.listen(process.env.port || process.env.port || 3978, function(){
console.log('%s listening to %s', server.name,server.url);
});

server.post('/api/message',connector.listen());