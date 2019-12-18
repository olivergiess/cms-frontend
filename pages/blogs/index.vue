<template>
  <app-card>
    <template v-slot:toolbar>
      <v-toolbar-title>
        Blogs
      </v-toolbar-title>

      <div class="flex-grow-1" />

      <v-btn @click.prevent="create" class="white--text" tile outlined>
        Add
      </v-btn>
    </template>

    <v-data-table :headers="headers" :items="blogs" :items-per-page="15">
      <template v-slot:item.action="{ item }">
        <v-icon @click="edit(item.id)" class="mr-2" small>
          mdi-square-edit-outline
        </v-icon>
      </template>
    </v-data-table>
  </app-card>
</template>

<script>
import AppCard from '~/components/ui/AppCard'
import Blog from '~/scripts/models/Blog'

export default {
  layout: 'admin',
  components: {
    AppCard
  },
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
