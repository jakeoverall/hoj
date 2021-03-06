Vue.component('questions', {
  data: function () {
    return {
      questions: [],
      activeQuestions: [],
      title: '',
      body: '',
      categoriesReturned: {},
      categorySelector: ''
    }
  },
  mounted() {
    this.$root.$data.store.actions.getQuestions().then(response => {

        this.questions = response.data.data
        this.activeQuestions = this.questions
      }),
      this.$root.$data.store.actions.getCategories().then(response => {
        this.categoriesReturned = response.data.data

      })
      },
  template: `
  <div>
    <div class="row">
          <div class="col-md-5 col-md-offset-3" style="padding: 5% 0 5% 0;">
 
              <h2>Ask a question</h2>
              <form @submit.prevent="askQuestion">
              <button type="submit">Ask a question</button>
                <input type="text" v-model="title" placeholder="Title: try to be descriptive">
                <textarea class="form-control" rows="2" id="comment" v-model="body" placeholder="Enter your question here, try to be as descriptive
                as possible"></textarea>
                <p>Select a category *required<p>
                <select class="form-control" v-model="categorySelector" value="Select a category">
              
                <option v-for="category in categoriesReturned" >{{category.name}}</option>
                
              </form>
   
    
              </div>
    </div>
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
        
         
                  <h3>Questions</h3>
                  <ul class="nav nav-tabs">
                    <li role="presentation" class="active"><a @click="recentQuestions">New</a></li>
                    <li role="presentation"><a @click="sortAnsweredQuestions">Answered</a></li>
                    <li role="presentation"><a href="#">Trending</a></li>
                  </ul>
         
          
                  <div v-for="question in activeQuestions">
                    <router-link :to="'/questions/'+question._id">
                      {{question.title}}
                    </router-link>
                    </div>
            
          
          </div>
      </div> 
  </div>`,
  methods: {
    askQuestion: function () {
      var catId = ''
      var flag = false
      for (var i = 0; i < this.categoriesReturned.length; i++) {
        var name = this.categoriesReturned[i];

        if (name.name === this.categorySelector) {
          catId = name._id
          break
        }

      }

      this.$root.$data.store.actions.postQuestion(catId, this.title, this.body).then(res => {

        this.title = ''
        this.body = ''
      })

    },
    //get info from 

    addQuestion: function (question) {
      this.questions.push(question)
    },
    recentQuestions: function () {
      this.activeQuestions = this.questions.sort((a, b) => {
        return b.created - a.created
      })
    },
    sortAnsweredQuestions: function () {
      var ansArr = []
      var copy = this.questions.slice(1, this.questions.length)
      for (var i = 0; i < copy.length; i++) {
        var inst = copy[i]
        if (inst.answer) {
          ansArr.push(inst)
        }
        return this.activeQuestions = ansArr
      }
    }
  },
  computed: {
    vote: function (voteValue, userId) {
      this.questions[i].push(question)
    },
  }
})