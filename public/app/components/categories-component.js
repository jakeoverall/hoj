Vue.component('categories', {
  data: function () {
    return {
      categories: [],
    }
  },
  mounted() {
    this.$root.$data.store.actions.getCategories().then(response => {
      this.categories = response.data.data
    //   this.categories.name = response.data.data
      
    })
    // this.sortNewCategories(this.categories)
  },
  template: `
    <div>
                    <p><strong>Current Categories</strong></p>
                    <div v-for="category in categories">
                    <ul style="list-style-type:none;display:inline-block;">
                    <li><router-link :to="'/categories/'+category._id">{{category.name}}</router-link></li>
                   
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
