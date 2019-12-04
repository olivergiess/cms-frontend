<template>
  <EditBlogForm :blog="blog" />
</template>

<script>
import EditBlogForm from '~/components/blogs/EditBlogForm'
import Blog from '~/models/Blog'

export default {
  layout: 'admin',
  components: {
    EditBlogForm
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
