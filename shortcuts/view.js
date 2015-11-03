var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('view/view.html');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['viewName', 'moduleName', 'filename']);
  if (!validFields) {
    return;
  }

  var view = template(data);

  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);

  var dasherizedViewName = namingUtil.dasherizeViewName(data.viewName);
  path = path.replace(/:dasherizedViewName/g, dasherizedViewName);

  fsUtil.createComponent(data.viewName, view, path, 'View');
}

module.exports = function(config) {
  return {
    name: 'Create a View',
    form: [{
        label: 'View Name',
        prop: 'viewName',
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
        default: config.defaultViewFilePath || 'src/:dasherizedModuleName/:dasherizedViewName.html'
    }],
    action: action
  };
};
