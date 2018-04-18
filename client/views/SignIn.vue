<template>
  <form @submit.prevent="onSubmit" >
    <input v-model="login" type="text"/>
    <input v-model="password" type="password"/>
    <input type="submit" value="Login"/>
  </form>
</template>
<script>
export default {
  computed: {
    nextRoute () {
      return this.$route.query.redirect || '/'
    }
  },
  data () {
    return {
      login: '',
      password: ''
    }
  },
  mounted () {
  },
  methods: {
    async onSubmit () {
      const auth = await this.$auth.login(this.login, this.password)
      if(!!auth){
        console.log(this.$router)
        this.$router.replace(this.nextRoute)
      }
    }
  }
}
</script>

