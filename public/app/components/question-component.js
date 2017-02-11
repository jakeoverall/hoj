Vue.component('question', {
  props: ['questionId'],
  data: function () {
    return {
      question: {}
    }
  },
  mounted() {
    this.$root.$data.store.actions.getQuestion(this.questionId).then(response => {
      this.question = response.data.data
    })
    // this.sortNewQuestions(this.questions)
  },
  template: `
    <div class="container">
    <div class="row">
    <div class="col-xs-12">
      {{questions}}
      </div>
      <comments :questionId="">
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





new Vue ({
    el:'#question',
    data:{
        dummypath: new DummyStore,
        comments: [],
        text: ''
    },
    methods:{
        addComment: (comment) => this.comments.push(comment),
        toggleVote: (userId, num) => {
            if( userval === bval){
                return userval = 0
            }
            else {
                return userval = bval
            }
        }
    }



})