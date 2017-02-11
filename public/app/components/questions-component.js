Vue.component('questions', {
  data: function () {
    return {
      questions: [],
      activeQuestions: []
    }
  },
  mounted() {
    this.$root.$data.store.actions.getQuestions().then(response => {
      this.questions = response.data.data
      this.activeQuestions = this.questions
    })
  },
  template: `
  <br>
  <br>
  <br>
    <div class="container">
            <div class="row">
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
      </div>     
  `,
  methods: {
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