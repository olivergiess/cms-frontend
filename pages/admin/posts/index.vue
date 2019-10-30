<template>
  <v-col
    cols="12"
    sm="12"
    md="10"
  >
    <v-card>
      <v-toolbar
        color="primary"
        class="white--text"
        flat
      >
        <v-toolbar-title>
          Posts
        </v-toolbar-title>

        <div class="flex-grow-1"/>

        <v-btn
          fab
          small
          color="primary lighten-1"
          @click.prevent="create"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>

      <loading-bar
        v-if="postsLoading"
      />

      <v-data-table
        :headers="headers"
        :items="posts"
        :items-per-page="15"
      >
        <template v-slot:item.action="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="edit(item)"
          >
            mdi-square-edit-outline
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-col>
</template>

<script>
    import LoadingBar from '~/components/LoadingBar'
    import {retrievePosts} from '@/libraries/Posts';

    export default {
        layout: 'admin',
        components: {
            LoadingBar
        },
        setup() {
            const {postsLoading, posts} = retrievePosts();

            return {postsLoading, posts};
        },
        computed: {
          test() {
              console.log(postsLoading);

              return postsLoading;
          }
        },
        data() {
            return {
                headers: [
                    {text: 'Title', value: 'title'},
                    {text: 'Publish At', value: 'publish_at'},
                    {text: 'Actions', value: 'action', sortable: false},
                ]
            }
        },
        methods: {
            edit(item) {
                this.$router.push('/admin/posts/' + item.$id)
            },
            create() {
                this.$router.push('/admin/posts/create')
            }
        }
    }
</script>
