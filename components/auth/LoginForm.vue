<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>

    <loading-bar
      v-if="loading"
    />

    <v-card-text>
      <v-form
        v-on:submit.prevent="login"
        ref="form"
      >
        <v-text-field
          label="Email"
          type="email"
          v-model="form.data.email"
          @input="form.errors.email = ''"
          :error-messages="form.errors.email"
          :disabled="loading"
        ></v-text-field>

        <v-text-field
          label="Password"
          type="password"
          v-model="form.data.password"
          @input="form.errors.password = ''"
          :error-messages="form.errors.password"
          :disabled="loading"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        type="submit"
        v-on:click.prevent="login"
        color="primary"
        :loading="loading"
      >
        Login
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :to="'/register'"
        color="primary"
      >
        Register
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import LoadingBar from '@/components/ui/LoadingBar';

export default {
  components: {
    LoadingBar
  },
  data: () => ({
    loading: false,
    form: {
      data: {
        email: 'test@test.com',
        password: 'password'
      },
      errors: {
        email: '',
        password: '',
      },
    },
  }),
  methods: {
    login() {
      this.loading = true;

      this.$auth
        .login(this.form)
        .catch((error) => {
          let errors = error.response.data.errors;

          for (let field in this.form.errors) {
            if (errors[field] !== undefined) {
              this.form.errors[field] = errors[field];
            }
          }
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
</script>
