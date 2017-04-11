'use strict';

var image_path = 'image/';

function displayImages(name, images) {
  this.name = name;
  this.images = images;
}

var firstImage = new displayImages('Blog', 'blog.jpg');
console.log(firstImage);
var secondImage = new displayImages('Portfolio', 'portfolio.jpg');
console.log(secondImage);

// function attachToDOM(){
//   var mainImages = document.createImage('img');
//   displayImages.setAttribute('firstImage');
//   displayImages.setAttribute('secondImage');
//   document.getElementById('image-constructor').appendChild('displayImages');
// }
