<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ error.message ? error.message : pageNotFound }}
    </h1>
    <h1 v-else>
      {{ error.message ? error.message : otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }
</style>
