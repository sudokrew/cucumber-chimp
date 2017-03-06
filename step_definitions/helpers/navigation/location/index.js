var expect = require('chai').expect;

var validUrl = require('valid-url');
var url = require('url');

module.exports = {
  atLocation: atLocation,
  isAtLocation: isAtLocation,
};

/**
 * Sets the client's location to the provided URL
 * @param  {WebdriverIO} browser Instance of web driver
 * @param  {String}      url     The url to navigate to
 */
function atLocation (browser, uri) {
  var resolvedUrl = url.resolve(browser.baseUrl, uri);

  if (!validUrl.isWebUri(resolvedUrl)) {
    throw new Error('Invalid URL');
  }

  browser.url(resolvedUrl);
}

function isAtLocation (browser, url) {
  expect(browser.getUrl() == url).to.equal(true);
}
