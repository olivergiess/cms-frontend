<template>
    <div>
        <Banner
            background_image_src="http://www.schintudesign.com/envato/exodus/assets/img/backs/back03.jpg"
        />

        <Header
            title="About"
            sub_title=""
        />

        <v-container>
            <v-row
                align="start"
                justify="center"
            >
                <v-col
                    v-for="post in posts"
                    :key="post.id"
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
    import Banner from '@/components/layouts/_slug/Banner'
    import Header from '@/components/layouts/_slug/Header'
    import PreviewPost from '@/components/pages/blog/PreviewPost'

    import { allPublishedPosts } from '@/mixins/compositions/Posts';

    export default {
        auth: false,
        layout: 'blog',
        components: {
            Banner,
            Header,
            PreviewPost,
        },
        setup(props, context) {
            let slug = context.root.$route.params.slug;

            const post = allPublishedPosts(slug);

            return post;
        },
    }
</script>
