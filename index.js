const express = require('express');
const app = express();
const PORT = 3001;
const memeLib = require('nodejs-meme-generator');

const memeGenerator = new memeLib({
  canvasOptions: { // optional
    canvasWidth: 500,
    canvasHeight: 500
  },
  fontOptions: { // optional
    fontSize: 46,
    fontFamily: 'impact',
    lineHeight: 2
  }
});

app.get('/', function (req, res) {
  memeGenerator.generateMeme({
      // you can use either topText or bottomText
      // or both of them at the same time
      topText: 'Meme',
      bottomText: 'Generator',
      url: 'https://i.imgur.com/7FHoSIG.png'
    })
    .then(function(data) {
      res.set('Content-Type', 'image/png');
      res.send(data);
    })
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));