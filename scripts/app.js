'use strict';
(function(module) {

function Portfolio (portfoliosData) {
Object.keys(portfoliosData).forEach(key => this [key] = portfoliosData[key]);
}

Portfolio.all = [];

Portfolio.prototype.toHtml = function() {
  let renderPortfolios = Handlebars.compile($('#portfolio-template').text());
  return renderPortfolios(this);
};

$.getJSON('/data/portfolios.json', function(portfoliosData) {
  portfoliosData.forEach(function(portfoliosObject) {
    let portfolio = new Portfolio(portfoliosObject);
    $('#portfolioSection').append(portfolio.toHtml());
  });
});

})(window);
