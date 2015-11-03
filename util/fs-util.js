var fsUtil = module.exports = {};
var fs = require('fs-extra');
var ejs = require('ejs');

fsUtil.createComponent = function(name, data, path, componentType, cb) {
  fs.outputFile(path, data, function(err) {
    if (cb) {
      cb(err);
    }
    if (err) {
      console.log('Error creating ' + path + '. Error: ' + err);
    }
    else {
      console.log(componentType + ' ' + name + ' created: ' + path);
    }
  });
};

fsUtil.template = function(templatePath) {
  return ejs.compile(fs.readFileSync(__dirname + '/../templates/' + templatePath, 'utf-8'));
};
