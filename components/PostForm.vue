<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="purple"
      flat
    >
      <v-toolbar-title>{{ action }} Post</v-toolbar-title>
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

        <v-row>
          <v-col col="6">
            <v-menu
              v-model="date_menu"
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
                @input="date_menu = false"
                color="purple"
              ></v-date-picker>
            </v-menu>
          </v-col>


          <v-col col="6">
            <v-menu
              v-model="time_menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="publish_at_time"
                  label="Time"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="time_menu"
                v-model="publish_at_time"
                @click:minute="time_menu = false"
                color="purple"
              ></v-time-picker>
            </v-menu>
          </v-col>
        </v-row>
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
</template>

<script>
    import Post from '@/models/Post'

    export default {
        computed: {
            action() {
                if (this.post.id == null) {
                    return 'Create'
                } else {
                    return 'Edit'
                }
            }
        },
        mounted() {
            if (this.post.id != null) {
                this.post = Post.find(this.post.id)
            }
        },
        props: {
            post: {
                type: Object,
                default: () => ({id: null, title: '', body: '', publish_at: ''})
            }
        },
        methods: {
            submit() {
                if (!this.valid) {
                    return;
                }

                this.createOrUpdate();
            },
            createOrUpdate() {
                if (this.post.id == null) {
                    Post.$create({data: this.post});
                } else {
                    Post.$update({params: {id: this.post.id}}, {data: this.post});
                }
            }
        },
        data: () => {
            return {
                valid: null,
                date_menu: false,
                time_menu: false,
                publish_at_time: '',
            }
        }
    }
</script>
