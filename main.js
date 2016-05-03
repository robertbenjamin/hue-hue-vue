var vue = require('vue')

var app = require('./components/app.vue')

new vue({
  el: 'body',
  components: {
    app: app
  }
})