<template>
  <v-container fill-height>
    <v-row align="start" justify="center">
      <v-col cols="12" md="5" xl="4">
        <resend-verification-email-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ResendVerificationEmailForm from '~/components/auth/ResendVerificationEmailForm'

export default {
  auth: 'guest',
  components: {
    ResendVerificationEmailForm
  }
}
</script>
