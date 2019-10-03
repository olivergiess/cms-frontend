<template>
  <v-content>
    <v-container
            class="fill-height"
            fluid
    >
      <v-row
              align="center"
              justify="center"
      >
        <v-col
                cols="12"
                sm="10"
                md="6"
        >
          <PostForm :postId="this.$route.params.id"/>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import PostForm from '~/components/PostForm'
  import Post from '@/models/Post'

  export default {
      components: {
          PostForm
      },
      mounted() {
        let id = this.$route.params.id;

        if(Post.find(id) == null) {
            Post.$get({
                params: {
                    id: id
                }
            });
        }
      }
  }
</script>
