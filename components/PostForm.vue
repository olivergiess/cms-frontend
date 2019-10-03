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
</template>

<script>
    import Post from '@/models/Post'

    export default {
        computed: {
          action () {
              if(this.postId == null) {
                  return 'Create'
              } else {
                  return 'Edit'
              }
          }
        },
        mounted() {
            if(this.postId != null) {
                this.post = Post.find(this.postId)
            }
        },
        props: {
            postId: String,
        },
        methods: {
            submit() {
                if(this.valid) {
                    if(this.postId == null) {
                        Post.$create({data: this.post});
                    } else {
                        Post.$update({
                            params: {
                                id: this.postId
                            }
                        },
                        {
                            data: this.post
                        });
                    }
                }
            }
        },
        data: () => {
            return {
                valid: null,
                publish_at_menu: false,
                post: {
                    title: '',
                    body: '',
                    publish_at: '',
                }
            }
        }
    }
</script>