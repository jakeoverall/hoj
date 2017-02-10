Vue.component('questions', {
  data: function(){
    return {
      test: 'This is a test'
    }
  },
  template: `
    <div>
      {{test}}
    </div>
  `
})