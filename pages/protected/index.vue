<template>
  <v-col
          cols="12"
          sm="12"
          md="10"
  >
    <v-card  class="elevation-12">
      <v-toolbar
        color="primary"
        class="white--text"
        flat
      >
        <v-toolbar-title>Welcome, {{ name }}</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        Welcome to your Blog, from here you can administer and monitor how it is performing!

        To begin you can find an array of useful links in the side bar, this menu can be hidden or revealed by clicking the three bars in the top right.
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
    export default {
      computed: {
          name() {
              return this.$auth.user.first_name
          }
      }
    }
</script>
