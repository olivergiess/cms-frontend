<template>
  <v-app>
    <NavBar/>

    <v-content>
      <nuxt/>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
    import NavBar from '@/components/layouts/_slug/NavBar'
    import Footer from '@/components/layouts/general/Footer'

    export default {
      components: {
        NavBar,
        Footer
      }
    }
</script>
