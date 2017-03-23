var expect = require('chai').expect;
var webdriverIOHelpers = require('../../../helpers/webdriverio');

var getElement = webdriverIOHelpers.getElement;

var COMMA_SEPARATION = /,\s*/g;

module.exports = {
  assertSelectContainsOptions: assertSelectContainsOptions,
  assertSelectedValue: assertSelectedValue,
  setSelectValue: setSelectValue,
  setMultiSelectValue: setMultiSelectValue,
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
 * Checks the whether the select element has an option selected or not
 * @param  {WebdriverIO} browser    Instance of web driver
 * @param  {String}      reference  The select reference, could be name > placeholder > label
 * @param  {String}      text       The selected option's text
 * @param  {Boolean}     isSelected Whether the options are selected or not
 */
function assertSelectedValue (browser, reference, text, isSelected) {
  var expectedValues = text.split(COMMA_SEPARATION);
  var selectElement = getSelectElement(browser, reference);
  var actualValues = selectElement.elements('option:checked').value.map(function (optionElement) {
    return optionElement.getText();
  });

  if (isSelected) {
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

/**
 * Sets the multiselect elements value based on visible text
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      reference The select reference, could be name > placeholder > label
 * @param  {String}      text      The text to select by
 */
function setMultiSelectValue (browser, reference, text) {
  var selectElement = getSelectElement(browser, reference);
  var targetValues = text.split(COMMA_SEPARATION);

  targetValues.forEach(function (text) {
    return selectElement.selectByVisibleText(text);
  });
}
