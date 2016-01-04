window.$ = window.jQuery = require('jquery');
var Bootstrap = require('bootstrap-sass');
Bootstrap.$ = $;

import Vue from 'vue'

var demo = new Vue({
  el: '#demo',
  data: {
    title: 'todos',
    todos: [
      {
        done: true,
        content: 'Learn JavaScript'
      },
      {
        done: false,
        content: 'Learn Vue.js'
      }
    ]
  }
});

import app from './index.js'

try {
  app.initialize();
} catch(e) {
  console.log(e.stack);
}
