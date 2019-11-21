<template>
  <v-app>
    <NavDraw :drawer="drawer"/>

    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>

      <v-toolbar-title v-text="title"/>

      <div class="flex-grow-1"></div>

      <Avatar/>
    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import Avatar from '@/components/ui/Avatar'
import NavDraw from '@/components/ui/NavDraw'
import Footer from '@/components/ui/Footer'

export default {
  components: {
    Avatar,
    NavDraw,
    Footer,
  },
  data() {
    return {
      drawer: false,
      title: 'Blog'
    }
  }
}
</script>
