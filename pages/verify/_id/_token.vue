<template>
  <v-container fill-height>
    <v-row align="start" justify="center">
      <v-col cols="12" md="5">
        <v-card elevation="2">
          <v-toolbar color="primary" class="white--text" flat>
            <v-toolbar-title>
              Email Verification
            </v-toolbar-title>
          </v-toolbar>

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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: 'guest',
  data: () => {
    return {
      error: false,
      loading: true
    }
  },
  created () {
    const id = this.$route.params.id
    const token = this.$route.params.token
    console.log(token)
    this.$axios.put(`/users/${id}/verify`, { token })
      .catch(() => { this.error = true })
      .finally(() => { this.loading = false })
  }
}
</script>
