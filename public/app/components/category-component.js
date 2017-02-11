Vue.component('category', {
  data: function () {
    return {
      category: {},
      questions: []
    }
  },
  mounted() {
    this.$root.$data.store.actions.getCategory(this.$route.params.id).then(response => {
      this.category = response.data.data  
    })
    this.$root.$data.store.actions.getQuestionsByCategory(this.$route.params.id).then(res => {
        this.questions = res.data.data
    })
  },
  template: `
    <div class="container">
    <br><br>
        <h1>HELLO WORLS</hr>
       <div class="row">
            <div class="col-xs-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div v-for="question in questions">
                            <router-link :to="'/questions/'+question._id">{{question.title}}</router-link>
                    </div>
            </div>
       </div>
        </div>
       </div>
    </div>
  `,
  methods: {
    //get info from 
    categoryById: (categoryId) => { this.$root.$data.store.actions.getCategory(categoryId) },
    addCategories: (category) => this.categories.push(category),
    // vote:(voteValue, userId) => this.categories[i].push(category),
    recentCategories: (categories) => categories.sort(),
    sortNewCategories: (categories) => categories.sort((a, b) => {
      if (path === true) {
        return banana.created - apple.created
      }
    }),
    sortAnsweredCategories: (categories) => categories.sort((a, b) => {
      if (path === false) {
        return banana.created - apple.created
      }
    }),


  }


})
