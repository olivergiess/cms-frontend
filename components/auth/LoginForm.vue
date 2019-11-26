<template>
  <Form
    title="Login"
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
    <template v-slot:actions>
      <v-btn :loading="loading" v-on:click.prevent="submit" color="primary" type="submit">
        Login
      </v-btn>

      <v-spacer/>

      <v-btn :to="'/register'" color="primary">
        Register
      </v-btn>
    </template>
  </Form>
</template>

<script>
import BaseForm from '~/components/ui/forms/BaseForm'

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
      return this.$auth.login(this.form.data)
    }
  }
}
</script>
