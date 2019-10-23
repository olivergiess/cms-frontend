<template>
  <v-col
    cols="12"
    sm="10"
    md="8"
  >
    {{ posts }}
  </v-col>
</template>

<script>
    import User from '@/models/User'
    import Post from '@/models/Post'

    export default {
        auth: false,
        components: {},
        async mounted() {
            // let t = await User.api().fetchWithPublished(this.$route.params.slug);
            User.insertOrUpdate({
                    id: 1,
                    first_name: "Dixie",
                    last_name: "Pfannerstill",
                    email: "test@test.com",
                    slug: "test",
                    posts: [{
                        id: 1,
                        title: "Not Today",
                        body: "<p>Text<\/p>",
                        publish_at: "2019-10-08",
                        user_id: 1
                    }]
                }
            );
        },
        computed: {
            posts() {
                return User.query().where('slug', this.$route.params.slug).with('posts').get();
            }
        }
        ,
    }
</script>
