Vue.component('questions', {
  data: function () {
    return {
      questions: [],
      activeQuestions: [],
      title: '',
      body: '',
      categoriesReturned: []
    }
  },
  mounted() {
    this.$root.$data.store.actions.getQuestions().then(response => {
      this.questions = response.data.data
      this.activeQuestions = this.questions
    }),
    this.$root.$data.store.actions.getCategories().then(response => {
      this.categoriesReturned.push(response.data.data)
    })
  },
  template: `<div class="container">
  <div>
    <form @submit.prevent="askQuestion">
      <input type="text" v-model="title">
      <textarea class="form-control" rows="5" id="comment" v-model="body"></textarea>
      <select class="form-control" id="sel1" v-model="categorySelector" v-for="categories in categoriesReturned">
    <select>{{categories}}</select>
      <button type="submit">Ask a question</button>
    </form>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Questions</h3>
            <ul class="nav nav-tabs">
              <li role="presentation" class="active"><a @click="recentQuestions">New</a></li>
              <li role="presentation"><a @click="sortAnsweredQuestions">Answered</a></li>
              <li role="presentation"><a href="#">Trending</a></li>
            </ul>
          </div>
          <div class="panel-body">
            <div v-for="question in activeQuestions">
              <router-link :to="'/questions/'+question._id">
                {{question.title}}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  </div>`,
  methods: {
    askQuestion : function () {
    },
    //get info from 
    addQuestion: function (question) { this.questions.push(question) },
    
    recentQuestions: function () {
      this.activeQuestions = this.questions.sort((a, b) => {
        return b.created - a.created
      })
    },
    sortAnsweredQuestions: function(){
  
      var ansArr = []
      var copy = this.questions.slice(1, this.questions.length)
        for (var i = 0; i < copy.length; i++ ){
          var inst = copy[i]
          if(inst.answer){
            ansArr.push(inst)
          }
          return this.activeQuestions = ansArr
        }
    }
  },
  computed:{
     vote: function (voteValue, userId) { this.questions[i].push(question)},
  }
})