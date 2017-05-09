'use strict';

(function(module) {
  const contactController = {};
  contactController.show = function() {
    $('.tab-content').hide();
    $('#contact').fadeIn();
  };
  module.contactController = contactController;
})(window);
