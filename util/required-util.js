var requiredUtil = module.exports = {};

requiredUtil.validatePopulatedFields = function(data, fields) {
  if (Array.isArray(fields)) {
    var isPopulated = true;
    fields.forEach(function(field) {
      isPopulated = isPopulated && requiredUtil.validatePopulatedFields(data, field);
    });
    return isPopulated;
  }
  else {
    if (!data[fields]) {
      console.log(fields + ' is not populated and is required.');
      return false;
    }
    return true;
  }
}
