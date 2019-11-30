<template>
  <app-form
    :title="'Register'"
    :submit="submit"
    :loading="loading"
  >
    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.first_name"
      @input="form.errors.first_name = ''"
      v-model="form.data.first_name"
      label="First Name"
      type="text"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.last_name"
      @input="form.errors.last_name = ''"
      v-model="form.data.last_name"
      label="Last Name"
      type="text"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.email"
      @input="form.errors.email = ''"
      v-model="form.data.email"
      label="Email"
      type="email"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.email_confirmation"
      @input="form.errors.email_confirmation = ''"
      v-model="form.data.email_confirmation"
      label="Confirm Email"
      type="text"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.password"
      @input="form.errors.password = ''"
      v-model="form.data.password"
      hint="At least 8 characters"
      label="Password"
      type="password"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.password_confirmation"
      @input="form.errors.password_confirmation = ''"
      v-model="form.data.password_confirmation"
      label="Confirm Password"
      type="password"
    />
  </app-form>
</template>

<script>
import BaseForm from '~/components/base/BaseForm'
import User from '~/models/User'

export default {
  extends: BaseForm,
  data: () => ({
    redirectTo: '/login',
    form: {
      data: {
        first_name: '',
        last_name: '',
        email: '',
        email_confirmation: '',
        password: '',
        password_confirmation: ''
      },
      errors: {
        first_name: '',
        last_name: '',
        email: '',
        email_confirmation: '',
        password: '',
        password_confirmation: ''
      }
    }
  }),
  methods: {
    action () {
      return User.api().create(this.form.data)
    }
  }
}
</script>
