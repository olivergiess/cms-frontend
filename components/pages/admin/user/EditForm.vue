<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      class="white--text"
      flat
    >
      <v-toolbar-title>Edit Your Details</v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-toolbar>

    <loading-bar
      v-if="loading"
    />

    <v-card-text>
      <v-form
        v-model="form.valid"
        v-on:submit.prevent="submit"
        ref="form"
      >
        <v-text-field
          v-model="user.email"
          :rules="rules.email"
          label="Email"
          required
          :disabled="loading"
        ></v-text-field>

        <v-text-field
          v-model="user.slug"
          :rules="rules.slug"
          :counter="10"
          label="URL"
          required
          :disabled="loading"
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary lighten-1"
        @click.prevent="submit"
        :disabled="loading"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    import LoadingBar from '~/components/pages/general/LoadingBar'

    import User from '@/store/models/User'

    export default {
        components: {
            LoadingBar,
        },
        mounted() {
            User.$get();
        },
        computed: {
            user_id() {
                return this.$auth.user.id
            },
            user() {
                let user = User.find(this.user_id)

                return user != null
                    ? user
                    : new User()
            }
        },
        data: () => {
            return {
                loading: false,
                form: {
                    valid: false,
                },
                rules: {
                    email: [
                        v => !!v || 'Email is required',
                        v => /.+@.+\..+/.test(v) || 'Email is invalid',
                    ],
                    slug: [
                        v => !!v || 'URL is required',
                        v => (v && v.length > 2) || 'URL must be at least 3 characters',
                        v => /^[a-z_]+$/.test(v) || 'URL must be made of lowercase alphabetic characters or an underscore',
                    ]
                },
            }
        },
        methods: {
            submit() {
                if (!this.$refs.form.validate())
                    return

                this.loading = true

                User.$update({
                    data: this.user
                }).then(() => {
                    this.$router.push('/admin')
                }).finally(() => {
                    this.loading = false
                })
            }
        }
    }
</script>
