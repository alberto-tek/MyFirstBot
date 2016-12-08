var builder = require ('botbuilder');

//Create connector
var connector = new builder.ConsoleConnector().listen();

//Create Bot and pass the Connector object
var bot = new builder.UniversalBot(connector);

//Simple Dialog example
//bot.dialog('/',function(session) {
//session.send('Hello, bot!')
//var usermessage = session.message.text
//session.send('You said ' + usermessage)
//});

//Waterfall[interaction with users]
bot.dialog('/',[
function(session){
builder.Prompts.text(session,'Hello there!, Which is your name?')
},
function(session,result){
session.send('Hello, your name is: ' + result.response)
}
]);