<script>
import Form from '~/components/posts/Form'
import Post from '~/models/Post'

export default {
  extends: Form,
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      prefix: 'Edit'
    }
  },
  methods: {
    action () {
      return Post.api().update(this.post.id, this.form.data)
    }
  }
}
</script>
