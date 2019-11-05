<template>
    <v-card class="elevation-12">
        <v-toolbar
                color="primary"
                class="white--text"
                flat
        >
            <v-toolbar-title>{{ prefix }} Post</v-toolbar-title>
        </v-toolbar>

        <loading-bar
                v-if="loading"
        />

        <v-card-text>
            <v-form
                    v-on:submit.prevent="submit"
                    ref="form"
            >
                <v-text-field
                        label="Title"
                        v-model="form.data.title"
                        @input="form.errors.title = ''"
                        :error-messages="form.errors.title"
                        :disabled="loading"
                />

              <v-text-field
                        label="Cover Image"
                        v-model="form.data.cover_image"
                        @input="form.errors.cover_image = ''"
                        :error-messages="form.errors.cover_image"
                        :disabled="loading"
                />

                <v-input
                        class="pt-2 mt-1"
                        :error-messages="form.errors.body"
                >
                    <tiptap-vuetify
                            :extensions="extensions"
                            v-model="form.data.body"
                            @input="form.errors.body = ''"
                            class="max-width"
                    />
                </v-input>

                <v-menu
                        v-model="form.field.publish_at.date_menu"
                        :close-on-content-click="true"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                label="Publish At"
                                v-on="on"
                                v-model="form.data.publish_at"
                                :error-messages="form.errors.publish_at"
                                :disabled="loading"
                                readonly
                        />
                    </template>
                    <v-date-picker
                            v-model="form.data.publish_at"
                            @input="publish_at_change()"
                            color="primary"
                            :disabled="loading"
                    ></v-date-picker>
                </v-menu>
            </v-form>
        </v-card-text>

        <v-card-actions>
            <v-btn
                    color="primary lighten-1"
                    @click.prevent="submit"
                    :loading="loading"
            >
                Submit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import LoadingBar from '~/components/pages/general/LoadingBar'
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

    import Post from '@/store/models/Post'

    export default {
        components: {
            LoadingBar,
            TiptapVuetify
        },
        props: {
            post: {
                type: Object,
                default: () => new Post()
            },
        },
        data: function () {
            return {
                loading: false,
                form: {
                    field: {
                        publish_at: {
                            date_menu: false,
                        }
                    },
                    data: {
                        title: this.post.title,
                        cover_image: this.post.cover_image,
                        body: this.post.body,
                        publish_at: this.post.publish_at,
                    },
                    errors: {
                        title: '',
                        body: '',
                        publish_at: '',
                    },
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
            publish_at_change() {
                this.form.field.publish_at.date_menu = false
                this.form.errors.publish_at = ''
            },
            submit() {
                if (!this.$refs.form.validate())
                    return

                this.loading = true

                this.action()
                    .then(() => {
                        this.$router.push('/admin/posts')
                    })
                    .catch((error) => {
                        let errors = error.response.data.errors;

                        for (let field in this.form.errors) {
                            if (errors[field] !== undefined) {
                                this.form.errors[field] = errors[field];
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
