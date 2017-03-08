var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var linkModule = require('./index');

var expect = chai.expect;

chai.use(sinonChai);

describe('Navigating by links', function () {
  var mockBrowser;

  describe('validations', function () {
    it('should throw an error if there is no anchor text provided', function () {
      expect(linkModule.validateAnchorText).to.throw(/missing anchor text/i);
    });
  });
});
