<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="10"
        md="8"
      >
        <EditForm :post="post"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import EditForm from '@/components/posts/EditForm'

    import Post from '@/mixins/models/Post'
    import {showPostByUser} from '@/mixins/composables/UserPosts';

    export default {
        layout: 'admin',
        components: {
            EditForm
        },
        async fetch({ route, redirect }) {
            const id = route.params.id;

            if(!Post.find(id))
                await Post.api()
                    .show(id)
                    .catch(() => redirect('/admin/posts'));
        },
        setup(props, context) {
            const id = context.root.$route.params.id;
            const user_id = context.root.$auth.user.id;

            const post = showPostByUser(user_id);

            return post(id);
        },
    }
</script>
