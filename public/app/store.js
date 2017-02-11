function Store(){
  this.state = {
    questions: [],
    comments: [],
    categories: [],
    user: {}
  }
  this.actions = {
    getQuestions: function(){
      return Vue.http.get('/questions')
    }
  }
}