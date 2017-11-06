# WebdriverIO example

Using `babel-plugin-auto-await` you can write tests as if they were synchronous:
```javascript
it('Should return "Google" when asked about page title', async function () {
    browser.url('http://www.google.com')
    assert.equal('Google', browser.getTitle())
})
```

To do that configure babel to use the plugin:
```json
"babel": {
  "plugins": [
    "auto-await"
  ]
}
```

Then simply run mocha with babel: `mocha --require babel-register test.js`