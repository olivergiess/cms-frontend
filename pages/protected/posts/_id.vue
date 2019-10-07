<template>
    <v-col
      cols="12"
      sm="10"
      md="6"
    >
      <EditPostForm :post="post"/>
    </v-col>
</template>

<script>
  import EditPostForm from '~/components/EditPostForm'
  import Post from '@/models/Post'

  export default {
      components: {
          EditPostForm
      },
      mounted() {
          Post.$get({
              params: {
                  id: this.$route.params.id
              }})
      },
      computed: {
          post() {
              let post = Post.find(this.$route.params.id)

              return post != null
                  ? post
                  : new Post()
          }
      },
  }
</script>
