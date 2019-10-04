<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="10"
          md="6"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="purple"
              flat
            >
              <v-toolbar-title>Edit Post</v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
              <v-form
                v-on:submit.prevent="submit"
                ref="post-form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="post.title"
                  :counter="30"
                  label="Title"
                  required
                ></v-text-field>

                <v-textarea
                  v-model="post.body"
                  label="Body"
                  required
                  auto-grow
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
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="post.publish_at"
                    @input="publish_at_menu = false"
                    color="purple"
                  ></v-date-picker>
                </v-menu>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="purple"
                @click.prevent="submit"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import Post from '@/models/Post'

  export default {
      mounted() {
          Post.$get({params: {id: this.$route.params.id}})
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
              valid: null,
              date_menu: false,
          }
      },
      methods: {
          submit() {
              Post.$update({
                  params: { id: this.post.id },
                  data: this.post
              })
                  .then(() => { this.$router.push('/posts') });
          }
      }
  }
</script>
