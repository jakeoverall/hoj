Vue.component('search', {
  data: function () {
    return {
      questions: [],
      searchString: '',
    }
  },
  mounted: function() {
    this.$root.$data.store.actions.getQuestions().then(response => {
      this.questions = response.data.data
    })
  },

    template: `
    <div class="container">
    <div class="row">
    <ul>
               
        <li>
                <p>{{filteredAnswers}}</p>
        </li>
    </ul>
      
    </div>
    </div>
  `,

    methods: {
        filteredAnswers: function () { 
            searchString = searchString.trim().toLowerCase();
            ans_array = ans_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })
        }
    },
})


