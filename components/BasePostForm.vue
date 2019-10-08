<template>
    <v-card class="elevation-12">
      <v-toolbar
              color="primary"
              class="white--text"
              flat
      >
        <v-toolbar-title>{{ prefix }} Post</v-toolbar-title>
        <div class="flex-grow-1"></div>
      </v-toolbar>

      <loading-bar :loading="loading"/>

      <v-card-text>
        <v-form
                v-model="form.valid"
                v-on:submit.prevent="submit"
                ref="form"
        >
          <v-text-field
                  v-model="post.title"
                  :rules="rules.title"
                  :counter="30"
                  label="Title"
                  required
                  :disabled="loading"
          ></v-text-field>

          <tiptap-vuetify
                  class="mt-6 mb-6"
                  v-model="post.body"
                  :extensions="extensions"
          />

          <v-menu
                  v-model="form.date_menu"
                  :close-on-content-click="true"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                      v-model="post.publish_at"
                      label="Publish At"
                      readonly
                      v-on="on"
                      :disabled="loading"
              ></v-text-field>
            </template>
            <v-date-picker
                    v-model="post.publish_at"
                    @input="form.date_menu = false"
                    color="primary"
                    :disabled="loading"
            ></v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn
                color="primary"
                @click.prevent="submit"
                :disabled="loading"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
    import LoadingBar from '~/components/LoadingBar'
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

    import Post from '@/models/Post'

    export default {
        components: {
            LoadingBar,
            TiptapVuetify
        },
        mounted() {
        },
        props: {
            post: {
                type: Object,
                default: () => ( new Post() )
            },
        },
        data: () => {
            return {
                loading: false,
                form: {
                    valid: false,
                    date_menu: false,
                },
                rules: {
                  title: [
                    v => !!v || 'Title is required'
                  ],
                  body: [
                    v => !!v || 'Body is required'
                  ]
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
            submit() {
                if (!this.$refs.form.validate())
                    return

                this.loading = true

                this.action()
                    .then(() => {
                      this.$router.push('/protected/posts')
                    }).finally(() => {
                      this.loading = false
                    })
            }
        }
    }
</script>
