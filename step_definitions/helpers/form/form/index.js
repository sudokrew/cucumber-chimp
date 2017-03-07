module.exports = {
  submitCurrentForm: submitCurrentForm,
};

function submitCurrentForm (browser) {
  return browser.submitForm('//*[ancestor-or-self::form]');
}
