<script>
import PostForm from '~/components/posts/PostForm'
import Post from '~/scripts/models/Post'

export default {
  extends: PostForm,
  data: () => {
    return {
      prefix: 'Create'
    }
  },
  methods: {
    action () {
      return Post.api().create(this.form.data)
    }
  }
}
</script>
