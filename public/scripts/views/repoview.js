'use strict';

(function(module){
  const repoView = {}
  const ui = function() {
    let $portfolio = $('#portfolio');

  };

  let render = Handlebars.compile($('#repo-template').text());
  repoView.index = function() {
    ui();
    $('#portfolio').append(
      repos.with('name').map(render)
    );
  };
  
  module.repoView = repoView;
})(window);
