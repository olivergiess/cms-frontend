<template>
  <v-card tile elevation="2">
    <v-toolbar class="white--text" color="primary" flat>
      <slot name="toolbar" />
    </v-toolbar>

    <app-loading-bar v-if="loading" />

    <slot />
  </v-card>
</template>

<script>
import AppLoadingBar from '~/components/ui/AppLoadingBar'

export default {
  components: {
    AppLoadingBar
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
