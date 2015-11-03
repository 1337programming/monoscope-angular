var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('directive/directive.js');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['directiveName', 'moduleName', 'filename']);
  if (!validFields) {
    return;
  }

  var directive = template(data);

  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);

  var dasherizedDirectiveName = namingUtil.dasherizeDirectiveName(data.directiveName);
  path = path.replace(/:dasherizedDirectiveName/g, dasherizedDirectiveName);

  fsUtil.createComponent(data.directiveName, directive, path, 'Directive');
}

module.exports = function(config) {
  return {
    name: 'Create a Directive',
    form: [{
        label: 'Directive Name',
        prop: 'directiveName',
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
        default: config.defaultDirectiveFilePath || 'src/:dasherizedModuleName/:dasherizedDirectiveName.directive.js'
    }],
    action: action
  };
};
