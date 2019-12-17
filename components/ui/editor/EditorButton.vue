<template>
  <v-btn
    @click="handleClick"
    :class="{ 'text--darken-4': active }"
    class="grey--text"
    icon
    small
  >
    <strong>
      <slot />
    </strong>
  </v-btn>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
