//create functions to hold values of cards when clicked
"use strict";
!function() {
    var view, flipped, retrieve, combo, final = [], imi = [], i = {};
    view = function(view,flipped, retrieve) {
        this.category = view,
        this.file = flipped,
        this.alt = retrieve
    }
,
    //t equals card view "view"
    // e equals card when flipped over "flipped"
    //r equals retrieves the image "retrieve"
    //o contains the value of the image "imi"
    // n is the the combination of the card flipped and the new image.
    //a equals final image 
    flipped = new view("robots","img/robots/robots2.svg","robot2"),
    view.prototype.createSources = function(flipped) {
        var retrieve, combo;
        final = [];
        for (var imi = 1; 9 > imi; imi++)
            retrieve = "img/" + flipped + "/" + flipped + imi + ".jpg",
            combo = flipped + imi,
            final.push(new view(flipped,retrieve,combo))



/* const cardsArray = [
  {
    'name': '1memgame',
    'img': 'image1memgame.jpg'
  },
  {
    'name': 'image1memgame',
    'img': 'img/image1memgame.jpg'
  },
  {
    'name': 'tres',
    'img': 'img//imgur.com/a/cgqnWw2'
  },
  {
    'name': 'quatro',
    'img': 'img/image3memgame.jpg'
  },
  {
    'name': 'cinco',
    'img': 'img/image4memgame.jpg'
  },
  {
    'name': 'seis',
    'img': 'img/image6memgame.jpg'
  },
  {
    'name': 'siete',
    'img': 'https://imgur.com/EvnCEVZ'
  },
  {
    'name': 'ocho',
    'img': 'img/image8memgame.jpg'
  },
  {
    'name': 'nueve',
    'img': 'img/image9memgame.jpg'
  }
];
// Grab the div with an id of root
const game = document.getElementById('game')

// Create a section with a grid class
const grid = document.createElement('section')
'flex-container'.setAttribute('class', 'grid')

// Append the game div
game.appendChild('flex-container')

cardsArray.forEach(item => {
  // Create a div
  const card = document.createElement('div');

  // Add a card class to div
  card.classList.add('card');

  // Set the data-name to the cardsArray name
  card.dataset.name = item.name;

  // et background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${item.img})`;

  // Append the div to the grid section
  grid.appendChild(card);
}); */
