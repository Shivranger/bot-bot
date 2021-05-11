exports.run = async (bot, message, args, sender) =>{
    let member = message.mentions.members.first();
    if(!member){
        message.channel.send(sender + ' says Hello');
    } else{
        message.channel.send(`Hello ${member} from ${sender}`);
    }
}

exports.help = {
    name: 'HELLO'
}