var monoscopeAngular = module.exports = {};
var monoscope = require('monoscope');

monoscopeAngular.getShortcuts = function(config) {
  config = config || {};
  return [
    require('./shortcuts/module')(config),
    require('./shortcuts/state')(config),
    require('./shortcuts/controller')(config),
    require('./shortcuts/view')(config),
    require('./shortcuts/service')(config),
    require('./shortcuts/factory')(config),
    require('./shortcuts/provider')(config),
    require('./shortcuts/directive')(config),
    require('./shortcuts/filter')(config),
    require('./shortcuts/decorator')(config),
    require('./shortcuts/constant')(config),
    require('./shortcuts/value')(config)
  ];
};

monoscopeAngular.run = function(config) {
  config = config || {};
  var options = {
    title: config.title || 'Monoscope AngularJS',
    port: config.port || 8045,
    color: config.color || 'blue'
  };
  monoscope.run(monoscopeAngular.getShortcuts(config), options);
};
