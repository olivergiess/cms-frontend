<template>
  <app-form
    :title="'Update Password'"
    :submit="submit"
    :loading="loading"
  >
    <app-password-input
      :disabled="loading"
      :error-messages="form.errors.current_password"
      @input="form.errors.current_password = []"
      v-model="form.data.current_password"
      label="Current Password"
    />

    <app-password-input
      :disabled="loading"
      :error-messages="form.errors.new_password"
      @input="form.errors.new_password = []"
      v-model="form.data.new_password"
      label="New Password"
    />

    <app-snackbar :display="snackbar">
      Password Updated
    </app-snackbar>
  </app-form>
</template>

<script>
import AppPasswordInput from '~/components/ui/forms/AppPasswordInput'
import AppSnackbar from '~/components/ui/AppSnackbar'
import BaseForm from '~/components/base/BaseForm'
import User from '~/scripts/models/User'

export default {
  components: {
    AppPasswordInput,
    AppSnackbar
  },
  extends: BaseForm,
  data: () => ({
    snackbar: false,
    form: {
      data: {
        current_password: '',
        new_password: ''
      },
      errors: {
        current_password: [],
        new_password: []
      }
    }
  }),
  methods: {
    action () {
      return User.api().updatePasswordCurrent(this.form.data)
        .then(() => {
          this.snackbar = true

          this.reset()
        })
    },
    reset () {
      this.form.data.current_password = ''
      this.form.data.new_password = ''
    }
  }
}
</script>
