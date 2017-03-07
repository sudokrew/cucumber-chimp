var helpers = require('./helpers');
var navigation = helpers.navigation;

module.exports = function () {
  this.When(/^I am at "([^"]*)"$/, function (uri) {
    return navigation.location.setBrowserLocation(browser, uri);
  });

  this.When(/^I click the "([^"]*)" link$/, function (anchorText) {
    return navigation.link.click(browser, anchorText);
  });
}
