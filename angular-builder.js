var angularBuilder = module.exports = {};
var fs = require('fs');
var EJS = require('ejs');
var readline = require('readline');

angularBuilder.run = function (data) {

  var esjData = {
    'appName': data.appName,
    'moduleName': data.moduleName,
    'ctrlName': data.ctrlName,
    'ctrlArgs': data.ctrlArgs,
    'direcName': data.direcName,
    'direcArgs': data.direcArgs,
    'servName': data.servName,
    'servArgs': data.servArgs,
    'state': data.state,
    'url': data.url
  };

  function build () {
    var controller = new EJS({url: 'templates/module/module-controller.js'}).render(esjData);
    var directive = new EJS({url: 'templates/module/module-directive.js'}).render(esjData);
    var service = new EJS({url: 'templates/module/module-service.js'}).render(esjData);
    var config = new EJS({url: 'templates/module/module-config.js'}).render(esjData);
    var view = new EJS({url: 'templates/module/module-view.js'}).render(esjData);
    return {
      'controller': controller,
      'directive': directive,
      'service': service,
      'config': config,
      'view': view
    };
  }

  return build();

};
