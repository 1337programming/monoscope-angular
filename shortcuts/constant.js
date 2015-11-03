var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('constant/constant.js');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['constantName', 'moduleName', 'filename']);
  if (!validFields) {
    return;
  }

  var constant = template(data);

  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);

  var dasherizedConstantName = namingUtil.dasherizeConstantName(data.constantName);
  path = path.replace(/:dasherizedConstantName/g, dasherizedConstantName);

  fsUtil.createComponent(data.constantName, constant, path, 'Constant');
}

module.exports = function(config) {
  return {
    name: 'Create a Constant',
    form: [{
        label: 'Constant Name',
        prop: 'constantName',
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
        default: config.defaultConstantFilePath || 'src/:dasherizedModuleName/:dasherizedConstantName.constant.js'
    }],
    action: action
  };
};
