Vue.component('login', {
    data: function () {
        return {
            registrationMessage: '',
            username : '',
            email : '',
            password : '',
            user: {}
        }
    },
    mounted() {
    },
    template: `
    <div class="panel panel-default">
        <div class="panel-body">
            <form class="form" @submit.prevent="register" >
            <input type="text" v-model="username" placeholder="name">
            <input type="text" v-model="email" placeholder="email">
            <input type="text" v-model="password" placeholder="password">
            <button type="submit">sign up!</button>
            <div v-if="user._id">
            {{user}}
            </div>
        </div>
    </div>
  `,
    methods: {
        register: function () {
            this.$root.$data.store.actions.registerUser(this.username, this.email, this.password).then(response => {
                this.user = response.data.data
                if(user.error){
                    return console.log(user.error)
                }
                
                this.$router.push('/questions')


                this.username = ''
                this.email = ''
                this.password = ''
            })
        }



    }


})