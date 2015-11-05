# monoscope-angular
*AngularJS code-generation shortcuts written with Monoscope.*

![alt tag](https://raw.githubusercontent.com/1337programming/monoscope/master/logo-banner.png)

## Installation
Run the command `npm i monoscope-angular --save` to install.

For an initial project setup with this plugin, please see [monoscope-angular-starter](https://github.com/1337programming/monoscope-angular-starter "Monoscope Angular Starter").
## Usage
Simply add the following code to a task within your application:

```javascript
var monoscopeAngular = require('monoscope-angular');
monoscopeAngular.run(config);
```
## Configuration
The config object can include the following properties:
 - title (Default 'Monoscope AngularJS')
 - port (Default 8045)
 - color (Default blue)
 - defaultConstantFilePath (Default 'src/:dasherizedModuleName/:dasherizedConstantName.constant.js')
 - defaultControllerFilePath (Default 'src/:dasherizedModuleName/:dasherizedControllerName.controller.js')
 - defaultDecoratorFilePath (Default 'src/:dasherizedModuleName/:dasherizedDecoratorName.decorator.js')
 - defaultDirectiveFilePath (Default 'src/:dasherizedModuleName/:dasherizedDirectiveName.directive.js')
 - defaultFactoryFilePath (Default 'src/:dasherizedModuleName/:dasherizedFactoryName.factory.js')
 - defaultFilterFilePath (Default 'src/:dasherizedModuleName/:dasherizedFilterName.filter.js')
 - defaultModuleFilePath (Default 'src/:dasherizedModuleName/:dasherizedModuleName.module.js')
 - defaultProviderFilePath (Default 'src/:dasherizedModuleName/:dasherizedProviderName.provider.js')
 - defaultServiceFilePath (Default 'src/:dasherizedModuleName/:dasherizedServiceName.service.js')
 - defaultValueFilePath (Default 'src/:dasherizedModuleName/:dasherizedValueName.value.js')
 - defaultViewFilePath (Default 'src/:dasherizedModuleName/:dasherizedViewName.html')
 
## Shortcuts
 - Create a Module
 - Copy State to Clipboard
 - Create a Controller
 - Create a View
 - Create a Service
 - Create a Filter
 - Create a Factory
 - Create a Provider
 - Create a Directive
 - Create a Decorator
 - Create a Constant
 - Create a Value
 
