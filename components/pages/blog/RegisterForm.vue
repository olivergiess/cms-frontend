<template>
  <v-card
    class="elevation-12"
  >
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>
        Register
      </v-toolbar-title>
    </v-toolbar>

    <loading-bar
      v-if="loading"
    />

    <v-card-text>
      <v-form
        v-on:submit.prevent="register"
        ref="form"
      >
        <v-text-field
          label="First Name"
          type="text"
          v-model="form.data.first_name"
          :rules="[rules.required]"
          :disabled="loading"
        />

        <v-text-field
          label="Last Name"
          type="text"
          v-model="form.data.last_name"
          :rules="[rules.required]"
          :disabled="loading"
        />

        <v-text-field
          label="Email"
          type="email"
          v-model="form.data.email"
          :rules="[rules.required, rules.email]"
          :disabled="loading"
        />

        <v-text-field
          label="Confirm Email"
          type="text"
          v-model="form.data.email_confirmation"
          :rules="[rules.required, rules.email]"
          :disabled="loading"
        />

        <v-text-field
          label="Password"
          type="password"
          hint="At least 8 characters"
          v-model="form.data.password"
          :rules="[rules.required, rules.min]"
          :disabled="loading"
        />

        <v-text-field
          label="Confirm Password"
          type="password"
          v-model="form.data.password_confirmation"
          :rules="[rules.required]"
          :disabled="loading"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        type="submit"
        v-on:click.prevent="register"
        color="primary"
        :disabled="loading"
        :loading="loading"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    import LoadingBar from '~/components/LoadingBar';

    export default {
        components: {
            LoadingBar,
        },
        data: () => ({
            loading: false,
            rules: {
                required: v => !!v || 'This field is required',
                email: v => /.+@.+\..+/.test(v) || 'Invalid email format',
                min: v => v.length >= 8 || 'Must be at least 8 characters',
            },
            form: {
                data: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    email_confirmation: '',
                    password: '',
                    password_confirmation: '',
                },
            },
        }),
        methods: {
            register() {
                if (!this.$refs.form.validate())
                    return;

                this.loading = true;

                this.$axios.post('/users', {
                    data: this.form.data
                }).then(() => {
                    this.$router.push('/');
                }).finally(() => {
                    this.loading = false;
                })
            }
        }
    }
</script>
