<template>
  <v-app>
    <nuxt/>

    <Footer app/>
  </v-app>
</template>

<script>
  import Footer from '~/components/base/Footer'

    export default {
      components: {
          Footer,
      }
    }
</script>
