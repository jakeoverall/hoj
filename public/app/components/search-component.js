Vue.component('search', {
  data: function () {
    return {
      questions: [],
      searchString: '',
    }
  },
  mounted: function () {
    this.$root.$data.store.actions.getQuestions().then(response => {
      this.questions = response.data.data
    })
  },

  template: `
<div>
    <ul style="list-style-type:none;">
      <label for="search-entry">Search Questions</label>
      <input type="text" id="" v-model="searchString" placeholder="search for" required>
      <li v-for="question in filteredQuestions">
        <router-link :to="'/questions/'+question._id">
          {{question.title}}
        </router-link>
      </li>
    </ul>

 
</div>
  `,

  computed: {
    filteredQuestions: function () {

      var questArray = this.questions
      var userQuery = this.searchString
      if (userQuery.length > 0) {
        userQuery = userQuery.trim().toLowerCase();
        questArray = questArray.filter(function (item) {
          if (item.title.toLowerCase().indexOf(userQuery) !== -1) {
            return item;
          }
        })
        return questArray;
      }
    }
  },
})


