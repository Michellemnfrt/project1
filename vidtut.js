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
    output +='<div id= "tile_';
    
});

}