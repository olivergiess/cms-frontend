<template>
  <v-container fill-height>
    <v-row align="start" justify="center">
      <v-col cols="12" md="5" xl="4">
        <reset-password-form :email="email" :expiry="expiry" :token="token" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ResetPasswordForm from '~/components/auth/ResetPasswordForm'

export default {
  auth: 'guest',
  components: {
    ResetPasswordForm
  },
  computed: {
    email () {
      return this.$route.params.email
    },
    expiry () {
      return this.$route.params.expiry
    },
    token () {
      return this.$route.params.token
    }
  }
}
</script>
