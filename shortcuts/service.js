var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('service/service.js');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['serviceName', 'moduleName', 'filename']);
  if (!validFields) {
    return;
  }

  var service = template(data);

  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);

  var dasherizedServiceName = namingUtil.dasherizeServiceName(data.serviceName);
  path = path.replace(/:dasherizedServiceName/g, dasherizedServiceName);

  fsUtil.createComponent(data.serviceName, service, path, 'Service');
}

module.exports = function(config) {
  return {
    name: 'Create a Service',
    form: [{
        label: 'Service Name',
        prop: 'serviceName',
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
        default: config.defaultServiceFilePath || 'src/:dasherizedModuleName/:dasherizedServiceName.service.js'
    }],
    action: action
  };
};
