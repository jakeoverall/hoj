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

        <div>
              <h1>{{category.name}}</h1>
              <div v-for="question in questions">
                <router-link :to="'/questions/'+question._id">{{question.title}}</router-link>
              </div>
            
          </div>

  `,
  methods: {
    categoryById: (categoryId) => { this.$root.$data.store.actions.getCategory(categoryId) },

  }


})
