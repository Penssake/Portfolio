'use strict';

(function(module) {
  const contactController = {};
  contactController.show = function() {
    $('#contact').siblings().hide();
    $('#contact').fadeIn();
  };
  module.contactController = contactController;
})(window);
