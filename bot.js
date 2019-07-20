var Discord = require('discord.js');
var auth = require('./auth.json');
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
 });

bot.on('ready', () => {
    console.log('${bot.user.username} is logged in and ready to use!');
  });

bot.login(auth.token);