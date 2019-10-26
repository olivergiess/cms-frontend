<template>
  <v-hover
    v-slot:default="{ hover }"
    open-delay="30"
    close-delay="30"
  >
    <v-card
      flat
      tile
      color="transparent"
      :nuxt-link="true"
      :to="`/${post.user.slug}/posts/${post.id}`"
    >
      <v-img
        :class="{ 'on-hover' : hover }"
        src="http://olivergiess.com/dynamic/images/full/5b811292ed9bf.jpeg"
        height="25vh"
      >
        <v-fade-transition>

          <div
            v-if="hover"
            class="d-flex transition-slow-in-fast-out darken-2 v-card--reveal headline white--text"
          >
            Read
          </div>
        </v-fade-transition>
      </v-img>
      <v-card-title
        class="pl-0 title"
      >
        {{ post.title }}
      </v-card-title>
      <v-card-text
        class="pl-0 caption text-uppercase"
      >
        By: <strong>{{ author }}</strong>&nbsp&nbsp/&nbsp&nbsp<span class="light-green--text text--darken--5">{{ formated_publish_at }}</span>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
  import moment from 'moment'

  import Post from '@/models/Post'

    export default {
      props: {
        post: {
          default: () => { return new Post }
        }
      },
      computed: {
        author() {
          return this.post.user.first_name + ' ' + this.post.user.last_name;
        },
        formated_publish_at() {
          return moment(this.post.publish_at).format('Do MMMM YYYY')
        }
      }

    }
</script>

<style scoped>
  .on-hover {
    opacity: 0.5;
  }

  .v-card--reveal {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
</style>
