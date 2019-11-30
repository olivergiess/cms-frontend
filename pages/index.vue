<template>
  <app-card>
    <template v-slot:toolbar>
      <v-toolbar-title>Welcome, {{ user.first_name }}</v-toolbar-title>
    </template>

    <v-card-text>
      Welcome to your Blog, from here you can administer and monitor how it is performing!

      To begin you can find an array of useful links in the side bar, this menu can be hidden or revealed by
      clicking
      the three bars in the top right.
    </v-card-text>
  </app-card>
</template>

<script>
import AppCard from '~/components/ui/AppCard'

export default {
  layout: 'admin',
  components: {
    AppCard
  },
  computed: {
    user () {
      return this.$auth.user
    }
  }
}
</script>
