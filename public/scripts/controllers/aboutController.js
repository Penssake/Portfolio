'use strict';

(function(module) {
  const aboutController = {};
  aboutController.show = function() {
    $('.main').hide();
    $('#about').fadeIn();
  };
  module.aboutController = aboutController;
})(window);
