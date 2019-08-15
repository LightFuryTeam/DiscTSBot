var discord = require('discord.js');
var auth = require('./auth.json');
var functions = require('./functions.js');
var bot = new discord.Client({
   token: auth.token,
   autorun: true
 });

const prefix = ".TS";

bot.on('ready', () => {
    console.log(`${bot.user.username} is logged in and ready to use!`);
  });

bot.on('message', message =>{

  var messagesplit = message.content.split(" "); 

  if (messagesplit[1] != null && messagesplit[0] != null)
  {
    var input = messagesplit[1].toUpperCase();
    var inputPrefix = messagesplit[0].toUpperCase();
    if (inputPrefix === prefix)
    {
      switch(input) {

        default:
          message.reply("what do you mean ?").then(msg => msg.delete(25000));
          break;

        case "GETDATA":
          message.delete();
          functions.getData();
          break;  

        case "CLEAR":
            message.delete();
            if(!messagesplit[2]) return message.channel.send("Give me an amount please").then(msg => msg.delete(5000));
            else functions.clearMessages(messagesplit[2], message);
      }
    }
  }
});

bot.login(auth.token);