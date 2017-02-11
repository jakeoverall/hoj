var store = new Store()

var app = new Vue({
  el: '#app',
  data: function (){
    return {
      store: store
    }
  }
})