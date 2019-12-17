<template>
  <app-form
    :title="'Register'"
    :submit="submit"
    :loading="loading"
  >
    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.first_name"
      @input="form.errors.first_name = []"
      v-model="form.data.first_name"
      label="First Name"
      type="text"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.last_name"
      @input="form.errors.last_name = []"
      v-model="form.data.last_name"
      label="Last Name"
      type="text"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.email"
      @input="form.errors.email = []"
      v-model="form.data.email"
      label="Email"
      type="email"
    />

    <app-password-input
      :disabled="loading"
      :error-messages="form.errors.password"
      @input="form.errors.password = []"
      v-model="form.data.password"
    />
  </app-form>
</template>

<script>
import AppPasswordInput from '~/components/ui/forms/AppPasswordInput'
import BaseForm from '~/components/base/BaseForm'
import User from '~/scripts/models/User'

export default {
  components: {
    AppPasswordInput
  },
  extends: BaseForm,
  data: () => ({
    redirectTo: '/login',
    form: {
      data: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      },
      errors: {
        first_name: [],
        last_name: [],
        email: [],
        password: []
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
