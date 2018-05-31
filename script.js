var cards = document.querySelectorAll('.graphic')

for (let pics = 0; pics < cards.length; pics++) {
// let photo = cards[pics];
// photo.addEventListener('click',function() {console.log ("snot");
  cards[pics].addEventListener('click', changeImage)
}
function changeImage () { 
  var back = document.getElementsById("1")

  console.log(back.src)
  console.log(this.children[0])
}
// var newCards = document.querySelectorAll('.glass-stack')
//document.getElementById('.graphic').childNodes;
//cards.document[pics].
