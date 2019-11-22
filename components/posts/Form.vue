<template>
  <v-card class="elevation-12">
    <v-toolbar class="white--text" color="primary" flat>
      <v-toolbar-title>{{ prefix }} Post</v-toolbar-title>
    </v-toolbar>

    <loading-bar v-if="loading" />

    <v-card-text>
      <v-form ref="form" v-on:submit.prevent="submit">
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

        <v-input :error-messages="form.errors.body" class="pt-2 mt-1">
          <tiptap-vuetify
            :extensions="extensions"
            @input="form.errors.body = ''"
            v-model="form.data.body"
            class="max-width"
          />
        </v-input>

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
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn @click.prevent="submit" :loading="loading" color="primary lighten-1">
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from 'tiptap-vuetify'
import LoadingBar from '~/components/ui/LoadingBar'
import Post from '~/models/Post'

export default {
  components: {
    TiptapVuetify,
    LoadingBar
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    post: {
      type: Post,
      default: () => new Post()
    }
  },
  data: () => {
    return {
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
          title: '',
          body: '',
          publish_at: ''
        }
      },
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [Heading, {
          options: {
            levels: [1, 2, 3]
          }
        }],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak
      ]
    }
  },
  methods: {
    publish_at_change () {
      this.form.field.publish_at.date_menu = false
      this.form.errors.publish_at = ''
    },
    submit () {
      if (!this.$refs.form.validate()) {
        return
      }

      this.loading = true

      this.action()
        .then(() => {
          this.$router.push('/posts')
        })
        .catch((error) => {
          const errors = error.response.data.errors

          for (const field in this.form.errors) {
            if (errors[field] !== undefined) {
              this.form.errors[field] = errors[field]
            }
          }
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
  .max-width {
    width: 100%;
  }
</style>
