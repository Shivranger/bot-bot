let getComic = async function(url, message){
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
            
  exports.getComic = getComic;