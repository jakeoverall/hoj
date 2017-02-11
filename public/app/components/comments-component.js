Vue.component('comments', {
  data: function () {
    return {
      comments: [],
      questionId: '',
      body: ''
    }
  },
  mounted() {
    this.$root.$data.store.actions.getCommentsByQuestionId().then(response => {
        this.questionId = response.data.data.userId
        this.comments = response.data.data
      })
 },
  template: `
      <div class="panel panel-default">
        <div v-for="comment in comments">
          <div class="panel-body">
            {{comment.votes}}
            {{comment.body}}
          </div>
        </div>
      </div>
      <div>
      <form @submit.prevent="something">
        <button type="submit">Sumbit an Answer</button>
        <textarea class="form-control" rows="2" v-model="body"></textarea>
      </form>
      </div>
        

    
  `,
  methods: {
    postComment: function(){
      this.$root.$data.store.actions.postComment(questionId, body) 
        questionId = this.questionId
        body = this.body
    }
    
  }


})
