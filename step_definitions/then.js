var helpers = require('./helpers');
var navigation = helpers.navigation;
var form = helpers.form;

module.exports = function () {
  this.Then(/^I should be at "([^"]*)"$/, function (url) {
    return navigation.location.assertAtLocation(browser, url);
  });

  this.Then(/^The "([^"]*)" input should be "([^"]*)"$/, function (inputReference, value) {
    return form.input.assertInputValue(browser, inputReference, value);
  });
}
