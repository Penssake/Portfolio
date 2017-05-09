'use strict';

(function(module) {
  const blogController = {};
  blogController.show = function() {
    $('.tab-content').hide();
    $('#blog').fadeIn();
  };
  module.blogController = blogController;
})(window);
