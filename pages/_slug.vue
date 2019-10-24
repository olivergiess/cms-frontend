<template>
  <div>
    {{ posts }}
  </v-col>
</template>

<script>
    import User from '@/models/User'
    import Post from '@/models/Post'
    import { mapGetters } from 'vuex'

    export default {
        auth: false,
        layout: 'blog',
        mounted() {
            this.$store.commit('currentSlug/set', this.$route.params.slug);

            User.api().fetchWithPublished(this.slug);
        },
        computed: {
            ...mapGetters({
                slug: 'currentSlug/get',
            }),
            posts() {
                return Post
                    .query()
                    .where((post) => {
                        return Date.parse(post.publish_at) < Date.now();
                    })
                    .with('user', (query) => {
                        query.where('slug', this.slug);
                    })
                    .all();
            }
        }
    }
</script>
