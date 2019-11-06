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
        <EditForm :post="post"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import EditForm from '@/components/posts/EditForm'

    import {showPost} from '@/mixins/compositions/Posts';

    export default {
        layout: 'admin',
        components: {
            EditForm
        },
        setup(props, context) {
            let id = context.root.$route.params.id;

            const post = showPost(id);

            return post;
        },
    }
</script>
