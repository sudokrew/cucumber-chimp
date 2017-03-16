var expect = require('chai').expect;
var webdriverIOHelpers = require('../../../helpers/webdriverio');

var getElement = webdriverIOHelpers.getElement;

module.exports = {
  assertSelectContainsOptions: assertSelectContainsOptions,
  setSelectValue: setSelectValue,
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

/**
 * Checks the whether the select element contains a value or not
 * @param  {WebdriverIO} browser    Instance of web driver
 * @param  {String}      reference  The select reference, could be name > placeholder > label
 * @param  {[String]}    options    The expected options
 * @param  {Boolean}     isRequired Whether the options are required or not
 */
function assertSelectContainsOptions (browser, reference, options, isRequired) {
  var expectedValues = options.split(/,\s*/g);
  var selectElement = getSelectElement(browser, reference);
  var actualValues = selectElement.elements('option').value.map(function (optionElement) {
    return optionElement.getText();
  });

  if (isRequired) {
    return expect(actualValues).to.include.members(expectedValues);
  }

  return expect(actualValues).to.not.include.members(expectedValues);
}

/**
 * Sets the select elements value based on visible text
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      reference The select reference, could be name > placeholder > label
 * @param  {String}      text      The text to select by
 */
function setSelectValue (browser, reference, text) {
  var selectElement = getSelectElement(browser, reference);
  return selectElement.selectByVisibleText(text);
}
