<template>
  <app-form
    :title="'User Details'"
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

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.facebook_user_id"
      @input="form.errors.facebook_user_id = []"
      v-model="form.data.facebook_user_id"
      autocomplete="off"
      hint="This can be found by visiting your Facebook Page and looking at the URL: facebook.com/<FACEBOOK USER ID>"
      label="Facebook User ID"
      type="text"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.instagram_handle"
      @input="form.errors.instagram_handle = []"
      v-model="form.data.instagram_handle"
      autocomplete="off"
      label="Instagram Handle"
      type="text"
    />

    <app-snackbar :display="snackbar">
      User Details Updated
    </app-snackbar>
  </app-form>
</template>

<script>
import AppSnackbar from '~/components/ui/AppSnackbar'
import BaseForm from '~/components/base/BaseForm'
import User from '~/scripts/models/User'

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
          last_name: this.user.last_name,
          facebook_user_id: this.user.facebook_user_id,
          instagram_handle: this.user.instagram_handle
        },
        errors: {
          first_name: [],
          last_name: [],
          facebook_user_id: [],
          instagram_handle: []
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
