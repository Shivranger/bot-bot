require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.DISCORD_BOT_TOKEN;    //We'll get one of these soon

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

  var sender = msg.author
  var message = msg.content.toUpperCase();

  var prefix = '>'

  if(message === prefix + 'PING') {
    msg.channel.send('Pong!')
  }
});

