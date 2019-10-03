<template>
  <v-data-table
    :headers="headers"
    :items="posts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  import Post from '@/models/Post'

  export default {
    computed: {
      posts() {
        return Post.all();
      }
    },
    mounted() {
        Post.$fetch();
    },
    data () {
        return {
            headers: [
                { text: 'Title', value: 'title' },
                { text: 'Publish At', value: 'publish_at' },
            ]
        }
    },
  }
</script>
