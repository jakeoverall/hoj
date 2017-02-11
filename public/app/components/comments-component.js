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
        
        this.comments = response.data.data.comments
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
      <form @submit.prevent="">
        <button type="submit">Sumbit an Answer</button>
        <textarea class="form-control" rows="2" id="comment" v-model="body"></textarea>
        

    
  `,
  methods: {
    postComment: function(){
      this.$root.$data.store.actions.postComment(questionId, body){
        this.questionId = 
      }
    }
    
  }


})
