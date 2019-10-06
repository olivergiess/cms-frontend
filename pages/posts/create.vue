<template>
  <v-col
    cols="12"
    sm="10"
    md="6"
  >
    <PostForm :action="'Create'" />
  </v-col>
</template>

<script>
  import PostForm from '~/components/PostForm'

  export default {
      components: {
          PostForm
      },
      data: () => {
          return {
              valid: null,
              date_menu: false,
              post: {
                  title: '',
                  body: '',
                  publish_at: ''
              }
          }
      },
      methods: {
          submit() {
              Post.$create({ data: this.post })
                  .then(() => { this.$router.push('/posts') });
          }
      }
  }
</script>
