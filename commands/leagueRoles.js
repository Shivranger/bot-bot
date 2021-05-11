let bestFive = ['Faker', 'FBI', 'Easyhoon', 'Perkz'];
let roleAssignments = [];

const top = {friendlyName: 'Top', index: 0}
const jungle = {friendlyName: 'Jungle', index: 1}
const mid = {friendlyName: 'Mid', index: 2}
const adc = {friendlyName: 'ADC', index: 3}
const support = {friendlyName: 'Support', index: 4}

exports.run = async (bot, message, args, sender) =>{
  let joined = false;
  if(args[0] === 'JOIN'){
      bestFive.forEach( summoner => {
        console.log(summoner);
        if(summoner === sender.username){
            joined = true;
        }
      });
    //if(joined){
    //    message.channel.send(`${sender.username} is already in the party.`);
    //}else{
    //   bestFive.push(sender.username);
    //   message.channel.send(`${sender.username} has joined the squad. ${bestFive.length}/5.`);
    //   message.channel.send(`Current Team: ${bestFive.toString()} `);
    // }
    bestFive.push(sender.username);
    message.channel.send(`${sender.username} has joined the squad. ${bestFive.length}/5.`);
    message.channel.send(`Current Team: ${bestFive.toString()} `);
  }

  if(args[0] === 'CLEAN'){
    bestFive = [];
    message.channel.send('SCATTER!');
  }

  if(bestFive.length === 5){
      bestFive.forEach( summoner => {
          let openRole = false;
          console.log(`OpenRole ${openRole}`);
          let role;
          while(!openRole){
              role = Math.floor(Math.random() * 5);
              if(roleAssignments[role] == null){
                openRole = true;
                console.log(`OpenRole ${role}`);
              }
          }
          roleAssignments[role] = summoner;
      })
      roleAssignments.forEach(summoner => {
        if (roleAssignments.indexOf(summoner) === 0){
            message.channel.send(`Welcome to Summoner's Rift ${summoner} (Top)`);
        }else if (roleAssignments.indexOf(summoner) === 1){
            message.channel.send(`Welcome to Summoner's Rift ${summoner} (Jungle)`);
        }else if (roleAssignments.indexOf(summoner) === 2){
            message.channel.send(`Welcome to Summoner's Rift ${summoner} (Mid)`);
        }else if (roleAssignments.indexOf(summoner) === 3){
            message.channel.send(`Welcome to Summoner's Rift ${summoner} (Bot)`);
        }else if (roleAssignments.indexOf(summoner) === 4){
            message.channel.send(`Welcome to Summoner's Rift ${summoner} (Support)`);
        }
      });
  }
}

exports.help = {
    name: 'LEAGUE'
}