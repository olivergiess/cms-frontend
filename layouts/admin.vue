<template>
  <v-app>
    <NavDraw :drawer="drawer" />

    <v-app-bar app clipped-left fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />

      <div class="flex-grow-1" />

      <Avatar />
    </v-app-bar>

    <v-content>
      <nuxt name="" />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Avatar from '~/components/ui/Avatar'
import NavDraw from '~/components/ui/NavDraw'
import Footer from '~/components/ui/Footer'

export default {
  components: {
    Avatar,
    NavDraw,
    Footer
  },
  data () {
    return {
      drawer: false,
      title: 'Blog'
    }
  }
}
</script>
