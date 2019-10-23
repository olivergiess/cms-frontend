<template>
    <v-col
      cols="12"
      sm="10"
      md="8"
    >
      {{ posts }}
    </v-col>
</template>

<script>
  import User from '@/models/User'
  import Post from '@/models/Post'

  export default {
      auth: false,
      components: {
      },
      async mounted() {
          User.api().fetchWithPublished(this.$route.params.slug);
      },
      computed: {
          posts() {
              return User.query().where('slug', this.$route.params.slug).with('posts').get();
          }
      },
  }
</script>
