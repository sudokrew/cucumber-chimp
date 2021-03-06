var interaction = require('../../interaction');

module.exports = {
  validateAnchorText: validateAnchorText,
  click: click,
};

/**
 * Clicks an anchor element with the given anchor text
 * @param  {WebdriverIO} browser Instance of web driver
 * @param  {String} anchorText   The anchor text to target by
 */
function click (browser, anchorText) {
  return interaction.clickElement(browser, 'a=' + anchorText);
}

/**
 * Sets the client's location to the provided URL
 * @param  {String} anchorText The visible text to select
 */
function validateAnchorText (anchorText) {
  if (!anchorText) {
    throw new Error('Missing anchor text');
  }
}
