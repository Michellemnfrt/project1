// create functions to hold values of cards when clicked
"use strict";
!function() {
    var view, flipped, retrieve, combo, final = [], imi = [], i = {};
    view = function(view,flipped, retrieve) {
        this.category = view,
        this.file = flipped,
        this.alt = retrieve
    }
,
    // t equals card view "view"
    // e equals card when flipped over "flipped"
    // r equals retrieves the image "retrieve"
    // o contains the value of the image "imi"
    // n is the the combination of the card flipped and the new image.
    // a equals final image 

    flipped = new view("image1memgame","/Users/michellemonfort/wdi/projects/project1/images/image1memgame.jpg","image2memgame"),
    view.prototype.createSources = function(flipped) {
        var retrieve, combo;
        final = [];
        for (var imi = 1; 9 > imi; imi++)
            retrieve = "images/" + flipped + "/" + flipped + imi + ".jpg",
            combo = flipped + imi,
            final.push(new view(flipped,retrieve,combo))
    }
    ,

    e.createSources("robots"),
    Array.prototype.shuffle = function() {
        var view, flipped = this.length;
        if (0 === flipped)
            return this;
        for (; --flipped; ) {
            view = Math.floor(Math.random() * (flipped + 1));
            var retrieve = [this[view], this[flipped]];
            this[flipped] = retrieve[0],
            this[view] = retrieve[1]
        }
        return this
    }
    ,
     // t equals card view "view"
    // e equals card when flipped over "flipped"
    // r equals retrieves the image "retrieve"
    // o contains the value of the image "imi"
    // n is the the combination of the card flipped and the new image."combo"
    // a equals final image "final"
    imi = [],
    i = {},
    view.prototype.initGame = function() {
        for (var view = 0, flipped = final.length; flipped > view; view++)
            imi.push(view),
            imi.push(view);
        imi.shuffle();
        for (var retrieve = 0, combo = 2 * final.length; combo > r; r++)
            i["card_" + retrieve] = imi[retrieve]
    }
   ,
   retrieve = null,
    combo = 0,
    flipped.initGame(),
    view.prototype.flipBack = function(view) {
        document.getElementById(view).alt = "back",
        document.getElementById(view).src = "/Users/michellemonfort/wdi/projects/project1/images/7611memgame.jpg"
    }
    view.prototype.vanish = function(view) {
        document.getElementById(view).className = "matched"
    }
    ,
    view.prototype.flipCard = function(view) {
        if ("card" === view.target.className && "back" === view.target.alt) {
            var imi = i[view.target.id];
            view.target.src = final[imi].file,
            view.target.alt = final[imi].alt,
            retrieve ? i[retrieve] === i[view.target.id] ? (flipped.vanish(retrieve),
            final.vanish(view.target.id),
            retrieve = null,
            combo++,
            combo === final.length && (document.getElementById("game").className = "win",
            document.getElementById("message").textContent = "All matched!")) : (document.getElementById("board").removeEventListener("click", flipped.flipCard, !1),
            setTimeout(function() {
                flipped.flipBack(retrieve),
                retrieve = null,
                flipped.flipBack(view.target.id),
                document.getElementById("game").addEventListener("click", flipped.flipCard, !1)
            }, 1*flipped*3)):retrieve = view.target.id
        }
    }
    ,
    view.prototype.changeCardBack = function(view) {
        var final, retrieve, combo;
        final = "img/" + view + "/" + view + "memgame.jpg",
        retrieve = document.querySelectorAll("img.card"),
        combo = Array.prototype.slice.call(retrieve),
        combo.forEach(function(view, retrieve, combo) {
            view.src = final
        })
    }
    ,
    document.getElementById("game").addEventListener("click", final.flipCard, !1),
    view.prototype.handleDragStart = function(view) {
        this.createSources(view.target.id)
    }
    ,
    view.prototype.handleDragDrop = function(view) {
        view.preventDefault && view.preventDefault()
    }
    ,
    view.prototype.handleDragOver = function(view) {
        return view.preventDefault && view.preventDefault(),
         !1
    }
    ,
    document.getElementById("cardCategories").addEventListener("dragstart", function(view) {
        final.handleDragStart(view)
});

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
