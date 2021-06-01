const axios = require('axios');
const cheerio = require('cheerio');
const BASE_URL = 'https://www.gocomics.com/calvinandhobbes/'; 

exports.run = async (bot, message, args, sender) =>{
  switch (args[0]){
    case 'NEW':
      garfield.new(message);
      break;
    case 'RANDOM':
      garfield.random(message);
      break;
  }
}

const garfield = {
  new: (message) => {
      let date = new Date();
      getComic(`${BASE_URL}${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() }`, message);
  },
  random: (message) => {
    let date = randomDate(new Date(1985,11, 18), new Date());
    getComic(`${BASE_URL}${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() }`, message);
  }
}

async function getComic(url, message){
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

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

exports.help = {
    name: 'CALVINHOBBES'
}