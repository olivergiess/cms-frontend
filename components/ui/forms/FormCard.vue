<template>
  <v-card class="elevation-12">
    <v-toolbar class="white--text" color="primary" flat>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>

    <loading-bar v-if="loading" />

    <v-card-text>
      <v-form ref="form" v-on:submit.prevent="submit">
        <slot />
      </v-form>
    </v-card-text>

    <v-card-actions>
      <slot name="actions">
        <v-btn @click.prevent="submit" :loading="loading" color="primary lighten-1">
          Submit
        </v-btn>
      </slot>
    </v-card-actions>
  </v-card>
</template>

<script>
import LoadingBar from '~/components/ui/LoadingBar'

export default {
  components: {
    LoadingBar
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    submit: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
