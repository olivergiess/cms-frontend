<template>
  <v-col
    cols="12"
    sm="10"
    md="6"
  >
    <CreateForm/>
  </v-col>
</template>

<script>
  import CreateForm from '~/components/posts/CreateForm'

  export default {
      layout: 'admin',
      components: {
          CreateForm
      }
  }
</script>
