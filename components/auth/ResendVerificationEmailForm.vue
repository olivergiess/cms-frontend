<template>
  <app-form
    :title="'Resend Verification Email'"
    :submit="submit"
    :loading="loading"
  >
    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.email"
      @input="form.errors.email = ''"
      v-model="form.data.email"
      label="Email"
      type="email"
    />
  </app-form>
</template>

<script>
import BaseForm from '~/components/base/BaseForm'

export default {
  extends: BaseForm,
  data: () => ({
    redirectTo: '/',
    form: {
      data: {
        email: ''
      },
      errors: {
        email: ''
      }
    }
  }),
  methods: {
    action () {
      return this.$axios.post(`/auth/verification`, this.form.data)
    }
  }
}
</script>
