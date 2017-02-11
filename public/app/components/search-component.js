Vue.component('search', {
  data: function () {
    return {
      questions: [],
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
               
        <li v-for="title in filteredAnswers">
                <p>{{filteredAnswers}}</p>
        </li>
    </ul>
      
    </div>
    </div>
  `,

    methods: {

  },

      computed: {
  
        filteredAnswers: function () {
            
            var ans_array = this.questions;
            
                searchString = this.searchString;

            if(!searchString){
console.log ('not search string')
                return ans_array;
            }

            searchString = searchString.trim().toLowerCase();
console.log('after not search string')
            ans_array = ans_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })
   
            return ans_array;
        }
    },
})


