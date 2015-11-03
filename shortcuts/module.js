var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('module/module.js');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['moduleName', 'filename']);
  if (!validFields) {
    return;
  }
  var module = template(data);
  
  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);
  
  fsUtil.createComponent(data.moduleName, module, path, 'Module');
}

module.exports = function(config) {
  return {
    name: 'Create a Module',
    form: [{
        label: 'Module Name',
        prop: 'moduleName',
        type: 'text'
    },
      {
        label: 'File Name and Path',
        prop: 'filename',
        type: 'text',
        default: config.defaultModuleFilePath || 'src/:dasherizedModuleName/:dasherizedModuleName.module.js'
    },
      {
        label: 'Create a config block?',
        prop: 'includeConfigBlock',
        type: 'checkbox'
    },
      {
        label: 'Create a run block?',
        prop: 'includeRunBlock',
        type: 'checkbox'
    }],
    action: action
  };
};
