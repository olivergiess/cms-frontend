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

        <div class="flex-grow-1" />

        <v-btn
                color="yellow darken-2"
                class="white--text"
                @click.prevent="create"
        >
          Create
        </v-btn>
      </v-toolbar>

      <loading-bar :loading="loading" />

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
  import Post from '@/models/Post'

    export default {
      components: {
        LoadingBar
      },
      computed: {
          posts() {
              return Post.all();
          },
      },
      mounted() {
          Post.$fetch().then(() => {
              this.loading = false
          });
      },
      data() {
          return {
              loading: true,
              headers: [
                  {text: 'Title', value: 'title'},
                  {text: 'Publish At', value: 'publish_at'},
                  {text: 'Actions', value: 'action', sortable: false},
              ]
          }
      },
      methods: {
          edit(item) {
              this.$router.push('/posts/' + item.$id)
          },
          create() {
              this.$router.push('/posts/create')
          }
      }
    }
</script>
