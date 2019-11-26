<template>
  <v-input :error-messages="errorMessages" class="pt-2 mt-1">
    <tiptap-vuetify
      :extensions="extensions"
      @input="handleInput"
      v-model="value"
      class="max-width"
    />
  </v-input>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from 'tiptap-vuetify'

export default {
  components: {
    TiptapVuetify
  },
  props: {
    errorMessages: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [Heading, {
          options: {
            levels: [1, 2, 3]
          }
        }],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak
      ]
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
