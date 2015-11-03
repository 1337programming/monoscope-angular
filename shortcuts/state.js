function action(data) {
	//TODO: Action
}

module.exports = function(config) {
	return {
		name: 'Copy State to Clipboard',
		form: [{
			label: 'State Name',
			prop: 'stateName',
			type: 'text'
		}, {
            label: 'Template',
            prop: 'template',
            type: 'select',
            options: [
            {
                label: 'Template',
                value: 'template',
                selected: 'selected'
            }, {
                label: 'templateUrl',
                value: 'templateUrl'
            }, {
            	label: 'templateProvider',
            	value: 'templateProvider'
            }]
        }, {
			label: 'If templateUrl, type url:',
			prop: 'templateUrl',
			type: 'text'
		}, { //TODO: Make a select
			label: 'Controller: Include Controller? If yes, type controller name.',
			prop: 'includeController',
			type: 'text'
		}, {
			label: 'Controller: Include Controller Function?',
			prop: 'includeControllerFunction',
			type: 'checkbox'
		}, {
			label: 'Controller: Include Controller Provider?',
			prop: 'includeControllerProvider',
			type: 'checkbox'
		}, {
			label: 'Include Resolve object?',
			prop: 'includeResolve',
			type: 'checkbox'
		}],
		action: action
	};
};
