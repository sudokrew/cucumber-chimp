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

  this.When(/^I select the "([^"]*)" option from the "([^"]*)" dropdown$/, function (value, selectReference) {
    return form.select.setSelectValue(browser, selectReference, value);
  });

  this.When(/^I select the "([^"]*)" options from the "([^"]*)" multiselect$/, function (value, selectReference) {
    return form.select.setMultiSelectValue(browser, selectReference, value);
  });
}
