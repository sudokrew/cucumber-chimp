var chai = require('chai');

var linkModule = require('./index');

var expect = chai.expect;

describe('Navigating by links', function () {
  var mockBrowser;

  describe('validations', function () {
    it('should throw an error if there is no anchor text provided', function () {
      expect(linkModule.validateAnchorText).to.throw(/missing anchor text/i);
    });
  });
});
