var namingUtil = module.exports = {};
var slugify = require('underscore.string/slugify');

namingUtil.dasherizeConstantName = function(constantName) {
  return convert(constantName, /constant|const/gi);
};

namingUtil.dasherizeControllerName = function(controllerName) {
  return convert(controllerName, /controller|ctrl/gi);
};

namingUtil.dasherizeDecoratorName = function(decoratorName) {
  return convert(decoratorName, /decorator/gi);
};

namingUtil.dasherizeDirectiveName = function(directiveName) {
  return convert(directiveName, /directive/gi);
};

namingUtil.dasherizeFactoryName = function(factoryName) {
  return convert(factoryName, /factory/gi);
};

namingUtil.dasherizeFilterName = function(filterName) {
  return convert(filterName, /filter/gi);
};

namingUtil.dasherizeModuleName = function(moduleName) {
  return convert(moduleName, /module/gi);
};

namingUtil.dasherizeProviderName = function(providerName) {
  return convert(providerName, /provider/gi);
};

namingUtil.dasherizeServiceName = function(serviceName) {
  return convert(serviceName, /service/gi);
};

namingUtil.dasherizeValueName = function(valueName) {
  return convert(valueName, /value/gi);
};

namingUtil.dasherizeViewName = function(viewName) {
  return convert(viewName, /view|\.?html/gi);
};

function convert(name, regex) {
  return slugify(name.replace(/([A-Z])/g, ' $1').replace(regex, ''));
}
