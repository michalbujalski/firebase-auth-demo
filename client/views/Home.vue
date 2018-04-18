<template>
  <div>
    <h1>Main page</h1>
    <button @click="logout">Logout</button>
  </div>
</template>
<script>
export default {
  components: {
  },
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
