<template>
  <app-card>
    <template v-slot:toolbar>
      <v-toolbar-title>Welcome, {{ user.first_name }}</v-toolbar-title>
    </template>

    <v-card-text class="grey--text text--darken-3">
      Welcome to Oliver Giess CMS (Content Management System), from here you can administer your Blogs and Posts!

      To begin you start be creating a Blog and following up with your first post, you'll find the links you need by
      clicking the three bars in the top right.
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
