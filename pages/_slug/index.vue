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

    import {allPublishedPostsForUser} from '@/mixins/composables/PublishedPosts'
    import {retrieveUser, showUserBySlug} from '@/mixins/composables/BlogUser'

    export default {
        mode: 'ssr',
        auth: false,
        layout: '_slug',
        components: {
            NavBar,
            Banner,
            Header,
            PreviewPost,
        },
        setup(props, context) {
            const slug = context.root.$route.params.slug;

            retrieveUser(slug);

            let user = showUserBySlug(slug);
            let posts = allPublishedPostsForUser(slug);

            return {
                ...user,
                ...posts,
            };
        }
    }
</script>
