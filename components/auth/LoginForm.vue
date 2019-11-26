<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>

    <loading-bar v-if="loading" />

    <v-card-text>
      <v-form ref="form" v-on:submit.prevent="login">
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
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn :loading="loading" v-on:click.prevent="login" color="primary" type="submit">
        Login
      </v-btn>

      <v-spacer />

      <v-btn :to="'/register'" color="primary">
        Register
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import LoadingBar from '~/components/ui/LoadingBar'

export default {
  components: {
    LoadingBar
  },
  data: () => ({
    loading: false,
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
    login () {
      this.loading = true

      this.$auth
        .login(this.form)
        .catch((error) => {
          const errors = error.response.data.errors

          for (const field in this.form.errors) {
            if (errors[field] !== undefined) {
              this.form.errors[field] = errors[field]
            }
          }
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
