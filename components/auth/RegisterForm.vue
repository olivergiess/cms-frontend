<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>
        Register
      </v-toolbar-title>
    </v-toolbar>

    <loading-bar v-if="loading" />

    <v-card-text>
      <v-form ref="form" v-on:submit.prevent="register">
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
          :error-messages="form.errors.slug"
          @input="form.errors.slug = ''"
          v-model="form.data.slug"
          hint="This will form part of your Blog's Slug"
          label="Slug"
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
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn :loading="loading" v-on:click.prevent="register" color="primary" type="submit">
        Submit
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
        first_name: '',
        last_name: '',
        slug: '',
        email: '',
        email_confirmation: '',
        password: '',
        password_confirmation: ''
      },
      errors: {
        first_name: '',
        last_name: '',
        slug: '',
        email: '',
        email_confirmation: '',
        password: '',
        password_confirmation: ''
      }
    }
  }),
  methods: {
    register () {
      if (!this.$refs.form.validate()) {
        return
      }

      this.loading = true

      this.$axios
        .post('/users', this.form.data)
        .then(() => {
          this.$router.push('/')
        })
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
