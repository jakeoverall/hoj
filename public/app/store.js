function Store(){
  this.state = {
    questions: [],
    comments: [],
    categories: [],
    user: {}
  }
  this.actions = {
    getCategories : function () {
     return Vue.http.get('/categories')
    },
    getCategory : function (categoryId) {
      return Vue.http.get('/categories/' + categoryId)
    },
    getQuestions: function(){
      return Vue.http.get('/questions')
    },
    getQuestion: function(questionId){
      return Vue.http.get('/questions/' + questionId)
    },
    getComments: function () {
      return Vue.http.get('/comments')
    },
    getComment: function (commentId) {
      return Vue.http.get('/comments/' + commentId)
    },
    postCategories : function (category) {
      return Vue.http.post('/categories',category)
    }

  }
}