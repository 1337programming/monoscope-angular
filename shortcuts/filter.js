var requiredUtil = require('../util/required-util');
var namingUtil = require('../util/naming-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('filter/filter.js');

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['filterName', 'moduleName', 'filename']);
  if (!validFields) {
    return;
  }

  var filter = template(data);

  var dasherizedModuleName = namingUtil.dasherizeModuleName(data.moduleName);
  var path = data.filename.replace(/:dasherizedModuleName/g, dasherizedModuleName);

  var dasherizedFilterName = namingUtil.dasherizeFilterName(data.filterName);
  path = path.replace(/:dasherizedFilterName/g, dasherizedFilterName);

  fsUtil.createComponent(data.filterName, filter, path, 'Filter');
}

module.exports = function(config) {
  return {
    name: 'Create a Filter',
    form: [{
        label: 'Filter Name',
        prop: 'filterName',
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
        default: config.defaultFilterFilePath || 'src/:dasherizedModuleName/:dasherizedFilterName.filter.js'
    }],
    action: action
  };
};
