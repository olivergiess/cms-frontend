<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="10">
        <v-card>
          <v-toolbar class="white--text" color="primary" flat>
            <v-toolbar-title>
              Posts
            </v-toolbar-title>

            <div class="flex-grow-1" />

            <v-btn @click.prevent="create" color="primary lighten-1" fab small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-toolbar>

          <v-data-table :headers="headers" :items="posts" :items-per-page="15">
            <template v-slot:item.action="{ item }">
              <v-icon @click="edit(item.id)" class="mr-2" small>
                mdi-square-edit-outline
              </v-icon>
              <v-icon @click="preview(item.id)" class="mr-2" small>
                mdi-eye
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Post from '~/models/Post'

export default {
  layout: 'admin',
  data () {
    return {
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Publish At', value: 'publish_at' },
        { text: 'Actions', value: 'action', sortable: false }
      ]
    }
  },
  computed: {
    posts () {
      return Post.all()
    }
  },
  methods: {
    preview (id) {
      this.$router.push(`/${this.$auth.user.slug}/posts/${id}`)
    },
    edit (id) {
      this.$router.push(`/posts/${id}`)
    },
    create () {
      this.$router.push(`/posts/create`)
    }
  }
}
</script>
