<script>
import BlogForm from '~/components/blogs/BlogForm'
import Blog from '~/models/Blog'

export default {
  extends: BlogForm,
  data: () => {
    return {
      prefix: 'Create'
    }
  },
  methods: {
    action () {
      return Blog.api().create(this.form.data)
    }
  }
}
</script>
