<index.vue>
  <EditPostForm :post="post" />
</index.vue>

<script>
import EditPostForm from '~/components/posts/EditPostForm'
import Post from '~/models/Post'

export default {
  layout: 'admin',
  components: {
    EditPostForm
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    post () {
      return Post.find(this.id)
    }
  },
  created () {
    if (this.post === null) {
      this.$router.push('/posts')
    }
  }
}
</script>
