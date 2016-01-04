import app from './index.js'
window.$ = window.jQuery = require('jquery');
var Bootstrap = require('bootstrap-sass');
Bootstrap.$ = $;

try {
  app.initialize();
} catch(e) {
  console.log(e.stack);
}
