<template>
  <v-navigation-drawer :value="value" @input="handleInput" app clipped fixed>
    <v-list>
      <v-list-item
        :key="i"
        :to="item.to"
        v-for="(item, i) in items"
        exact
        router
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
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'Account',
          to: '/account'
        },
        {
          icon: 'mdi-newspaper-variant-multiple',
          title: 'Blogs',
          to: '/blogs'
        },
        {
          icon: 'mdi-typewriter',
          title: 'Posts',
          to: '/posts'
        }
      ]
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e)
    }
  }
}
</script>
