# Krewcumber

[![krewcumber npm](https://img.shields.io/npm/v/krewcumber.svg)]()

Designed to work with [Chimp](https://chimp.readme.io/). Krewcumber is a library that makes use of
[WebdriverIO](http://webdriver.io/) and [Cucumber](https://cucumber.io/) to make writing user
acceptance tests easier.

This library adds [steps](https://github.com/sudokrew/krewcumber/wiki/Step-Documentation) that are
useful for testing web applications.

## Installation

Please make sure to install Chimp either globally or locally depending on your project's needs:

```bash
npm install --save-dev krewcumber chimp
```

### Registering step definitions

After installing, make sure to register step definitions by adding a
`features/step_definitions/steps.js` file to your project.

```js
var Krewcumber = require('krewcumber');

module.exports = function () {
  Krewcumber.init(this);
}
```
