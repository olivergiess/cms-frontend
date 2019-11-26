<script>
import Form from '~/components/blogs/Form'
import Blog from '~/models/Blog'

export default {
  extends: Form,
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
