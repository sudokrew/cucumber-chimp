var expect = require('chai').expect;
var webdriverIOHelpers = require('../../../helpers/webdriverio');

module.exports = {
  assertInputRequired: assertInputRequired,
  assertInputValue: assertInputValue,
  setInputValue: setInputValue,
};

var getElement = webdriverIOHelpers.getElement;

/**
 * Gets an input based on a reference string
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      reference The input reference, could be name > placeholder > label
 * @return {String}      element   The input element
 */
function getInputElement (browser, reference) {
  var inputElement = getElement(browser, reference);
  if (inputElement) {
    return inputElement;
  }

  var inputElementByName = getElement(browser, 'input[name="' + reference + '"]');
  if (inputElementByName) {
    return inputElementByName;
  }

  var labelElementByText = getElement(browser, 'label*=' + reference);
  if (labelElementByText) {
    return getElement(labelElementByText, 'input');
  }
}

/**
 * Retrieves an input's value from a reference string
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      reference The input reference, could be name > placeholder > label
 * @return {String}      value     The input's value
 */
function getInputValue (browser, reference) {
  var inputElement = getInputElement(browser, reference);
  return inputElement.getValue();
}

/**
 * Sets an input's value from a reference string
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      reference The input reference, could be name > placeholder > label
 * @return {String}      value     The input's value
 */
function setInputValue (browser, reference, value) {
  var inputElement = getInputElement(browser, reference);
  return inputElement.setValue(value);
}

/**
 * Asserts an input's value equality
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      reference The input reference, could be name > placeholder > label
 * @param  {String}      value     The expected value
 */
function assertInputValue (browser, reference, value) {
  expect(getInputValue(browser, reference)).to.equal(value);
}

/**
 * Get the attribute of an input
 * @param  {WebdriverIO}  browser        Instance of web driver
 * @param  {String}       reference      The input reference, could be name > placeholder > label
 * @param  {String}       attributeName  The name of the attribute
 * @return {String}       value          The value of the attribute
 */
function getInputAttribute (browser, reference, attributeName) {
  var inputElement = getInputElement(browser, reference);
  if (inputElement) {
    return inputElement.getAttribute(attributeName);
  }

  return null;
}

/**
 * Asserts whether a field is required or not
 * @param  {WebdriverIO} browser     Instance of web driver
 * @param  {String}      reference   The input reference, could be name > placeholder > label
 * @param  {Boolean}     isRequired  Whether the field is required or not
 */
function assertInputRequired (browser, reference, isRequired) {
  var message = 'Expected ' + reference + ' to ' + (isRequired ? '' : 'not') + ' be required';
  var value = getInputAttribute(browser, reference, 'required');

  expect(!!value, message).to.equal(!!isRequired);
}
