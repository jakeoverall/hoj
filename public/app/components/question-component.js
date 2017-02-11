Vue.component('question', {
  data: function () {
    return {
      question: {},
      comments: [],
      voteObj: {count: 0},
      userId: "342342"
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

 <div class="row">
  <div class="col-xs-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h2>{{question.title}}</h2>
      </div>
      <div class="panel-body">
        <h3>Question: {{question.body}}</h3>
        {{question.votes}}
        <i @click="vote(1)" class="fa fa-thumbs-up" aria-hidden="true"></i> {{voteCounts.pos}}
        <i @click="vote(-1)" class="fa fa-thumbs-down" aria-hidden="true"></i> {{voteCounts.neg}}
      </div>
      <div v-for="comment in comments">
        {{question.title}}
        </router-link>
      </div>
    </div>
  </div>
</div>

  `,

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
            // switch (vote) {
            //   case 1:
            //    positiveCount++
            //     totalCount++
            //     break;
            //   case -1:
            //     totalCount++
            //     negativeCount++
            //     break;
            // }

          }
        }
        totalCount = postiveCount + negativeCount
        return { pos: postiveCount, neg: negativeCount, total: totalCount }
      }
    }
  }

})
