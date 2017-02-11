var store = new Store()

var x = Vue.component('home', {
  template: ` 

    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          
        </div>
        <div class="col-sm-9">
        
        </div>
      </div>
    <div>



    <search></search>
    <categories></categories>
    <questions></questions>
    <question></question>
  `
})

var router = new VueRouter({
  routes: [{
      name: 'Home',
      path: '/',
      component: x
    },
    {
      name: 'Registration',
      path: '/register',
      component: {
        template: '<registration></registration>'
      }
    },
    {
      name: 'Login',
      path: '/login',
      component: {
        template: '<navbar></navbar>'
      }
    },
    {
      name: 'Questions',
      path: '/questions',
      component: {
        template: '<questions></questions>'
      }
    },
    {
      name: 'Question',
      path: '/questions/:questionId',
      component: {
        template: '<question></question>'
      }
    },
    {
      name: 'Categories',
      path: '/categories',
      component: {
        template: '<categories></categories>'
      }
    }
  ]
})


var app = new Vue({
      el: '#app',
      router: router,
      data: function () {
        return {
          store: store,
        }
      },
      mounted: function () {
        // this.store.actions.getAuthentication()
      }
})