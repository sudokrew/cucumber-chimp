module.exports = {
  validateAnchorText: validateAnchorText,
};

/**
 * Sets the client's location to the provided URL
 * @param  {String} anchorText The visible text to select
 */
function validateAnchorText (anchorText) {
  if (!anchorText) {
    throw new Error('Missing anchor text');
  }
}
