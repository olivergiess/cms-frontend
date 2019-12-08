<template>
  <v-text-field
    :disabled="disabled"
    :error-messages="errorMessages"
    @input="handleInput"
    v-model="value"
    :label="label"
    :type="show ? 'text' : 'password'"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="show = !show"
  />
</template>

<script>

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    errorMessages: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: 'Password'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      show: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.value)
    }
  }
}
</script>

<style scoped>
  .max-width {
    width: 100%;
  }
</style>
