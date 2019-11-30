<template>
  <v-menu bottom left offset-y transition="slide-y-transition">
    <template v-slot:activator="{ on }">
      <v-avatar v-on="on" class="white--text" color="yellow darken-3" size="36">
        {{ initials }}
      </v-avatar>
    </template>

    <v-list>
      <v-list-item @click="logout">
        <v-list-item-title>Log Out</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        { title: 'Log Out' }
      ]
    }
  },
  computed: {
    user () {
      return this.$auth.user
    },
    initials () {
      return this.user.first_name[0] + this.user.last_name[0]
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')

      this.$store.dispatch('entities/deleteAll')

      this.$auth.logout()
    }
  }
}
</script>
