<template>
    <div>
        <Banner
            :background_image_src="post.cover_image"
        />

        <Avatar/>

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
    import Avatar from '@/components/layouts/_slug/Avatar'
    import Banner from '@/components/layouts/_slug/Banner'
    import ViewPost from '@/components/pages/blog/ViewPost'

    import {showPost} from '@/mixins/compositions/Posts';

    export default {
        auth: false,
        layout: '_slug',
        components: {
            Avatar,
            Banner,
            ViewPost,
        },
        setup(props, context) {
            let id = context.root.$route.params.id;

            const post = showPost(id);

            return post;
        },
    }
</script>

