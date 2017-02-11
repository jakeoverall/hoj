Vue.component('registration', {
    data: function () {
        return {
            registrationMessage: '',
            username: '',
            email: '',
            password: '',
            user: {}
        }
    },
    mounted() {},
    template: `
    <form @submit.prevent="register" >
    <div class="form-group">
    <label for="register-user">Name </label>
    <input type="text" id="register-user" v-model="username" placeholder="name" required>
    <label for="register-user-email">Name </label>
    <input type="email" id="register-user-email" v-model="email" placeholder="email" required>
    <label for="register-user-password">Name </label>
    <input type="password" id="register-user-password" v-model="password" placeholder="password" required>
    <button type="submit">sign up!</button>
    </div>
    </form>
    <div v-if="user._id">
    {{user.email}}
    </div>
  `,
    methods: {
        register: function () {
            this.$root.$data.store.actions.registerUser(this.username, this.email, this.password).then(response => {
                    
                    this.user = response.data.data
                    console.log(this.user.email)
                    if (this.user.error) {
                        return console.log(this.user.error)
                    }
                    this.username = ''
                    this.email = ''
                    this.password = ''
                    router.push('home')
                })
                .catch(err => {
                    console.log(err)
                })
        }



    }


})