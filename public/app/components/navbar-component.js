Vue.component('navbar', {
    data: function () {
        return {
            login: {},
            searchBar: 'link search component',
            email: '',
            password: '',
            username : '',
            user : {},
            loggedin : false

        }
    },
    template: `
        <div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">BCW Help Portal </a>
        </div>
        <center>
            <div class="navbar-collapse collapse" id="navbar-main">
                <ul class="nav navbar-nav">
                    <li ><a href="/">Home</a>
                    </li>
                    <li><a href="/questions">Ask a question</a>
                    </li>
                    <div v-if="loggedin">
                    <li ><a href="#">Logged in as: {{user.email}}</a>
                    </li>
                    </div>
                </ul>
                <div v-if="!loggedin">
                <form class="navbar-form navbar-right" role="search" @submit.prevent="logUserIn">
                    <div class="form-group">
                        <input type="email" class="form-control" name="username" placeholder="email" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="password" placeholder="Password" v-model="password" required>
                    </div>
                    <button type="submit" class="btn btn-default">Sign In</button>
                </form>

                </div>
                <div v-else>
                <ul class="nav navbar-nav">
                <li ><a href="/">Log Out</a>
                    </li>
                    </ul>
                </div>
            </div>
        </center>
    </div>
</div>
    `,
    mounted() {
        //fetch data from db
    },
    methods: {
        logUserIn : function () {
            debugger
            this.$root.$data.store.actions.loginUser(this.email, this.password).then(response => {
                debugger
                
                this.user = response.data.data
                this.loggedin = true
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        }
    }
})