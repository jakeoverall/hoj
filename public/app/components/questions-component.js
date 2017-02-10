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

new Vue({
  el: '#questions',
  data:{
    questions: [],
    dummypath: new DummyStore
    

  },
  mounted(){
    this.questions = dummyservice.getQuestions()
    this.sortNewQuestions(this.questions)
  },
  methods:{
    //get info from 
    questionById: (questionId) => {dummypath.getquestion(questionId)},
    addQuestion:(question) => this.questions.push(question),
    // vote:(voteValue, userId) => this.questions[i].push(question),
    recentQuestions: (questions) => questions.sort(),
    sortNewQuestions: (questions) => questions.sort((a,b) =>{
      if(path === true){
      return banana.created - apple.created}
    }),
    sortAnsweredQuestions: (questions) => questions.sort((a,b) =>{
      if(path === false){
      return banana.created - apple.created}
    }),
    

  }


})

/*
Questions will be the full list
*/