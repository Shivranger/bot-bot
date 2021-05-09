require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
console.log(process.env);
const TOKEN = process.env.DISCORD_BOT_TOKEN;    //We'll get one of these soon

bot.login(TOKEN);