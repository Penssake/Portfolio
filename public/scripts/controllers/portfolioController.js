'use strict';

(function(module) {
  const portfolioController = {};
  portfolioController.show = function() {
    $('.main').hide();
    $('#portfolio').fadeIn();
  };
})(window);
