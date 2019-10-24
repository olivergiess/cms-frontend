<template>
  <v-app>
    <NavBar/>

    <v-content>
      <v-container>
        <v-row
          align="start"
          justify="center"
        >
          <v-col
            cols="11"
            lg="8"
          >
            <nuxt/>
          </v-col>
        </v-row>
      </v-container>
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
