<template>
  <v-snackbar :value="display" @input="handleInput" :timeout="3000" class="black--text" color="white">
    <slot />
    <v-btn @click="snackbar = false" color="primary" text>
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    display: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e)
    }
  }
}
</script>
