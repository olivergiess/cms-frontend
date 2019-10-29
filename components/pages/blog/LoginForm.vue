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
          :rules="[rules.required, rules.email]"
          :disabled="loading"
        ></v-text-field>

        <v-text-field
          label="Password"
          type="password"
          v-model="form.data.password"
          :rules="[rules.required]"
          :disabled="loading"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        type="submit"
        v-on:click.prevent="login"
        color="primary"
        :disabled="loading"
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    import LoadingBar from '~/components/LoadingBar';

    export default {
        components: {
            LoadingBar
        },
        data: () => ({
            loading: false,
            rules: {
                required: v => !!v || 'This field is required',
                email: v => /.+@.+\..+/.test(v) || 'Invalid email format',
            },
            form: {
                data: {
                    email: 'test@test.com',
                    password: 'password'
                },
            },
        }),
        methods: {
            login() {
                this.loading = true;

                this.$auth.login({
                    data: this.form.data
                }).then(() => {
                    this.$router.push('/admin');
                }).finally(() => {
                    this.loading = false;
                })
            }
        }
    }
</script>
