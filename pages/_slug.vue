<template>
  <v-container>
    <v-row
      align="start"
      justify="center"
    >
      <v-col cols=12 md="5">
        <PostPreview/>
      </v-col>
      <v-col cols=12 md="5">
        <PostPreview/>
      </v-col>
      <v-col cols=12 md="5">
        <PostPreview/>
      </v-col>
      <v-col cols=12 md="5">
        <PostPreview/>
      </v-col>
      <v-col cols=12 md="5">
        <PostPreview/>
      </v-col>
      <v-col cols=12 md="5">
        <PostPreview/>
      </v-col>
      <v-col cols=12 md="5">
        <PostPreview/>
      </v-col>
      <v-col cols=12 md="5">
        <PostPreview/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    import User from '@/models/User'
    import Post from '@/models/Post'

    import PostPreview from '@/components/pages/blog/PostPreview'

    export default {
        auth: false,
        layout: 'blog',
        components: {
            PostPreview,
        },
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
