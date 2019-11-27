<script>
import BlogForm from '~/components/blogs/BlogForm'
import Blog from '~/models/Blog'

export default {
  extends: BlogForm,
  data: () => {
    return {
      prefix: 'Edit'
    }
  },
  methods: {
    action () {
      return Blog.api().update(this.blog.id, this.form.data)
    }
  }
}
</script>
