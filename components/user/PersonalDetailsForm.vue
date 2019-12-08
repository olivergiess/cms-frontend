<template>
  <app-form
    :title="'Personal Details'"
    :submit="submit"
    :loading="loading"
  >
    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.first_name"
      @input="form.errors.first_name = []"
      v-model="form.data.first_name"
      label="First Name"
      type="text"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.last_name"
      @input="form.errors.last_name = []"
      v-model="form.data.last_name"
      label="Last Name"
      type="text"
    />

    <app-snackbar :display="snackbar">
      Personal Details Updated
    </app-snackbar>
  </app-form>
</template>

<script>
import AppSnackbar from '~/components/ui/AppSnackbar'
import BaseForm from '~/components/base/BaseForm'
import User from '~/models/User'

export default {
  components: {
    AppSnackbar
  },
  extends: BaseForm,
  props: {
    user: {
      type: User,
      default: () => new User()
    }
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      snackbar: false,
      form: {
        data: {
          first_name: this.user.first_name,
          last_name: this.user.last_name
        },
        errors: {
          first_name: [],
          last_name: []
        }
      }
    }
  },
  methods: {
    action () {
      return User.api().updateCurrent(this.form.data)
        .then(() => { this.snackbar = true })
    }
  }
}
</script>
