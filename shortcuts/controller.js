var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('controller/controller.js');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['controllerName', 'moduleName', 'filename']);
  if (!validFields) {
    return;
  }

  var controller = template(data);

  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);

  var dasherizedControllerName = namingUtil.dasherizeControllerName(data.controllerName);
  path = path.replace(/:dasherizedControllerName/g, dasherizedControllerName);

  fsUtil.createComponent(data.controllerName, controller, path, 'Controller');
}

module.exports = function(config) {
  return {
    name: 'Create a Controller',
    form: [{
        label: 'Controller Name',
        prop: 'controllerName',
        type: 'text'
    }, {
        label: 'Module Name',
        prop: 'moduleName',
        type: 'text'
    },
      {
        label: 'File Name and Path',
        prop: 'filename',
        type: 'text',
        default: config.defaultControllerFilePath || 'src/:dasherizedModuleName/:dasherizedControllerName.controller.js'
    }],
    action: action
  };
};
