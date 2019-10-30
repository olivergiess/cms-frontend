<template>
  <v-col
    cols="12"
    sm="10"
    md="8"
  >
    <EditForm :post="post"/>
  </v-col>
</template>

<script>
    import EditForm from '@/components/pages/admin/posts/EditForm'
    import {retrievePost} from "@/libraries/Posts";

    export default {
        layout: 'admin',
        setup(props, context) {
            let id = context.root.$route.params.id;

            const post = retrievePost(id);

            return post;
        },
        components: {
            EditForm
        },
    }
</script>
