<template>
  <v-img
    :src="src"
    :aspect-ratio="aspectRatio"
    :position="`${position.x}% ${position.y}%`"
    @click="dialog = !dialog"
    class="my-2"
  >
    <v-dialog v-model="dialog" width="500px">
      <app-form title="Image">
        <v-text-field v-model="alt" label="Description" />

        <v-select
          v-model="aspectRatio"
          :items="form.aspectRatios"
          :item-value="'value'"
          :item-text="'text'"
          label="Aspect Ratio"
        />

        <v-slider
          v-model="position.y"
          min="0"
          max="100"
          label="Up and Down"
        />

        <v-slider
          v-model="position.x"
          min="0"
          max="100"
          label="Left to Right"
        />
        <template v-slot:actions>
          <v-btn @click="dialog = !dialog" color="primary" tile>
            Close
          </v-btn>
          <v-spacer />
        </template>
      </app-form>
    </v-dialog>
  </v-img>
</template>

<script>
import AppForm from '~/components/ui/forms/AppForm'

export default {
  components: {
    AppForm
  },
  props: {
    node: {
      type: Object,
      default: () => {}
    },
    updateAttrs: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      dialog: false,
      form: {
        aspectRatios: [
          { value: 1 / 1, text: '1 x 1' },
          { value: 5 / 4, text: '5 x 4' },
          { value: 4 / 3, text: '4 x 3' },
          { value: 3 / 2, text: '3 x 2' },
          { value: 16 / 10, text: '16 x 10' },
          { value: 16 / 9, text: '16 x 9' },
          { value: 21 / 9, text: '21 x 9' }
        ]
      }
    }
  },
  computed: {
    src: {
      get () {
        return this.node.attrs.src
      },
      set (src) {
        this.updateAttrs({
          src
        })
      }
    },
    alt: {
      get () {
        return this.node.attrs.alt
      },
      set (alt) {
        this.updateAttrs({
          alt
        })
      }
    },
    aspectRatio: {
      get () {
        return this.node.attrs.aspectRatio
      },
      set (aspectRatio) {
        this.updateAttrs({
          aspectRatio
        })
      }
    },
    position: {
      get () {
        return this.node.attrs.position
      },
      set (position) {
        this.updateAttrs({
          position
        })
      }
    }
  }
}
</script>
