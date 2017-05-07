'use strict';

var portfolioArray = [];

function Portfolio (portfoliosDataObj) {
  this.title = portfoliosDataObj.title;
  this.body = portfoliosDataObj.body;
  this.img = portfoliosDataObj.img;
}

Portfolio.prototype.toHtml = function() {
  var renderPortfolios = Handlebars.compile($('#portfolio-template').text());
  return renderPortfolios(this);
};

$.getJSON('/data/portfolios.json', function(portfolios) {
  portfolios.forEach(function(portfoliosDataObject) {
    var portfolio = new Portfolio(portfoliosDataObject);
    portfolioArray.push(portfolio);
    print();
  });
});

function print () {
  if(portfolioArray.length > 0)
    $('#portfolioSection').empty();
  portfolioArray.forEach(function(data) {
    $('#portfolioSection').append(data.toHtml());
  });
}

Portfolio();
