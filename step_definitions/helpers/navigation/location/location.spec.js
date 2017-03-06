var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var locationModule = require('./index');

var expect = chai.expect;

chai.use(sinonChai);

describe('Navigating by location', function () {
  var mockBrowser;

  beforeEach(function () {
    mockBrowser = {
      baseUrl: 'http://localhost:8080/',
      url: sinon.stub(),
    };
  });

  afterEach(function () {
    mockBrowser.url.reset();
  });

  it('should throw an error if the URL is invalid', function () {
    var navigateToAnInvalidUrl = locationModule.atLocation.bind(null, mockBrowser, null);
    expect(navigateToAnInvalidUrl).to.throw();
  });

  it('should set the location', function () {
    locationModule.atLocation(mockBrowser, mockBrowser.baseUrl);
    expect(mockBrowser.url).to.have.been.calledWith(mockBrowser.baseUrl);
  });

  it('should resolve relative paths', function () {
    var localPath = '/foo';
    locationModule.atLocation(mockBrowser, localPath);

    expect(mockBrowser.url).to.have.been.calledWith(mockBrowser.baseUrl + 'foo');
  });
});

describe('Validating location', function () {
  /*
   * Setting the mock browser's location to be the same baseUrl for the tests
   */
  beforeEach(function () {
    mockBrowser = {
      baseUrl: 'http://localhost:8080/',
      getUrl: function () { return this.baseUrl },
    };
  });

  it('should throw an error if location is not as asserted', function () {
    var notAtLocation = locationModule.isAtLocation.bind(null, mockBrowser, 'not the same location');
    expect(notAtLocation).to.throw();
  });

  it('should not throw an error if location is as asserted', function () {
    var notAtLocation = locationModule.isAtLocation.bind(null, mockBrowser, mockBrowser.baseUrl);
    expect(notAtLocation).to.not.throw();
  });
});
