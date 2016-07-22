var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

Vue.component('home', require('./components/home'));

var app = new Vue({
  el: '#cv',
  data: function() {
    return {
      currentView: 'home'
    }
  }
});