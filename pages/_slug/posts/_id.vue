<template>
    <div>
        <Banner
            background_image_src="http://www.schintudesign.com/envato/exodus/assets/img/backs/back03.jpg"
        />

        <v-container>
            <v-row
                align="start"
                justify="center"
            >
                <v-col
                    cols="6"
                >
                    <h1
                        class="display-3 text-center"
                    >
                        {{ post.title }}
                    </h1>
                </v-col>
            </v-row>
            <v-row
                align="start"
                justify="center"
            >
                <v-col
                    cols="8"
                >
                    <ViewPost :html="post.body"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import Post from '@/models/Post'

    import Banner from '@/components/layouts/blog/Banner'
    import ViewPost from '@/components/pages/blog/ViewPost'

    export default {
        auth: false,
        layout: 'blog',
        components: {
            Banner,
            ViewPost,
        },
        mounted() {
            this.$store.commit('currentSlug/set', this.$route.params.slug);

            Post.api().fetchPublished(this.id);
        },
        computed: {
            id() {
                return this.$route.params.id;
            },
            post() {
                let post = Post.find(this.id);

                return post
                    ? post
                    : new Post;
            }
        }
    }
</script>

