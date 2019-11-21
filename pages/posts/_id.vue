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
import Post from '@/mixins/models/Post'

import EditForm from '@/components/posts/EditForm'

export default {
  layout: 'admin',
  components: {
    EditForm
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    post () {
      return Post.find(this.id)
    }
  }
}
</script>
