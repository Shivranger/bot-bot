const axios = require('axios');
const cheerio = require('cheerio');
const BASE_URL = 'https://www.gocomics.com/garfield/'; 

exports.run = async (bot, message, args, sender) =>{
  switch (args[0]){
    case 'NEW':
      garfield.new(message);
      break;
    case 'random':
      // message.channel.send(garfield.random());
      break;
  }
}

const garfield = {
  new: (message) => {
      let date = new Date();
      getComic(`${BASE_URL}${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() }`, message);
  }
}

async function getComic(url, message){
  let comic;
  await axios
      .get(url)
      .then((response) => {
        //lazy load
        setTimeout(() => {
          let $ = cheerio.load(response.data); 
          message.channel.send($('.item-comic-image > img').attr('src'));
        }, 1000);
      })
      .catch((error) => {
          console.error(error)
      });
}

exports.help = {
    name: 'GARFIELD'
}