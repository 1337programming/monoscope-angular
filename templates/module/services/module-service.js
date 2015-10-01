'use strict';

angular.module('<%= appName %>.<%= moduleName %>')
  .service('<%= servName %>', function (<% for (var i = 0; i < arguments.length; i++) { %> <%= arguments[i] %><% } %>) {

  });
