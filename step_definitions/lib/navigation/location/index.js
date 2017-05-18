var expect = require('chai').expect;
var Url = require('url');

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
  // TODO: for some reason, browser.option.baseUrl is not accessible
  // https://github.com/xolvio/chimp/issues/580
  var baseUrl = browser.options.baseUrl || '';
  var resolvedUrl = resolveUrl(baseUrl, uri);

  browser.url(resolvedUrl);
}

/**
 * Asserts that the browser is at a specific browser location
 * @param  {WebdriverIO} browser   Instance of web driver
 * @param  {String}      targetUrl The target url
 */
function assertAtLocation (browser, targetUrl) {
  var actualUrl = browser.getUrl();
  var resolvedUrl = resolveUrl(actualUrl, targetUrl);
  expect(actualUrl).to.equal(resolvedUrl);
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

  return Url.resolve(fromURL, toURI);
}

/**
 * Returns whether a URI is valid or not
 * @param  {String}  uri the uri to validate
 * @return {Boolean}     whether the uri is valid or not
 */
function escapeURI (uri) {
  return encodeURI(uri);
}
