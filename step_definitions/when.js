var lib = require('./lib');
var navigation = lib.navigation;
var form = lib.form;
var interaction = lib.interaction;

module.exports = function () {
  this.When(/^I am at "([^"]*)"$/, function (uri) {
    return navigation.location.setBrowserLocation(browser, uri);
  });

  this.When(/^I click the "([^"]*)" link$/, function (anchorText) {
    return navigation.link.click(browser, anchorText);
  });

  this.When(/^I enter "([^"]*)" into the "([^"]*)" field$/, function (value, inputReference) {
    return form.input.setInputValue(browser, inputReference, value);
  });

  this.When(/^I submit the form$/, function () {
    return form.form.submitCurrentForm(browser);
  });

  this.When(/^I click the "([^"]*)"$/, function (selector) {
    return interaction.clickElement(browser, selector);
  });
}
