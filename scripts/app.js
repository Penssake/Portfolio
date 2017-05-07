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
  console.log(this);
};

$.getJSON('/data/portfolios.json', function(portfolios) {
  portfolios.forEach(function(portfoliosDataObject) {
    var portfolio = new Portfolio(portfoliosDataObject);
    portfolioArray.push(portfolios);
    console.log(portfolios);
  });
});

function print () {
  portfolioArray.forEach(function(data) {
    $('#portfolioSection').append(data.toHtml());
  });
}

Portfolio();
print();
