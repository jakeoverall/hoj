var store = new Store()

var x = Vue.component('home', {
  template: ` 

    <div class="container">
      <div class="row" style="padding-top:12%;">
        <div class="col-md-6">
          <categories></categories>
        </div>
          <div class="col-md-6">
            <search></search>
          </div>
      </div>
      <questions></questions>
    <div>



    
    
    
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
  },
  {
    name: 'Category',
    path: '/categories/:id',
    component: {
      template: '<category></category>'
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