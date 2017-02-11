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
    getComments: function () {
      return Vue.http.get('/comments')
    },
    getComment: function (commentId) {
      return Vue.http.get('/comments/' + commentId)
    },
    postCategories: function (category) {
      return Vue.http.post('/categories', category)
    },
    postQuestion: function (categoryId, title, body) {
      return Vue.http.post('/', category)
    },
    getAuthentication: function () {
      return Vue.http.get('/authenticate')
    }
  }
}