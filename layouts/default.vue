<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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

    <v-footer>
      <span>Oliver Giess &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Avatar from '~/components/Avatar'

  export default {
    components: {
        Avatar,
    },
    data () {
      return {
        drawer: false,
        items: [
          {
            icon: 'mdi-home',
            title: 'Home',
            to: '/protected'
          },
          {
            icon: 'mdi-notebook',
            title: 'Posts',
            to: '/protected/posts'
          },
        ],
        title: 'Blog'
      }
    }
  }
</script>
