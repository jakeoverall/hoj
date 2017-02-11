var store = new Store()

var x = Vue.component('home', {
  template: `
    TESTING 123
    <search></search>
    <questions></questions>
    <question></question>
  `
})

var router = new VueRouter({
  routes: [
    { name: 'Home', path: '/', component: x },
    { name: 'Login', path: '/login', component: { template: '<login></login>' } },
    { name: 'Questions', path: '/questions', component: { template: '<questions></questions>' } },
    { name: 'Question', path: '/questions/:questionId', component: { template: '<question></question>' } }
  ]
})


var app = new Vue({
  el: '#app',
  router: router,
  data: function () {
    return {
      store: store
    }
  }
})