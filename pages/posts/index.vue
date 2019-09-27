<template>
  <v-data-table
    :headers="headers"
    :items="posts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
   export default {
    data: () => ({
      table: {
          headers: [
              { text: 'Title' },
              { text: 'Publish At' },
          ],
          posts: []
      }
    }),
   }
</script>
