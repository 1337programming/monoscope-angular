'use strict';

angular.module('applesauce').filter('apple', function() {
  return function(input) {
    return input;
  };
});
