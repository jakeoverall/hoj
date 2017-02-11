// Vue.component('questions', {
//   data: function(){
//     return {
//       test: 'This is a test'
//     }
//   },
//   template: `
//     <div>
//       {{test}}
//     </div>
//   `
// })

Vue.component('questions', {
  data: function () {
    return {
      questions: [],
    }
  },
  mounted() {
    this.$root.$data.store.actions.getQuestions().then(response => {
      this.questions = response.data.data
    })
    // this.sortNewQuestions(this.questions)
  },
  template: `
    <div>
      {{questions}}
    </div>
  `,
  methods: {
    //get info from 
    questionById: (questionId) => { dummypath.getquestion(questionId) },
    addQuestion: (question) => this.questions.push(question),
    // vote:(voteValue, userId) => this.questions[i].push(question),
    recentQuestions: (questions) => questions.sort(),
    sortNewQuestions: (questions) => questions.sort((a, b) => {
      if (path === true) {
        return banana.created - apple.created
      }
    }),
    sortAnsweredQuestions: (questions) => questions.sort((a, b) => {
      if (path === false) {
        return banana.created - apple.created
      }
    }),


  }


})

/*
Questions will be the full list
*/