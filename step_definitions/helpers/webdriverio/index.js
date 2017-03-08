module.exports = {
  getElement: getElement,
};

/**
 * Searches for an element given a selector
 * @param  {WebdriverIO} browser  Instance of web driver
 * @param  {String}      selector The CSS or XPath selector
 * @return {Element}     el       The webdriverio element if found, else null
 */
function getElement(browser, selector) {
  const el = browser.element(selector);
  switch (el.state) {
    case 'failure':
      return null;
    default:
      return el;
  }
}
