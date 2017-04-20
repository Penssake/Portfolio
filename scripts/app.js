'use strict';

var portfolio = [];

function Portfolio (portfolioDataObj) {
  this.title = portfolioDataObj.title;
  this.body = portfolioDataObj.body;
}

Portfolio.prototype.toHtml = function() {
  var theTemplate = $('#page-article').html();
  var renderPortfolio = Handlebars.compile(theTemplate);

  return renderPortfolio(this);
};

portfolioData.forEach(function(portfolioObj) {
  portfolio.push(new Portfolio(portfolioObj));
  console.log(portfolioObj);
});

portfolio.forEach(function(portfolio){
  $('body').append(portfolio.toHtml('#portfolio'));
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
  $('#aboutList').animate({ marginLeft: '10px'}, 200);
  $('#aboutList').animate({ marginLeft: '0px' }, 200);
});

$('#portfolioList').hover( function(){
  $('#portfolioList').animate({ margin: '10px' }, 200);
  $('#portfolioList').animate({ margin: '0px' }, 200);
});

$('#blogList').hover( function(){
  $('#blogList').animate({ margin: '10px' }, 200);
  $('#blogList').animate({ margin: '0px' }, 200);
});

$('#contactList').hover( function(){
  $('#contactList').animate({ margin: '10px' }, 200);
  $('#contactList').animate({ margin: '0px' }, 200);
});
