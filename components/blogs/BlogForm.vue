<template>
  <app-form
    :title="`${prefix} Blog`"
    :submit="submit"
    :loading="loading"
  >
    <v-text-field
      :error-messages="form.errors.url_identifier"
      @input="form.errors.url_identifier = []"
      v-model="form.data.url_identifier"
      label="URL Identifier"
    />

    <v-text-field
      :error-messages="form.errors.name"
      @input="form.errors.name = []"
      v-model="form.data.name"
      label="Name"
    />

    <v-text-field
      :error-messages="form.errors.cover_image"
      @input="form.errors.cover_image = []"
      v-model="form.data.cover_image"
      label="Cover Image"
    />

    <app-text-editor
      :errorMessages="form.errors.about"
      @input="form.errors.about = []"
      v-model="form.data.about"
    />
  </app-form>
</template>

<script>
import AppTextEditor from '~/components/ui/forms/AppTextEditor'
import BaseForm from '~/components/base/BaseForm'
import Blog from '~/scripts/models/Post'

export default {
  components: {
    AppTextEditor
  },
  extends: BaseForm,
  props: {
    blog: {
      type: Blog,
      default: () => new Blog()
    }
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      prefix: '',
      redirectTo: '/blogs',
      form: {
        data: {
          url_identifier: this.blog.url_identifier,
          name: this.blog.name,
          cover_image: this.blog.cover_image,
          about: this.blog.about
        },
        errors: {
          url_identifier: [],
          name: [],
          cover_image: [],
          about: []
        }
      }
    }
  }
}
</script>
