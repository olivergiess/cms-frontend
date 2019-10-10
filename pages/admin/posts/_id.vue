<template>
    <v-col
      cols="12"
      sm="10"
      md="8"
    >
      <EditForm :post="post"/>
    </v-col>
</template>

<script>
  import EditForm from '~/components/posts/EditForm'
  import Post from '@/models/Post'

  export default {
      layout: 'admin',
      components: {
          EditForm
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
