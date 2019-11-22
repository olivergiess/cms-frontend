<template>
  <v-container
    fill-height
  >
    <v-row
      align="start"
      justify="center"
    >
      <v-col
        cols="12"
        md="5"
      >
        <RegisterForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegisterForm from '~/components/auth/RegisterForm'

export default {
  auth: 'guest',
  components: {
    RegisterForm
  }
}
</script>
