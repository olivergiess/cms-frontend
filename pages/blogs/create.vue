<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col sm="12" md="10">
        <CreateForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateForm from '~/components/blogs/CreateForm'

export default {
  layout: 'admin',
  components: {
    CreateForm
  }
}
</script>
