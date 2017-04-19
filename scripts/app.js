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

$('#hamburger').on('click', function(){
  $('#nav-list').show();
});

$('#nav-list li').hover( function(){
  $('li').animate({ marginLeft: '10px' }, 400);
  $('li').stop().animate({ marginLeft: '0px' });
});
