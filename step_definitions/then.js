var lib = require('./lib');
var navigation = lib.navigation;
var form = lib.form;

module.exports = function () {
  this.Then(/^I should be at "([^"]*)"$/, function (url) {
    return navigation.location.assertAtLocation(browser, url);
  });

  this.Then(/^The "([^"]*)" input should be "([^"]*)"$/, function (inputReference, value) {
    return form.input.assertInputValue(browser, inputReference, value);
  });

  this.Then(/^"([^"]*)" should( not)? be required$/, function (inputReference, isNotRequired) {
    return form.input.assertInputRequired(browser, inputReference, !isNotRequired);
  });
}
