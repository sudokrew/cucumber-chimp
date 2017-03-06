var expect = require('chai').expect;
var URL = require('url');

module.exports = {
  setBrowserLocation: setBrowserLocation,
  assertAtLocation: assertAtLocation,
  escapeURI: escapeURI,
  resolveUrl: resolveUrl,
};

/**
 * Sets the client's location to the provided URL, relative to the webdriver's base url
 * @param  {WebdriverIO} browser Instance of web driver
 * @param  {String}      url     The url to navigate to
 */
function setBrowserLocation (browser, uri) {
  var resolvedUrl = resolveUrl(browser.baseUrl, uri);

  browser.url(resolvedUrl);
}

/**
 * Asserts that the browser is at a specific browser location
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      targetUrl The target url
 */
function assertAtLocation (browser, targetUrl) {
  expect(browser.getUrl() == targetUrl).to.equal(true);
}

/**
 * Resolves a target uri from a starting url
 * @param  {String} fromURL the base url
 * @param {String} toURI    the path to navigate to, relative to the base uri
 * @return {String} toURI   the fully resolved url
 */
function resolveUrl (fromURL, toURI) {
  if (!escapeURI(toURI)) {
    throw new Error('Invalid URL');
  }

  return URL.resolve(fromURL, toURI);
}

/**
 * Returns whether a URI is valid or not
 * @param  {String}  uri the uri to validate
 * @return {Boolean}     whether the uri is valid or not
 */
function escapeURI (uri) {
  return encodeURI(uri);
}
