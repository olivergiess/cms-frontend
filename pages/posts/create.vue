<template>
  <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="10"
            md="6"
          >
            <PostForm />
          </v-col>
        </v-row>
      </v-container>
  </v-content>
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
