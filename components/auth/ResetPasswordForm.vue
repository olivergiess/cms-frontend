<template>
  <app-form
    :title="'Reset Password'"
    :submit="submit"
    :loading="loading"
  >
    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.password"
      @input="form.errors.password = ''"
      v-model="form.data.password"
      label="Password"
      type="password"
    />
  </app-form>
</template>

<script>
import BaseForm from '~/components/base/BaseForm'

export default {
  extends: BaseForm,
  props: {
    email: {
      type: String,
      default: ''
    },
    expiry: {
      type: String,
      default: ''
    },
    token: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    redirectTo: '/',
    form: {
      data: {
        password: ''
      },
      errors: {
        password: ''
      }
    }
  }),
  methods: {
    action () {
      return this.$axios.put(`/auth/password`, {
        email: this.email,
        expiry: this.expiry,
        token: this.token,
        password: this.form.data.password
      })
    }
  }
}
</script>
