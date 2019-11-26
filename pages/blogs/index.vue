<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col sm="12" md="10">
        <v-card>
          <v-toolbar class="white--text" color="primary" flat>
            <v-toolbar-title>
              Blogs
            </v-toolbar-title>

            <div class="flex-grow-1" />

            <v-btn @click.prevent="create" color="primary lighten-1" fab small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-toolbar>

          <v-data-table :headers="headers" :items="blogs" :items-per-page="15">
            <template v-slot:item.action="{ item }">
              <v-icon @click="edit(item.id)" class="mr-2" small>
                mdi-square-edit-outline
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Blog from '~/models/Blog'

export default {
  layout: 'admin',
  data () {
    return {
      headers: [
        { text: 'URL Identifier', value: 'url_identifier' },
        { text: 'Name', value: 'name' },
        { text: 'Actions', value: 'action', sortable: false }
      ]
    }
  },
  computed: {
    blogs () {
      return Blog.all()
    }
  },
  methods: {
    edit (id) {
      this.$router.push(`/blogs/${id}`)
    },
    create () {
      this.$router.push(`/blogs/create`)
    }
  }
}
</script>
