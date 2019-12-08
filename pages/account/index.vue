<template>
  <div>
    <v-row pt-0>
      <v-col>
        <personal-details-form :user="user" />
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
import PersonalDetailsForm from '~/components/user/PersonalDetailsForm'
import UpdatePasswordForm from '~/components/user/UpdatePasswordForm'

export default {
  layout: 'admin',
  components: {
    PersonalDetailsForm,
    UpdatePasswordForm
  },
  computed: {
    user () {
      return this.$auth.user
    }
  }
}
</script>
