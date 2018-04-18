<template>
  <nav>
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'profile'}">Profile</router-link>
    <router-link v-show="!user" :to="{name: 'signin'}">Sign in</router-link>
    <router-link v-show="!!user" :to="{name: 'signout'}">Logout</router-link>
  </nav>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>

