const axios = require('axios');
const cheerio = require('cheerio');
const BASE_URL = 'https://www.gocomics.com/calvinandhobbes/'; 
const comicUtils = require('../utils/comicUtils.js');

exports.run = async (bot, message, args, sender) =>{
  switch (args[0]){
    case 'NEW':
      calvinhobbes.new(message);
      break;
    case 'RANDOM':
      calvinhobbes.random(message);
      break;
  }
}

const calvinhobbes = {
  new: (message) => {
    let date = new Date();
    comicUtils.getComic(`${BASE_URL}${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() }`, message);
  },
  random: (message) => {
    let date = randomDate(new Date(1985,11, 18), new Date());
    comicUtils.getComic(`${BASE_URL}${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate() }`, message);
  }
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

exports.help = {
    name: 'CALVINHOBBES'
}