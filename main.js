var vue = require('vue')

var app = require('./components/app.vue')

new Vue({
  el: 'body',
  components: {
    app: app
  }
})