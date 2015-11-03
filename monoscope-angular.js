var monoscopeAngular = module.exports = {};
var monoscope = require('monoscope');

monoscopeAngular.getShortcuts = function(config) {
  config = config || {};
  return [
    require('./shortcuts/module')(config),
    require('./shortcuts/controller')(config),
    require('./shortcuts/view')(config),
    require('./shortcuts/service')(config),
    require('./shortcuts/factory')(config),
    require('./shortcuts/provider')(config),
    require('./shortcuts/directive')(config),
    require('./shortcuts/filter')(config),
    require('./shortcuts/decorator')(config),
    require('./shortcuts/constant')(config),
    require('./shortcuts/value')(config),
    require('./shortcuts/state')(config)
  ];
}

monoscopeAngular.run = function(config) {
  config = config || {};
  var options = {
    title: config.title || 'Monoscope AngularJS',
    port: config.port || 8045,
    color: config.color || 'blue'
  };
  monoscope.run(monoscopeAngular.getShortcuts(config), options);
};

monoscopeAngular.run();

/* Properties
title ==> Monoscope AngularJS
port ==> 8045
color ==> blue
defaultModuleFilePath
defaultControllerFilePath
*/

/*
function build () {
    var controller = new EJS({url: 'templates/module/module-controller.js'}).render(data);
    var directive = new EJS({url: 'templates/module/module-directive.js'}).render(data);
    var service = new EJS({url: 'templates/module/module-service.js'}).render(data);
    var config = new EJS({url: 'templates/module/module-config.js'}).render(data);
    var view = new EJS({url: 'templates/module/module-view.js'}).render(data);
    return {
      'controller': controller,
      'directive': directive,
      'service': service,
      'config': config,
      'view': view
    };
  }

  return build();

  function getShortcuts() {
    return [
    {
        name: 'Create a Module',
        form: [
        {
            label: 'Module Name',
            type: 'text',
            default: 'newModule'
        },
        {
            label: 'Include a Directive?',
            type:   `'checkbox'
        }],
        action: function(data) {
            console.log('Create a Module data', data);
        }
    },
    {
        name: 'Create a Service',
        form: [
        {
            label: 'Service Name',
            type: 'text',
            default: 'myService'
        },
        {
            label: 'Select Test',
            type: 'select',
            options: [
            {
                label: 'Label 1',
                value: 'label1'
            },
            {
                label: 'Label 2',
                value: 'label2',
                selected: 'selected'
            }]
        },
        {
            label: 'Multiselect Test',
            type: 'multiselect',
            options: [
            {
                label: 'Label 1',
                value: 'label1',
                selected: 'selected'
            },
            {
                label: 'Label 2',
                value: 'label2',
                selected: 'selected'
            }]
        },
        {
            label: 'Checkbox Test',
            type: 'checkbox',
            default: true
        }],
        action: function(data) {
            console.log('Create a Service data', data);
        }
    }, {
        name: 'No Form',
        action: function() {
            console.log('Run some Node code immediately.');
        }
    }];
  */
