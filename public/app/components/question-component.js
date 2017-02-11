Vue.component('question', {
  data: function () {
    return {
      question: {},
      comments: [],
      counter: { count: '', userId: '' },
      voteObj: {},
      userId: '',
      voteCounts: {},
      comments: [],
      commentBody: '',
      answer: {},
      userAnswered: false,
      totalCount: 0,
      negativeCount: 0,
      postiveCount: 0,
    }
  },
  mounted() {
    var qId = this.$route.params.questionId

    this.$root.$data.store.actions.getQuestion(qId).then(response => {
      this.question = response.data.data
      this.comments = this.question.comments
      this.counter.count = this.question.votes
      this.counter.userId = this.question.userId
      this.userId = this.question.userId
    

      // console.log(this.voteObj)
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
      <div class="row">
      <div class="col-xs-12" style="padding-top:5%;">
      <div class="panel panel-default" v-if="userAnswered">
      <div class="panel-body" >
      {{answer}}
      </div>
      </div>
      </div>
      </div>
  </div>


  `,
  // <comments></comments>
  methods: {
    //get info from 
    vote: function (value) {

      // console.log(this.voteObj)
      this.counter.count = this.counter.count || 0
      this.counter.count++
      if (value == this.counter[this.userId]) {
        return this.voteObj[this.userId] = 0
      }
      return this.voteObj[this.userId] = value
    },
    postCommment: function () {
      var qId = this.$route.params.questionId
      this.$root.$data.store.actions.postComment(qId, this.commentBody).then(response => {
        this.answer = response.data.data.body
        this.userAnswered = true
        this.commentBody = ''
      })
    }
 },
    computed: {
   
      voteCounts: function () {
        this.counter.count
        debugger
        var voted = 0
         for (var user in this.voteObj) {
          if (this.voteObj[this.userId]) {

            var vote = this.voteObj[this.userId]
            this.postiveCount += vote > 0? 1:0
            console.log(this.voteObj[this.userId])
            if (vote > 0 && voted == 0){
              this.positiveCount++
            } else if (vote < 0 && voted == 0){
              this.negativeCount++
            }
            this.negativeCount += vote < 0? 1:0
            console.log(this.userId)
      console.log(vote)
            // switch (vote) {

            //   case 1:
            //     this.positiveCount++
            //     this.totalCount++
            //     break;
            //   case -1:
            //     this.totalCount++
            //     this.negativeCount++
            //     break;
            // }

          }
        }
         this.totalCount = this.postiveCount + this.negativeCount
        console.log(this.postiveCount)
        return { pos: this.postiveCount, neg: this.negativeCount, total: this.totalCount }
      }
    }
  })



