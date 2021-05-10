require('dotenv').config();

const TOKEN = process.env.DISCORD_BOT_TOKEN; 
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const commandPrefix = '!'


bot.commands = new Discord.Collection();

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    fs.readdir('./commands', (err, files) =>{
      if(err) {
        console.log(err);
      }
      //<command>.js
      //<command>
      let jsfile = files.filter(f => f.split('.').pop() == 'js');
      
      if(jsfile.length === 0) {
        return console.log('Could not find any commands')
      }

      jsfile.forEach(f => {
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props);
      })

    })

});

bot.on('message', msg => {

  let sender = msg.author
  if(sender.bot){
    return;
  }
  let message = msg.content.toUpperCase();
  let MessageArray = message.split(' ');
  let cmd = MessageArray[0].slice(1)
  let args = MessageArray.slice(1);

  if(!msg.content.startsWith(commandPrefix)){
    return;
  }

  let commandfile = bot.commands.get(cmd);
  if(commandfile){
    commandfile.run(bot,msg,args);
  }else{
    msg.channel.send('I cannot do that.');
  }

  if(message === commandPrefix + 'PING') {
    msg.channel.send('Pong!')
  }

});

