var memory_array = [
  "image/image1memgame.jpg",
  "image/image2memgame.jpg",
  "image/image3memgame.jpg",
  "image/image4memgame.jpg",
  "image/image5memgame.jpg",
  "image/image6memgame.jpg",
  "image/image7memgame.jpg",
  "image/image8memgame.jpg",
  "image/image1memgame.jpg",
  "image/image2memgame.jpg",
  "image/image3memgame.jpg",
  "image/image4memgame.jpg",
  "image/image5memgame.jpg",
  "image/image6memgame.jpg",
  "image/image7memgame.jpg",
  "image/image8memgame.jpg"
];
var memory_values = [];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

function newBoard() {
  tiles_flipped = 0;
  memory_array = _.shuffle(memory_array);

  var output = "";
  _.forEach(memory_array, function(memory_array_value, index) {
    output +=
      '<div id="tile_' +
      index +
      '" onclick="memoryFlipTile(this,\'' +
      memory_array_value +
      "')\"></div>";
  });

  document.getElementById("memory_board").innerHTML = output;
}

function matchCards() {
  tiles_flipped += 2;
  // Clear both arrays
  memory_values = [];
  memory_tile_ids = [];
}

function canFlipCard(tile) {
  return tile.innerHTML == "" && memory_values.length < 2;
}

function isOneCardFlipped() {
  return memory_values.length == 1;
}

function areNoCardsFlipped() {
  return memory_values.length == 0;
}

function setCardAsFlipped(tile, value) {
  memory_values.push(value);
  memory_tile_ids.push(tile.id);
}

function isThereIsAMatch() {
  return memory_values[0] == memory_values[1];
}

function matchCards() {
  tiles_flipped += 2;
  // Clear both arrays
  memory_values = [];
  memory_tile_ids = [];
}

function isGameOver() {
  // Check to see if the whole board is cleared
  return tiles_flipped == memory_array.length;
}

function gameIsOver() {
  alert("Board cleared... generating new board");
  document.getElementById("memory_board").innerHTML = "";
  newBoard();
}

function cardsDoNotMatch() {
  setTimeout(flipCardBack, 700);
}
function flipCard(tile, value) {
  tile.style.background = "#FFF";
  tile.innerHTML = value;
}
// function flipCard(tile, value) {
//   tile.style.background = "#FFF";
//   tile.innerHTML = '<img src="' + value + '.jpg"/>';
// }

function flipCardBack() {
  // Flip the 2 tiles back over
  var tile_1 = document.getElementById(memory_tile_ids[0]);
  var tile_2 = document.getElementById(memory_tile_ids[1]);
  tile_1.style.background = "url(image/image7memgame) no-repeat";
  tile_1.innerHTML = "";
  tile_2.style.background = "url(image/image7memgame) no-repeat";
  tile_2.innerHTML = "";

  // Clear both arrays
  memory_values = [];
  memory_tile_ids = [];
}

function memoryFlipTile(tile, value) {
  if (canFlipCard(tile)) {
    flipCard(tile, value);
    if (areNoCardsFlipped()) {
      setCardAsFlipped(tile, value);
    } else if (isOneCardFlipped()) {
      setCardAsFlipped(tile, value);
      if (isThereIsAMatch()) {
        matchCards();
        if (isGameOver()) {
          gameIsOver();
        }
      } else {
        cardsDoNotMatch();
      }
    }
  }
}

function memoryFlipTile2(tile, value) {
  if (canFlipCard(tile)) {
    console.log("e1");
    flipCard(tile, value);
    setCardAsFlipped(tile, value);
    if (isOneCardFlipped()) {
      console.log("is on card flipped err");
      if (isThereIsAMatch()) {
        console.log("is there a match error");
        matchCards();
        if (isGameOver()) {
          console.log("game over error");
          gameIsOver();
        }
      } else {
        cardsDoNotMatch();
      }
    }
  }
}
