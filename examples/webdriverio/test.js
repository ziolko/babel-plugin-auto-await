const webdriverio = require('webdriverio');
const { assert } = require('chai');

const options = { desiredCapabilities: { browserName: 'chrome' } };
const browser = webdriverio.remote(options);

describe('Google web search engine', function () {
  this.timeout(60000);

  // Every code using the 'browser' object has to be wrapped by wdio.wrap
  before(async function () {
    browser.init()
  });

  after(async function () {
    browser.end()
  });

  it('Should return "Google" when asked about page title', async function () {
    // Because this funciton is marked as async we automatically await all promises
    browser.url('http://www.google.com');
    assert.equal('Google', browser.getTitle())
  })
});
