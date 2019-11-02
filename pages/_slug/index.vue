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
    import Banner from '@/components/layouts/blog/Banner'
    import Header from '@/components/layouts/blog/Header'
    import PreviewPost from '@/components/pages/blog/PreviewPost'

    import {allPublishedPosts} from '@/mixins/compositions/Posts';

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
