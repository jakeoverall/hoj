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
      <div class="row">
        <div class="col-xs-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h1>{{category.name}}</h1>
            </div>
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
    categoryById: (categoryId) => { this.$root.$data.store.actions.getCategory(categoryId) },

  }


})
