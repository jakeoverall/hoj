Vue.component('question', {
  data: function () {
    return {
      question: {},
      comments: [],
      voteObj: {count: 0},
      userId: "342342",
      voteCounts: {},
      comments: [],
      commentBody : ''
    }
  },
  mounted() {
    var qId = this.$route.params.questionId

    this.$root.$data.store.actions.getQuestion(qId).then(response => {
      this.question = response.data.data
      this.comments = this.question.comments
      this.voteObj = this.question.votes
    })
    // this.sortNewQuestions(this.questions)
  },

  template: `
<div class="container">
    <div class="row">
      <div class="col-xs-12" style="padding-top:15%;">
        <h2>{{question.title}}</h2>
        <h3>{{question.body}}</h3>
        {{question.votes}}
        <i @click="vote(1)" class="fa fa-thumbs-up" aria-hidden="true"></i> {{voteCounts.pos}}
        <i @click="vote(-1)" class="fa fa-thumbs-down" aria-hidden="true"></i> {{voteCounts.neg}}
        <div v-for="comment in comments">
          {{question.title}}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h2>Post an answer</h2>
        <form @submit.prevent="postCommment">
          <textarea rows=" 3" cols="50" v-model="commentBody"></textarea>
          <button type="submit" class="btn btn-default">Post Question</button>
      </div>
    </div>
  </div>


  `,
// <comments></comments>
  methods: {
    //get info from 
    vote: function(value) {
      this.voteObj.count = this.voteObj.count || 0
      this.voteObj.count++
      if (value == this.voteObj[this.userId]) {
        return this.voteObj[this.userId] = 0
      }
        return this.voteObj[this.userId] = value
    },
    postCommment : function () {
      var qId = this.$route.params.questionId
debugger
      this.$root.$data.store.actions.postComment(qId, this.commentBody).then(response => {
      console.log(response.data.data)
      })
    },
    

    computed: {
      voteCounts: function () {
       this.voteObj.count 
        var totalCount = 0
        var negativeCount = 0
        var postiveCount = 0;
        for (var userId in this.voteObj) {
          if (this.voteObj[userId]) {

            var vote = this.voteObj[userId]
            postiveCount += vote > 0? 1:0
            negativeCount += vote < 0? 1:0
        

          }
        }
        totalCount = postiveCount + negativeCount
        return { pos: postiveCount, neg: negativeCount, total: totalCount }
      }
    }
  }

})



