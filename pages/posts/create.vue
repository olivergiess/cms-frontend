<template>
  <CreatePostForm />
</template>

<script>
import CreatePostForm from '~/components/posts/CreatePostForm'
import Blog from '~/scripts/models/Blog'

export default {
  layout: 'admin',
  components: {
    CreatePostForm
  },
  beforeCreate () {
    if (Blog.all().length < 1) {
      this.$router.push('/blogs')
    }
  }
}
</script>
