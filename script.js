//Alternative faces to the cards
var cardsArray = [ 'image/image1memgame.jpg','image/image2memgame.jpg','image/image3memgame.jpg','image/image4memgame.jpg','image/image5memgame.jpg','image/image6memgame.jpg','image/image7memgame.jpg','image/image8memgame.jpg','image/image1memgame.jpg'
  ,'image/image2memgame.jpg','image/image3memgame.jpg','image/image4memgame.jpg','image/image5memgame.jpg','image/image6memgame.jpg'
  ,'image/image7memgame.jpg','image/image8memgame.jpg'
];

// 1. add function to all cards so that the click does something
var values = [];
var cards_ =[];
var flipped_cards = 0;
Array.prototype.cards_shuffle = function() {
	var deck = this.length, j, temp;
	while (--deck > 0) {
		 j = Math.floor(Math.random() * (deck+1));
		 temp = this[j];
		this[j] = this[deck];
		this[deck] = temp;
  }
}

//create a new board

function newBoard () {
  flipped_cards = 0;
  var view = '';
  dsArray.cards_shuffle ();
  for(var deck =0; deck < cards_array.length; deck++) {
    view += 'cards'
  }



}
/*
// 2.listen for click

var cards = document.querySelectorAll('.cell')
document.addEventListener


cell[0].addEventListener

for (let pics = 0; pics < cards.length; pics++) {
  cards[pics].addEventListener('click', function () { display: image
}
// 3.change photo on click,
// 4. keep first clicked picture displayed
// 5.listen for 2nd click
// 6.change photo on 2nd click,
// 7. create a if else statement
// 8. is the first picture equal to the second picture
// 9.identify action if true
// 10. identify action if false
// 11. if there is a match make them dissapear
// 12. if there is no match make them flip back over
// 13. repeat steps 5 and 6 until there are no cards left
 */// 14. display game over


var card = document.querySelector('.cell')
card.addEventListener('click', function () {
  card.classList.remove('.cell')
} 
)}