<template>
    <div>
        <Banner :background_image_src="post.cover_image"/>

        <Avatar :user="post.user"/>

        <v-container>
            <v-row
                align="start"
                justify="center"
            >
                <v-col
                    cols="6"
                >
                    <h1
                        class="display-3 font-weight-light text-center"
                    >
                        {{ post.title }}
                    </h1>
                </v-col>
            </v-row>
            <v-row
                align="start"
                justify="center"
            >
                <v-col cols="auto">
                    <h3
                        class="overline text-uppercase grey--text"
                    >
                        PUBLISHED / {{ post.formatted_publish_at }}
                    </h3>
                    <h3
                        class="overline text-uppercase grey--text"
                    >
                        EDITED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ {{ post.formatted_updated_at }}
                    </h3>
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

    import {showPublishedPost} from '@/mixins/compositions/Posts';

    export default {
        auth: false,
        layout: '_slug',
        components: {
            Avatar,
            Banner,
            ViewPost,
        },
        setup(props, context) {
            const id = context.root.$route.params.id;

            const slug = context.root.$route.params.slug;

            const post = showPublishedPost(id, () => context.root.$router.push(`/${slug}`));

            return post;
        },
    }
</script>

