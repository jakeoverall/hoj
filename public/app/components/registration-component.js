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
<div class="spacer">

<h1 class="text-center"> Register as a new user</h1>

    <form class="form-horizontal" @submit.prevent="register">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" v-model="username" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  

  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" v-model="email" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-6">
      <input type="password" class="form-control" id="inputPassword3" v-model="password" placeholder="Password">
    </div>
  </div>
  <div class="col-sm-8">
  <button type="submit" class="btn btn-large btn-default" style="float:right;">sign up!</button>
  </div>
  </form>
</div>

 
  `
  
   
  
  
  
  
  
  
  
  ,
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