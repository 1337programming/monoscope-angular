var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('value/value.js');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['valueName', 'moduleName', 'filename']);
  if (!validFields) {
    return;
  }

  var value = template(data);

  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);

  var dasherizedValueName = namingUtil.dasherizeValueName(data.valueName);
  path = path.replace(/:dasherizedValueName/g, dasherizedValueName);

  fsUtil.createComponent(data.valueName, value, path, 'Value');
}

module.exports = function(config) {
  return {
    name: 'Create a Value',
    form: [{
        label: 'Value Name',
        prop: 'valueName',
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
        default: config.defaultValueFilePath || 'src/:dasherizedModuleName/:dasherizedValueName.value.js'
    }],
    action: action
  };
};
