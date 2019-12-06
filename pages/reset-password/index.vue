<template>
  <v-container fill-height>
    <v-row align="start" justify="center">
      <v-col cols="12" md="5" xl="4">
        <request-password-reset-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RequestPasswordResetForm from '~/components/auth/RequestPasswordResetForm'

export default {
  auth: 'guest',
  components: {
    RequestPasswordResetForm
  }
}
</script>
