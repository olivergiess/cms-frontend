<script>
import PostForm from '~/components/posts/PostForm'
import Post from '~/models/Post'

export default {
  extends: PostForm,
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
