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
    import NavBar from '@/components/layouts/blog/NavBar'
    import Footer from '@/components/layouts/core/Footer'

    export default {
        components: {
            NavBar,
            Footer
        }
    }
</script>
