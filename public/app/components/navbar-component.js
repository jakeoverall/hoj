Vue.component('navbar', {
    data: function () {
        return {
            login: {},
            searchBar: 'link search component',
            catagories: []
        }
    },
    template: `
        <h1>THIS IS THE NAVBAR</h1>
    `,
    mounted() {
        //fetch data from db
    },
    methods: {
        onclickLogin: () => ('take us to the login prompt'),
        onclickCatagories: () => ('display list of catagories')
    }
})