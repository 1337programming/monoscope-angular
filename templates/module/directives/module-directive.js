'use strict';

angular.module('<%= appName %>.<%= moduleName %>')
  .directive('<%= direcName %>', function (<% for (var i = 0; i < arguments.length; i++) { %> <%= arguments[i] %><% } %>) {

  });

