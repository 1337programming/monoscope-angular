var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('decorator/decorator.js');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['decoratorName', 'moduleName', 'filename']);
  if (!validFields) {
    return;
  }

  var decorator = template(data);

  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);

  var dasherizedDecoratorName = namingUtil.dasherizeDecoratorName(data.decoratorName);
  path = path.replace(/:dasherizedDecoratorName/g, dasherizedDecoratorName);

  fsUtil.createComponent(data.decoratorName, decorator, path, 'Decorator');
}

module.exports = function(config) {
  return {
    name: 'Create a Decorator',
    form: [{
        label: 'Decorator Name',
        prop: 'decoratorName',
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
        default: config.defaultDecoratorFilePath || 'src/:dasherizedModuleName/:dasherizedDecoratorName.decorator.js'
    }],
    action: action
  };
};
