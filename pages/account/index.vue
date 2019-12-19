<template>
  <div>
    <v-row pt-0>
      <v-col>
        <user-details-form :user="user" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <update-password-form />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import UserDetailsForm from '~/components/user/UserDetailsForm'
import UpdatePasswordForm from '~/components/user/UpdatePasswordForm'

export default {
  layout: 'admin',
  components: {
    UserDetailsForm,
    UpdatePasswordForm
  },
  computed: {
    user () {
      return this.$auth.user
    }
  }
}
</script>
