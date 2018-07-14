var memory_array = [
    'image/image1memgame.jpg', 'image/image2memgame.jpg', 'image/image3memgame.jpg', 'image/image4memgame.jpg', 'image/image5memgame.jpg', 'image/image6memgame.jpg', 'image/image7memgame.jpg', 'image/image8memgame.jpg', 'image/image1memgame.jpg',
  'image/image2memgame.jpg', 'image/image3memgame.jpg', 'image/image4memgame.jpg', 'image/image5memgame.jpg', 'image/image6memgame.jpg',
  'image/image7memgame.jpg', 'image/image8memgame.jpg'
];
var memory_values = [];
var memory_values = [];
var tiles_flipped = 0;

function newBoard() {
tiles_flipped =0;
memory_array = _.shuffle(memory_array);
var output ='';
_.forEach(memory_array, function(memory_array_value, index) {
    output += '<div id= "tile_' + index + '" onclick="memoryFlipTile(this,\''+ memory_array_value +'\')'></div>';  
});
document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile, value) {
    if (canFlipCard(tile)) {
        flipCard(tile, value);
        if (areNoCardsFlipped()) {
            setCardsAsFlipped(tile, value);
        } else if(isOneCardFlipped()) {
            setCardsAsFlipped(tile, value);
            if(isThereIsAMatch()) {
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
if(tile.innerHTML =="" && memory_values.length < 2)

function canFlipCard(tile) {
return tile.innerHTML == " " && memory_values.length < 2; 
}

function flipCard(tile, value) {
    tile.style.background = 'FFF';
    tile.innerHTML = value;
}
function areNoCardsFlipped() {
    return memory_values.length == 0;
}
function isOneCardFlipped() {
    return memory_values.length == 1;
}
if(memory_values.length == 0) {
    memory_values.push(val);
    memory_tile_ids.push(tile.id);
}

function isThereIsAMatch() {
    return memory_values[0] == memory_values[1];
}
function matchCards () {
    tiles_flipped += 2;
    memory_values = [];
    memory_tiles_ids = [];
}


function isGameOver() {
    return tiles_flipped == memory_array.length;
}
function cardsDoNotMatch() {
    setTimeout(flipCardBack, 700);
}

function flipCardBack() {
    var tile_1 = document.getElementById(memory_tile_ids[0]);
    var tile_2 = document.getElementById(memory_tile_ids[1]);
    tile_1.style.background = '#FF3399';
    tile_1.innerHTML = " ";
    tile_2.style.background = '#FF3399';
    tile_2.innerHTML = " ";
    memory_values = [];
    memory_tile_ids = [];
}