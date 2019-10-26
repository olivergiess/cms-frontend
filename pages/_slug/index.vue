<template>
    <div>
        <Banner
            background_image_src="http://www.schintudesign.com/envato/exodus/assets/img/backs/back03.jpg"
        />

        <Header
            title="The Blog"
            sub_title="The Latest From The Blog"
        />

        <v-container>
            <v-row
                align="start"
                justify="center"
            >
                <v-col
                    v-for="post in posts"
                    cols="12"
                    md="5"
                >
                    <PreviewPost :post="post"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    import User from '@/models/User'
    import Post from '@/models/Post'

    import Banner from '@/components/layouts/blog/Banner'
    import Header from '@/components/layouts/blog/Header'
    import PreviewPost from '@/components/pages/blog/PreviewPost'

    export default {
        auth: false,
        layout: 'blog',
        components: {
            Banner,
            Header,
            PreviewPost,
        },
        mounted() {
            this.$store.commit('currentSlug/set', this.$route.params.slug);

            User.api().fetchWithPublished(this.slug);
        },
        computed: {
            ...mapGetters({
                slug: 'currentSlug/get',
            }),
            posts() {
                return Post
                    .query()
                    .where((post) => {
                        return Date.parse(post.publish_at) < Date.now();
                    })
                    .with('user', (query) => {
                        query.where('slug', this.slug);
                    })
                    .all();
            }
        }
    }
</script>
