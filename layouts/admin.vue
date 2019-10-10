<template>
  <v-app>
    <NavDrawer :drawer="drawer"/>

    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />

      <div class="flex-grow-1"></div>

      <Avatar/>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <nuxt />
        </v-row>
      </v-container>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
  import Avatar from '~/components/base/Avatar'
  import NavDrawer from '~/components/base/NavDrawer'
  import Footer from '~/components/base/Footer'

  export default {
    components: {
        Avatar,
        NavDrawer,
        Footer,
    },
    data () {
      return {
        drawer: false,
        title: 'Blog'
      }
    }
  }
</script>
