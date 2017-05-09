'use strict';

(function(module) {
  const portfolioController = {};
  portfolioController.show = function() {
    $('.tab-content').hide();
    $('#portfolio').fadeIn();
  };
})(window);
