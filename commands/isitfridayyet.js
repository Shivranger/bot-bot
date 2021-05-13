exports.run = async (bot, message, args, sender) =>{
    message.channel.send(iify());

}
function iify() {
	now = new Date();
    today = now.getDay();
    daywanted = 5;
    offset = today - daywanted;
	switch (offset) {
		case -1:
		case 6:
			return ("Almost.");
		case 0:
			return ("Yep.");	
		case 1:
		case -6:
			return ("You just missed it.");
		default:
			return ("Nope.");
	}
}

exports.help = {
    name: 'ISITFRIDAYYET'
}