<template>
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
          <v-list-item-title v-text="item.title"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
    export default {
        props: {
            drawer: Boolean
        },
        data() {
            return {
                items: [
                    {
                        icon: 'mdi-home',
                        title: 'Home',
                        to: '/admin'
                    },
                    {
                        icon: 'mdi-wall',
                        title: 'Blog',
                        to: '/' + this.$auth.user.slug
                    },
                    {
                        icon: 'mdi-notebook',
                        title: 'Posts',
                        to: '/admin/posts'
                    },
                ],
            }
        }
    }
</script>
