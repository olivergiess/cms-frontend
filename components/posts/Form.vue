<template>
  <Form
    :title="`${prefix} Post`"
    :submit="submit"
    :loading="loading"
  >
    <v-select
      :items="blogs"
      item-value="id"
      item-text="name"
      :disabled="loading"
      :error-messages="form.errors.blog_id"
      @input="form.errors.blog_id = ''"
      v-model="form.data.blog_id"
      label="Blog"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.title"
      @input="form.errors.title = ''"
      v-model="form.data.title"
      label="Title"
    />

    <v-text-field
      :disabled="loading"
      :error-messages="form.errors.cover_image"
      @input="form.errors.cover_image = ''"
      v-model="form.data.cover_image"
      label="Cover Image"
    />

    <TextEditor
      :errorMessages="form.errors.body"
      @input="form.errors.body = []"
      v-model="form.data.body"
    />

    <v-menu
      :close-on-content-click="false"
      v-model="form.field.publish_at.date_menu"
      min-width="290px"
      offset-y
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :disabled="loading"
          :error-messages="form.errors.publish_at"
          v-model="form.data.publish_at"
          v-on="on"
          label="Publish At"
          readonly
        />
      </template>
      <v-date-picker
        :disabled="loading"
        @input="publish_at_change()"
        v-model="form.data.publish_at"
        color="primary"
      />
    </v-menu>
  </Form>
</template>

<script>
import BaseForm from '~/components/ui/forms/BaseForm'
import TextEditor from '~/components/ui/forms/TextEditor'
import Post from '~/models/Post'
import Blog from '~/models/Blog'

export default {
  extends: BaseForm,
  components: {
    TextEditor
  },
  props: {
    post: {
      type: Post,
      default: () => new Post()
    }
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      prefix: '',
      redirectTo: '/posts',
      form: {
        field: {
          publish_at: {
            date_menu: false
          }
        },
        data: {
          title: this.post.title,
          cover_image: this.post.cover_image,
          body: this.post.body,
          publish_at: this.post.publish_at
        },
        errors: {
          title: [],
          body: [],
          publish_at: []
        }
      }
    }
  },
  computed: {
    blogs () {
      return Blog.all()
    }
  },
  methods: {
    publish_at_change () {
      this.form.field.publish_at.date_menu = false
      this.form.errors.publish_at = ''
    }
  }
}
</script>
