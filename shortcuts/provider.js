var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('provider/provider.js');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['providerName', 'moduleName', 'filename']);
  if (!validFields) {
    return;
  }

  var provider = template(data);

  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);

  var dasherizedProviderName = namingUtil.dasherizeProviderName(data.providerName);
  path = path.replace(/:dasherizedProviderName/g, dasherizedProviderName);

  fsUtil.createComponent(data.providerName, provider, path, 'Provider');
}

module.exports = function(config) {
  return {
    name: 'Create a Provider',
    form: [{
        label: 'Provider Name',
        prop: 'providerName',
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
        default: config.defaultProviderFilePath || 'src/:dasherizedModuleName/:dasherizedProviderName.provider.js'
    }],
    action: action
  };
};
