<template>
  <v-data-table
    :headers="table.headers"
    :items="table.posts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
    async beforeCreate() {
        this.$store.dispatch('posts/all', this.$route.params.id);
    },
    data: () => ({
      table: {
          headers: [
              { text: 'Title' },
              { text: 'Publish At' },
          ],
          posts: {}
      },
    })
  }
</script>
