<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="10"
        md="8"
      >
        <EditForm :loading="loading" :post="post"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import EditForm from '@/components/posts/EditForm'

    import {showPostByUser} from '@/mixins/composables/UserPosts';

    export default {
        layout: 'admin',
        components: {
            EditForm
        },
        setup(props, context) {
            const id = context.root.$route.params.id;
            const user_id = context.root.$auth.user.id;

            const post = showPostByUser(user_id);

            return post(id);
        },
    }
</script>
