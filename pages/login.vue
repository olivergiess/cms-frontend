<template>
  <v-container fill-height>
    <v-row align="start" justify="center">
      <v-col cols="12" md="5">
        <LoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from '~/components/auth/LoginForm'

export default {
  auth: 'guest',
  components: {
    LoginForm
  }
}
</script>
