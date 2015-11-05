var requiredUtil = require('../util/required-util');
var fsUtil = require('../util/fs-util');
var template = fsUtil.template('state/state.js');
var copyPaste = require("copy-paste");

function action(data) {
  var validFields = requiredUtil.validatePopulatedFields(data, ['stateName']);
  if (!validFields) {
    return;
  }

  var state = template(data);
  copyPaste.copy(state, function() {
  	console.log('State ' + data.stateName + ' copied to the clipboard!');
  });
}

module.exports = function(config) {
	return {
		name: 'Copy State to Clipboard',
		form: [{
			label: 'State Name',
			prop: 'stateName',
			type: 'text'
		}, {
			label: 'URL (i.e. /example/url)',
			prop: 'url',
			type: 'text'
		}, {
            label: 'Template',
            prop: 'template',
            type: 'select',
            options: [
            {
                label: 'Template',
                value: 'template'
            }, {
                label: 'templateUrl',
                value: 'templateUrl',
                selected: 'selected'
            }, {
            	label: 'templateProvider',
            	value: 'templateProvider'
            }]
        }, {
			label: 'If templateUrl, type url:',
			prop: 'templateUrl',
			type: 'text'
		}, {
            label: 'Controller',
            prop: 'controller',
            type: 'select',
            options: [
            {
                label: 'Controller By Name',
                value: 'controllerByName',
                selected: 'selected'
            }, {
                label: 'Controller Function',
                value: 'controllerFunction'
            }, {
            	label: 'Controller Provider',
            	value: 'controllerProvider'
            }, {
            	label: 'None',
            	value: 'none'
            }]
        }, {
			label: 'If Controller By Name or Provider, type name:',
			prop: 'controllerName',
			type: 'text'
		}, {
			label: 'Abstract?',
			prop: 'abstract',
			type: 'checkbox'
		}, {
			label: 'Include Resolve object?',
			prop: 'includeResolve',
			type: 'checkbox'
		}, {
			label: 'Include Params object?',
			prop: 'includeParams',
			type: 'checkbox'
		}, {
			label: 'Include Views object?',
			prop: 'includeViews',
			type: 'checkbox'
		}, {
			label: 'Include onEnter function?',
			prop: 'includeOnEnter',
			type: 'checkbox'
		}, {
			label: 'Include onExit function?',
			prop: 'includeOnExit',
			type: 'checkbox'
		}, {
			label: 'Reload on Search?',
			prop: 'reloadOnSearch',
			type: 'checkbox',
			default: true
		}],
		action: action
	};
};
