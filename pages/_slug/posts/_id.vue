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
    import Banner from '@/components/layouts/blog/Banner'
    import ViewPost from '@/components/pages/blog/ViewPost'

    import {showPublishedPost} from '@/mixins/compositions/Posts';

    export default {
        auth: false,
        layout: 'blog',
        components: {
            Banner,
            ViewPost,
        },
        setup(props, context) {
            let id = context.root.$route.params.id;
console.log(id);
            const post = showPublishedPost(id);

            return post;
        },
    }
</script>

