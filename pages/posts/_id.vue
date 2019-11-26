<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col sm="12" md="10">
        <EditForm :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditForm from '~/components/posts/EditForm'
import Post from '~/models/Post'

export default {
  layout: 'admin',
  components: {
    EditForm
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    post () {
      return Post.find(this.id)
    }
  },
  created () {
    if (this.post === null) {
      this.$router.push('/posts')
    }
  }
}
</script>
