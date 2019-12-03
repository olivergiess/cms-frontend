<template>
  <app-card :loading="loading">
    <template v-slot:toolbar>
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
    </template>

    <v-form ref="form" @submit.prevent="submit">
      <v-card-text>
        <slot />
      </v-card-text>

      <v-card-actions class="pt-0 px-4 pb-4">
        <slot name="actions">
          <v-btn :loading="loading" color="primary" tile type="submit">
            Submit
          </v-btn>
        </slot>
      </v-card-actions>
    </v-form>
  </app-card>
</template>

<script>
import AppCard from '~/components/ui/AppCard'

export default {
  components: {
    AppCard
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
