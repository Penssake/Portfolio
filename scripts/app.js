'use strict';

var portfolio = [];
var articleSection = [];
var imagePath = '/images';

function Portfolio (portfolioDataObj) {
  this.title = portfolioDataObj.title;
  this.body = portfolioDataObj.body;
  this.img = portfolioDataObj.img;
}

Portfolio.prototype.toHtml = function() {
  var theTemplate = $('#page-article').html();
  var renderPortfolio = Handlebars.compile(theTemplate);
  return renderPortfolio(this);
};

portfolioDataObj.forEach(function(portfolioObj) {
  portfolio.push(new Portfolio(portfolioObj));
  console.log(portfolioObj);
});

portfolio.forEach(function(portfolio){
  articleSection.push('portfolio');
  $('body').append(articleSection.toHtml('#pageArticleSection'));
  console.log('anything');
});

//Animations for hamburger and Nav-list.
// $('#headShotBounce').on('load', function(){
//   $('#headShotBounce').animate({ margin-top: '0px'});
// });

$('#hamburger').on('click', function(){
  $('#nav-list').show();
});

$('#aboutList').hover( function(){
  $('#aboutList').animate({ marginLeft: '10px'}, 200);
  $('#aboutList').animate({ marginLeft: '0px' }, 200);
});

$('#aboutList').on('click', function(){
  $('#aboutList').animate({ width: '100%'});
  $('#aboutList').animate({ borderRadius: '0%'});
});

$('#portfolioList').hover( function(){
  $('#portfolioList').animate({ marginLeft: '10px' }, 200);
  $('#portfolioList').animate({ marginLeft: '0px' }, 200);
});

$('#portfolioList').on('click', function(){
  $('#portfolioList').animate({ width: '100%'});
  $('#portfolioList').animate({ borderRadius: '0%'});
});

$('#blogList').hover( function(){
  $('#blogList').animate({ marginLeft: '10px' }, 200);
  $('#blogList').animate({ marginLeft: '0px' }, 200);
});

$('#blogList').on('click', function(){
  $('#blogList').animate({ width: '100%'});
  $('#blogList').animate({ borderRadius: '0%'});
});

$('#contactList').hover( function(){
  $('#contactList').animate({ marginLeft: '10px' }, 200);
  $('#contactList').animate({ marginLeft: '0px' }, 200);
});

$('#contactList').on('click', function(){
  $('#contactList').animate({ width: '100%'});
  $('#contactList').animate({ borderRadius: '0%'});
});
