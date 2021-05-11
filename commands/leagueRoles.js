const { ReactionCollector } = require("discord.js");

let bestFive = ['Fudge', 'Faker', 'Easyhoon', 'Shiphtur'];
//let bestFive = [];
let roleAssignments = [];

const top = {friendlyName: 'Top', index: 0}
const jungle = {friendlyName: 'Jungle', index: 1}
const mid = {friendlyName: 'Mid', index: 2}
const adc = {friendlyName: 'ADC', index: 3}
const support = {friendlyName: 'Support', index: 4}

function isRoleFree(roleIndex){
  if( typeof roleAssignments[roleIndex] !== 'undefined' && roleAssignments[roleIndex] !== null){
    return false;
  }else{
    return true;
  }
}

exports.run = async (bot, message, args, sender) =>{
  let joined = false;
  if(args[0] === 'JOIN'){
    if(bestFive.length === 5){
      message.channel.send(`Sorry ${sender.username}, the party is full.`);
      return;
    }
    bestFive.forEach( summoner => {
      console.log(summoner);
      if(summoner === sender.username){
          joined = true;
      }
    });
    if(joined){
        message.channel.send(`${sender.username} is already in the party.`);
    }else{
      if(typeof args[1] !== 'undefined' && args[1] !== null){
        console.log(`${sender.username} `)
        switch(args[1]) {
          case 'TOP':
            if(isRoleFree(0)){
              roleAssignments[0] = sender.username;
            }else{
              message.channel.send(`Role already claimed by ${roleAssignments[0]}. You will be assigned a random unoccupied role.`);
  
            }
            break;
          case 'JUNGLE':
            if(isRoleFree(1)){
              roleAssignments[1] = sender.username;
            }else{
              message.channel.send(`Role already claimed by ${roleAssignments[1]}. You will be assigned a random unoccupied role.`);
  
            }
            break;
          case 'MID':
            if(isRoleFree(2)){
              roleAssignments[2] = sender.username;
            }else{
              message.channel.send(`Role already claimed by ${roleAssignments[2]}. You will be assigned a random unoccupied role.`);
  
            }
            break;
          case 'ADC':
            if(isRoleFree(3)){
              roleAssignments[3] = sender.username;
            }else{
              message.channel.send(`Role already claimed by ${roleAssignments[3]}. You will be assigned a random unoccupied role.`);
            }
            break;
          case 'SUPPORT':
            if(isRoleFree(4)){
              roleAssignments[4] = sender.username;
            }else{
              message.channel.send(`Role already claimed by ${roleAssignments[4]}. You will be assigned a random unoccupied role.`);
              
            }
            break;
          default:
            message.channel.send(`No such role found. You will be assigned a random unoccupied role`);
            break;
            
        }
      }
      bestFive.push(sender.username);
      console.log(`${sender.username} has been added to the party.`)
      message.channel.send(`${sender.username} has joined the squad. ${bestFive.length}/5.`);
      message.channel.send(`Current Team: ${bestFive.toString()} `);
      
    }
    //bestFive.push(sender.username);
    //message.channel.send(`${sender.username} has joined the squad. ${bestFive.length}/5.`);
    //message.channel.send(`Current Team: ${bestFive.toString()} `);
  }

  if(args[0] === 'CLEAN'){
    bestFive = [];
    message.channel.send('SCATTER!');
    return;
  }
  console.log(`Party Size: ${bestFive.length}`);
  if(bestFive.length === 5){
      bestFive.forEach( summoner => {
          console.log(roleAssignments.indexOf(summoner));
          if(roleAssignments.indexOf(summoner) == -1){
            let openRole = false;
            console.log(`OpenRole ${openRole}`);
            let role;
            while(!openRole){
                //console.log('Stuck in Loop');
                role = Math.floor(Math.random() * 5);
                if(roleAssignments[role] == null){
                  openRole = true;
                  console.log(`Found Role ${role}`);
                }
            }
            roleAssignments[role] = summoner;
          };
      })
      let returnString = "Welcome to Summoner's Rift \n";
      roleAssignments.forEach(summoner => {
        if (roleAssignments.indexOf(summoner) === 0){
            returnString = returnString + `${summoner} (Top) \n`;
        }else if (roleAssignments.indexOf(summoner) === 1){
            returnString = returnString + `${summoner} (Jungle) \n`;
        }else if (roleAssignments.indexOf(summoner) === 2){
            returnString = returnString + `${summoner} (Mid) \n`;
        }else if (roleAssignments.indexOf(summoner) === 3){
          returnString = returnString + `${summoner} (Bot) \n` ;
        }else if (roleAssignments.indexOf(summoner) === 4){
          returnString = returnString + `${summoner} (Support) \n`;
        }
      });
      console.log(returnString);
      message.channel.send(returnString);
  }
}

exports.help = {
    name: 'LEAGUE'
}