var expect = require('chai').expect;

module.exports = {
  assertInputValue: assertInputValue,
  setInputValue: setInputValue,
};

/**
 * Gets an input based on a reference string
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      reference The input reference, could be name > placeholder > label
 * @return {String}      element   The input element
 */
function getInputElement (browser, reference) {
  const inputElement = browser.element(reference);
  if (inputElement.state !== 'failure') {
    return inputElement;
  }

  const inputElementByName = browser.element('input[name="' + reference + '"]');
  if (inputElementByName.state !== 'failure') {
    return inputElementByPlaceholder;
  }

  const inputElementByLabel = browser.element('label*=' + reference);
  if (inputElementByLabel.state !== 'failure') {
    return inputElementByLabel.element('input');
  }
}

/**
 * Retrieves an input's value from a reference string
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      reference The input reference, could be name > placeholder > label
 * @return {String}      value     The input's value
 */
function getInputValue (browser, reference) {
  const inputElement = getInputElement(browser, reference);
  return inputElement.getValue();
}

/**
 * Sets an input's value from a reference string
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      reference The input reference, could be name > placeholder > label
 * @return {String}      value     The input's value
 */
function setInputValue (browser, reference, value) {
  const inputElement = getInputElement(browser, reference);
  inputElement.setValue(value);
  return browser.pause(1000);
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
