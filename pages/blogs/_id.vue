<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col sm="12" md="10">
        <EditForm :blog="blog" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditForm from '~/components/blogs/EditForm'
import Blog from '~/models/Blog'

export default {
  layout: 'admin',
  components: {
    EditForm
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    blog () {
      return Blog.find(this.id)
    }
  },
  created () {
    if (this.blog === null) {
      this.$router.push('/blogs')
    }
  }
}
</script>
