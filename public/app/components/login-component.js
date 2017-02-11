Vue.component('login', {
    data: function () {
        return {
            registrationMessage: '',
            username : '',
            email : '',
            password : ''
        }
    },
    mounted() {
    },
    template: `
    
    
    <form @submit.prevent="register" >
    <input type="text" v-model="username" placeholder="name">
    <input type="text" v-model="email" placeholder="email">
    <input type="text" v-model="password" placeholder="password">
    <button type="submit">sign up!</button>

    <div v-if="registrationMessage">
    {{registrationMessage}}
    </div>
  `,
    methods: {
        register: function () {
            this.$root.$data.store.actions.registerUser().then(response => {
                this.registrationMessage = response.data.data
                console.log(response.data.data)
                this.username = ''
                this.email = ''
                this.password = ''
            })
        }



    }


})