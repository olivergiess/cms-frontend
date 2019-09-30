<template>
  <v-data-table
    :headers="table.headers"
    :items="table.posts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  import Post from '@/models/Post'

  export default {
    async beforeCreate() {
        Post.$fetch();
    },
    data: () => ({
      table: {
          headers: [
              { text: 'Title' },
              { text: 'Publish At' },
          ],
          posts: []
      },
    }),
  }
</script>
