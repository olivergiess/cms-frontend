<template>
  <app-form
    :title="'Login'"
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

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.password"
      @input="form.errors.password = ''"
      v-model="form.data.password"
      label="Password"
      type="password"
    />
    <div>
      <nuxt-link to="/reset-password">
        Forgotten Password
      </nuxt-link>
    </div>
    <div>
      No Account?
      <nuxt-link to="/register">
        Create
      </nuxt-link>
    </div>
    <template v-slot:actions>
      <v-btn :loading="loading" color="primary" tile type="submit">
        Login
      </v-btn>
    </template>
  </app-form>
</template>

<script>
import BaseForm from '~/components/base/BaseForm'

export default {
  extends: BaseForm,
  data: () => ({
    form: {
      data: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }
  }),
  methods: {
    action () {
      return this.$auth.login({ data: this.form.data })
    }
  }
}
</script>
