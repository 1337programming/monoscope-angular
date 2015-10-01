'use strict';

angular.module('<%= appName %>.<%= moduleName %>')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('<%= state %>', {
        url: '/<%= url %>',
        templateUrl: '<%= url %>',
        controller: '<%= ctrlName %>'
      });

    $urlRouterProvider.otherwise('/');

  });
