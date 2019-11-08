<template>
  <div>
    <NavBar :user="user"/>

    <Banner :background_image_src="post.cover_image"/>

    <Avatar :user="user"/>

    <v-container>
      <v-row
        align="start"
        justify="center"
      >
        <v-col
          cols="6"
        >
          <h1
            class="display-3 font-weight-light text-center"
          >
            {{ post.title }}
          </h1>
        </v-col>
      </v-row>
      <v-row
        align="start"
        justify="center"
      >
        <v-col cols="auto">
          <h3
            class="overline text-uppercase grey--text"
          >
            PUBLISHED / {{ post.formatted_publish_at }}
          </h3>
          <h3
            class="overline text-uppercase grey--text"
          >
            EDITED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ {{ post.formatted_updated_at }}
          </h3>
        </v-col>
      </v-row>
      <v-row
        align="start"
        justify="center"
      >
        <v-col
          cols="8"
        >
          <ViewPost :html="post.body"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
    import NavBar from '@/components/layouts/_slug/NavBar'
    import Avatar from '@/components/layouts/_slug/Avatar'
    import Banner from '@/components/layouts/_slug/ImageBanner'
    import ViewPost from '@/components/posts/ViewPost'

    import {showPublishedPostForUser} from '@/mixins/composables/PublishedPosts'
    import {showUserBySlug} from '@/mixins/composables/BlogUser'

    export default {
        auth: false,
        layout: '_slug',
        components: {
            NavBar,
            Avatar,
            Banner,
            ViewPost,
        },
        setup(props, context) {
            const id = context.root.$route.params.id;
            const slug = context.root.$route.params.slug;

            let post = showPublishedPostForUser(slug);
            let user = showUserBySlug(slug);

            return {
                ...user,
                ...post(id),
            };
        }
    }
</script>

