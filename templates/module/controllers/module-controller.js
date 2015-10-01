'use strict';

angular.module('<%= appName %>.<%= moduleName %>')
  .controller('<%= ctrlName %>', function (<% for (var i = 0; i < ctrlArgs.length; i++) { %> <%= ctrlArgs[i] %><% } %>) {

  });
