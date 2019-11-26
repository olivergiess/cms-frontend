<script>
import Form from '~/components/blogs/Form'
import Blog from '~/models/Blog'

export default {
  extends: Form,
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
