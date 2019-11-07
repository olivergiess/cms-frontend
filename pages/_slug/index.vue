<template>
  <div>
    <NavBar :user="user"/>

    <Banner
      background_image_src="http://www.schintudesign.com/envato/exodus/assets/img/backs/back03.jpg"
    />

    <Header
      title="The Blog"
      sub_title="The Latest From The Blog"
    />

    <v-container>
      <v-row
        align="start"
        justify="center"
      >
        <v-col
          v-for="post in posts"
          :key="post.id"
          cols="12"
          md="5"
        >
          <PreviewPost :post="post"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
    import NavBar from '@/components/layouts/_slug/NavBar'
    import Banner from '@/components/layouts/_slug/ImageBanner'
    import Header from '@/components/layouts/_slug/Header'
    import PreviewPost from '@/components/posts/PreviewPost'

    import User from '@/mixins/models/User'
    import Post from '@/mixins/models/Post'

    export default {
        auth: false,
        layout: '_slug',
        components: {
            NavBar,
            Banner,
            Header,
            PreviewPost,
        },
        async fetch({ route }) {
            await User.api().showBySlug(route.params.slug);
        },
        computed: {
            posts() {
                let slug = this.$route.params.slug;

                const posts = Post.query()
                    .with('user')
                    .where((post) => {
                        return Date.parse(post.publish_at) < Date.now();
                    })
                    .whereHas('user', (query) => {
                        query.where('slug', slug);
                    })
                    .all();

                return posts;
            },
            user () {
                let slug = this.$route.params.slug;

                let user = User
                        .query()
                        .where('slug', slug)
                        .first();

                return user
                    ? user
                    : new User;
            }
        }
    }
</script>
