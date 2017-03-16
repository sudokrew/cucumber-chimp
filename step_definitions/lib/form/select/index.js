var expect = require('chai').expect;
var webdriverIOHelpers = require('../../../helpers/webdriverio');

var getElement = webdriverIOHelpers.getElement;

module.exports = {
  assertSelectContainsOptions: assertSelectContainsOptions,
};

/**
 * Gets an select based on a reference string
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      reference The select reference, could be name > placeholder > label
 * @return {String}      element   The select element
 */
function getSelectElement (browser, reference) {
  var selectElement = getElement(browser, reference);
  if (selectElement) {
    return selectElement;
  }

  var selectElementByName = getElement(browser, 'select[name="' + reference + '"]');
  if (selectElementByName) {
    return selectElementByName;
  }

  var labelElementByText = getElement(browser, 'label*=' + reference);
  if (labelElementByText) {
    return getElement(labelElementByText, 'select');
  }
}

function assertSelectContainsOptions (browser, selectReference, options, isRequired) {
  var expectedValues = options.split(/,\s*/g);
  var selectElement = getSelectElement(browser, selectReference);
  var actualValues = selectElement.elements('option').value.map(function (optionElement) {
    return optionElement.getText();
  });

  console.log(actualValues);

  if (isRequired) {
    return expect(actualValues).to.include.members(expectedValues);
  }

  return expect(actualValues).to.not.include.members(expectedValues);
}
