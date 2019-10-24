<template>
  <v-app>
    <nuxt/>

    <Footer app/>
  </v-app>
</template>

<script>
  import Footer from '@/components/layouts/core/Footer'

    export default {
      components: {
          Footer,
      }
    }
</script>
