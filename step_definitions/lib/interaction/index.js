var webdriverIOHelpers = require('../../helpers/webdriverio');

module.exports = {
  clickElement: clickElement,
};

/**
 * Clicks an element provided the CSS or XPath
 * @param  {WebdriverIO} browser Instance of web driver
 * @param  {String} selector     A CSS or XPath selector
 */
function clickElement (browser, selector) {
  var el = webdriverIOHelpers.getElement(browser, selector);

  try {
    el.click();
  } catch (e) {
    throw new Error('An error occurred while clicking element: ' + selector);
  }
}
