<template>
  <v-container fill-height>
    <v-row align="start" justify="center">
      <v-col cols="12" md="5" xl="4">
        <app-card>
          <template v-slot:toolbar>
            <v-toolbar-title>
              Email Verification
            </v-toolbar-title>
          </template>

          <v-card-text>
            <span v-if="loading">
              Verifying...
            </span>
            <span v-else>
              <span v-if="error">
                Unable to verify your email address.
              </span>
              <span v-else>
                Email verified! You can now <router-link to="/login">login</router-link>.
              </span>
            </span>
          </v-card-text>
        </app-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppCard from '~/components/ui/AppCard'

export default {
  auth: 'guest',
  components: {
    AppCard
  },
  data: () => {
    return {
      error: false,
      loading: true
    }
  },
  created () {
    const id = this.$route.params.id
    const token = this.$route.params.token

    this.$axios.put(`/users/${id}/verification`, { token })
      .catch(() => { this.error = true })
      .finally(() => { this.loading = false })
  }
}
</script>
