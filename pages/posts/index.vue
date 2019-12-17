<template>
  <app-card>
    <template v-slot:toolbar>
      <v-toolbar-title>
        Posts
      </v-toolbar-title>

      <div class="flex-grow-1" />

      <v-btn @click.prevent="create" color="primary lighten-1" fab small>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-data-table :headers="headers" :items="posts" :items-per-page="15">
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
import Post from '~/scripts/models/Post'

export default {
  layout: 'admin',
  components: {
    AppCard
  },
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
    edit (id) {
      this.$router.push(`/posts/${id}`)
    },
    create () {
      this.$router.push(`/posts/create`)
    }
  }
}
</script>
