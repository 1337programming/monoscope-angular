'use strict';

angular.module('<%= moduleName %>').factory('<%= providerName %>', function() {
  var <%= providerName %> = {};

  <%= providerName %>.$get = function() {
  	return {};
  };

  return <%= providerName %>;
});
