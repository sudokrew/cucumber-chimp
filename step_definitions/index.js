module.exports = {
  init: init
}

function init (context) {
  require('./given').call(context);
  require('./when').call(context);
  require('./then').call(context);
}
