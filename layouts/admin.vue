<template>
  <v-app>
    <app-nav-draw :drawer="drawer" />

    <v-app-bar app clipped-left fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />

      <div class="flex-grow-1" />

      <app-avatar />
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col sm="12" md="10">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <app-footer />
  </v-app>
</template>

<script>
import AppAvatar from '~/components/ui/AppAvatar'
import AppNavDraw from '~/components/ui/AppNavDraw'
import AppFooter from '~/components/ui/AppFooter'

export default {
  components: {
    AppAvatar,
    AppNavDraw,
    AppFooter
  },
  data () {
    return {
      drawer: false,
      title: 'Blog'
    }
  }
}
</script>
