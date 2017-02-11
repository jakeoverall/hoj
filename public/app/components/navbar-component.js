new Vue ({
    el:'#navbar',
    data:{
        dummyStore: new DummyStore,
        login: {},
        searchBar: 'link search component',
        catagories: []
    },
    mounted(){
        //fetch data from db
    },
    methods:{
        onclickLogin: () => ('take us to the login prompt'),
        onclickCatagories: () => ('display list of catagories')
    }
})