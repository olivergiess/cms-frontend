<template>
    <v-col
      cols="12"
      sm="10"
      md="6"
    >
      <v-card class="elevation-12">
        <v-toolbar
          color="primary"
          class="white--text"
          flat
        >
          <v-toolbar-title>Edit Post</v-toolbar-title>
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

            <v-textarea
              v-model="post.body"
              :rules="rules.body"
              label="Body"
              required
              auto-grow
              :disabled="loading"
            ></v-textarea>

            <v-menu
              v-model="publish_at_menu"
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
                @input="publish_at_menu = false"
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
    </v-col>
</template>

<script>
  import Post from '@/models/Post'
  import LoadingBar from '~/components/LoadingBar'

  export default {
      components: {
          LoadingBar
      },
      mounted() {
          Post.$get({
              params: {
                  id: this.$route.params.id
              }})
              .finally(() => { this.loading = false })
      },
      computed: {
          post() {
              let post = Post.find(this.$route.params.id)

              return post != null
                  ? post
                  : new Post()
          }
      },
      data: () => {
          return {
              loading: true,
              form: {
                  valid: false,
              },
              rules: {
                  title: [
                      v => !!v || 'Title is required'
                  ],
                  body: [
                      v => !!v || 'Body is required'
                  ]
              }
          }
      },
      methods: {
          submit() {
              if(!this.$refs.form.validate())
                  return

              this.loading = true;

              Post.$update({
                  params: { id: this.post.id },
                  data: this.post
              })
                  .then(() => {
                      this.$router.push('/posts')
                  })
                  .finally(() => {
                      this.loading = false;
                  });
          }
      }
  }
</script>
