'use strict';

angular.module('<%= moduleName %>', [])<% if (includeConfigBlock) { %>.config(function() {

})<% } if (includeRunBlock) {%>.run(function() {

})<% } %>;
