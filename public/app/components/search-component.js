new Vue({
  el: '#search',
  data: {
    searchString: '',
    dummypath: new DummyStore,
    ans_results: [],
    

  },

  methods: {

  },

      computed: {
  
        filteredAnswers: function () {
            
            //STORAGE INFO NEEDED
            var ans_array = this.STORAGE.INFO;
            
                // GOOD
                searchString = this.searchString;

            if(!searchString){
                return ans_array;
            }

            searchString = searchString.trim().toLowerCase();

            ans_array = ans_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

        
            return ans_array;
        }
    },
})


