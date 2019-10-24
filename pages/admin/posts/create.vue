<template>
  <v-col
    cols="12"
    sm="10"
    md="8"
  >
    <CreateForm/>
  </v-col>
</template>

<script>
  import CreateForm from '@/components/pages/admin/posts/CreateForm'

  export default {
      layout: 'admin',
      components: {
          CreateForm
      }
  }
</script>
