var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('factory/factory.js');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['factoryName', 'moduleName', 'filename']);
  if (!validFields) {
    return;
  }

  var factory = template(data);

  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);

  var dasherizedFactoryName = namingUtil.dasherizeFactoryName(data.factoryName);
  path = path.replace(/:dasherizedFactoryName/g, dasherizedFactoryName);

  fsUtil.createComponent(data.factoryName, factory, path, 'Factory');
}

module.exports = function(config) {
  return {
    name: 'Create a Factory',
    form: [{
        label: 'Factory Name',
        prop: 'factoryName',
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
        default: config.defaultFactoryFilePath || 'src/:dasherizedModuleName/:dasherizedFactoryName.factory.js'
    }],
    action: action
  };
};
