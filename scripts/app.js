'use strict';

function Portfolio (portfolioDataObj) {
  this.title = portfolioDataObj.title;
  this.body = portfolioDataObj.body;
  this.img = portfolioDataObj.img;
}

Portfolio.prototype.toHtml = function() {
  var theTemplate = $('#page-article').html();
  var renderPortfolio = Handlebars.compile(theTemplate);
  return theTemplate(this);
};

$.getJSON('./data/dataSource.json', function(dataSource) {
  dataSource.forEach(function(portfolioObject) {
    var portfolio = new Portfolio(portfolioObject);
    $('#portfolio').append(portfolio.toHtml());
  });
});

portfolio.fetchAll = function() {
  if(localStorage.portfolioData) {
    Portfolio.loadAll(JSON.parse(localStorage.portfolioData));
  }else{
    $.getJSON('/data/dataSource.json').then(function(portfolioDataObj){
      Portfolio.loadAll(portfolioDataObj);
      console.log(portfolioDataObj);
    });
  }
};
