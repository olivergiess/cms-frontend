<template>
  <v-card>
    <v-card-title>
      {{ post.title }}
    </v-card-title>

    <v-card-text v-html="post.body"/>
  </v-card>
</template>

<script>
  import Published from '@/models/Published'

  export default {
    props: {
        post: {
            type: Published,
            default: () => ( new Published )
        }
    }
  }
</script>
