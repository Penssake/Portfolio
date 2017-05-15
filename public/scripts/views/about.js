'use strict';

(function(module) {

function About (aboutData) {
Object.keys(aboutData).forEach(key => this [key] = aboutData[key]);
}

About.all = [];

About.prototype.toHtml = function() {
  let renderAbout = Handlebars.compile($('#about-template').text());
  return renderAbout(this);
};

$.getJSON('/data/about.json', function(aboutData) {
  aboutData.map(function(aboutObject) {
    let about = new About(aboutObject);
    $('#about').append(about.toHtml());
  });
});

})(window);
