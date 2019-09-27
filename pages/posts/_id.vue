<template>
  <div>
    {{ posts[this.$route.params.id] }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
      created() {
          this.$store.dispatch('posts/get', this.$route.params.id);
      },
      computed: {
          ...mapGetters({
              posts: 'posts/all'
          })
      }
  }
</script>
