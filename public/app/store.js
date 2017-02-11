function Store() {
  var store = this
  this.state = {
    questions: [],
    comments: [],
    categories: [],
    user: {}
  }
  this.actions = {
    registerUser: function (username, email, password) {
      return Vue.http.post('/register', {
        "name": username,
        "email": email,
        "password": password
      })
    },
    loginUser: function (email, password) {
      return Vue.http.post('/login', {
        "email": email,
        "password": password
      })
    },
    logOut: function () {
      return Vue.http.delete('/logout')
    },
    getCategories: function () {
      return Vue.http.get('/categories')
    },
    getCategory: function (categoryId) {
      return Vue.http.get('/categories/' + categoryId)
    },
    getQuestions: function () {
      return Vue.http.get('/questions')
    },
    getQuestion: function (questionId) {
      return Vue.http.get('/questions/' + questionId)
    },
    getCommentsByQuestionId: function (questionId) {
      return Vue.http.get('/questions/' + questionId + '/comments')
    },
    getComment: function (commentId) {
      return Vue.http.get('/comments/' + commentId)
    },
    getQuestionsByCategory(catId){
      return Vue.http.get('/categories/'+ catId + '/questions')
    },
    postCategories: function (category) {
      return Vue.http.post('/categories', category)
    },
    postQuestion: function (categoryId, title, body) {
      return Vue.http.post('/questions', {categoryId : categoryId, title: title, body: body })
    },
    postComment: function (questionId, body) {
      return Vue.http.post('/comments', {questionId: questionId, body: body})
    },
    getAuthentication: function () {
      return Vue.http.get('/authenticate')
    },
    
  }
}