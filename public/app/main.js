var store = new Store()

var x = Vue.component('home', {
  template: ` 

    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <registration></registration>
        </div>
        <div class="col-sm-9">
        
        </div>
      </div>
    <div>



    <search></search>
    <questions></questions>
    <question></question>
  `
})

var router = new VueRouter({
  routes: [
    { name: 'Home', path: '/', component: x },
    { name: 'Registration', path: '/register', component: { template: '<registration></registration>' } },
    { name: 'Login', path: '/register', component: { template: '<registration></registration>' } },
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