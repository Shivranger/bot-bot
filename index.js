require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

//Discord Token created through Discord.com/developers/Applciations
const TOKEN = 'a45c47ca2d1a98fa0e7f2ccb69d632dfa8e213094b1345693925022066548145' //process.env.TOKEN;    //We'll get one of these soon

bot.login(TOKEN);