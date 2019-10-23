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

    export default {
        auth: false,
        mounted() {
            User.api().fetchWithPublished(this.$route.params.slug);
        },
        computed: {
            posts() {
              return User.query()
                      .where('slug', this.$route.params.slug)
                      .with('posts')
                      .first()
                      .posts;
            }
        }
        ,
    }
</script>
