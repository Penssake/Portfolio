'use strict';

(function(module) {
  const blogController = {};
  blogController.show = function() {
    $('.main').hide();
    $('#blog').fadeIn();
  };
  module.blogController = blogController;
})(window);
