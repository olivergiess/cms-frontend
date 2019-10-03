<template>
  <div>
    {{ post }}
  </div>
</template>

<script>
  import Post from '@/models/Post'

  export default {
      mounted() {
        Post.$get({
          params: {
            id: this.$route.params.id
          }
        });
      },
      computed: {
        post () {
          return Post.find(this.$route.params.id)
        }
      }
  }
</script>
