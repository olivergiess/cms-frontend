<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="10"
        md="8"
      >
        <CreateForm />
      </v-col>
    </v-row>
  </v-container>
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
