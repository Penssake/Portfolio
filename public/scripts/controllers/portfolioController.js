'use strict';

(function(module) {
  $('#portfolioList').on('click', function() {
    $('#portfolio').show().siblings().hide();

  });
  repos.requestRepos(repoView.index);
})(window);
