<template>
  <v-col
    cols="12"
    sm="10"
    md="6"
  >
    <CreatePostForm/>
  </v-col>
</template>

<script>
  import CreatePostForm from '~/components/CreatePostForm'

  export default {
      components: {
          CreatePostForm
      }
  }
</script>
