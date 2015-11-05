$stateProvider.state('<%= stateName %>', {<% if (url) { %>
  url: '<%= url %>'<% } if (template === 'template') { %>,
  template: ''<% } else if (template === 'templateUrl') { %>,
  templateUrl: '<%= templateUrl %>'<% } else if (template === 'templateProvider') { %>,
  templateProvider: function() {
    return '<%= templateUrl %>';
  }<% } if (controller === 'controllerByName') { %>,
  controller: '<%= controllerName %>'<% } else if (controller === 'controllerFunction') { %>,
  controller: function() {
  }<% } else if (controller === 'controllerProvider') { %>,
  controllerProvider: function() {
  	return '<%= controllerName %>';
  }<% } if (abstract) { %>,
  abstract: true<% } if (includeResolve) { %>,
  resolve: {}<% } if (includeParams) { %>,
  params: {}<% } if (includeViews) { %>,
  views: {}<% } if (includeOnEnter) { %>,
  onEnter: function() {
  }<% } if (includeOnExit) { %>,
  onExit: function() {
  }<% } if (!reloadOnSearch) { %>,
  reloadOnSearch: false<% } %>
});
