<template>
  <v-input :error-messages="errorMessages" class="pt-2 mt-1">
    <v-card class="text-editor" tile>
      <v-card-text class="pa-2 grey lighten-4">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
          <div>
            <editor-button :active="isActive.heading({ level: 1 })" @click="commands.heading({ level: 1 })">
              H1
            </editor-button>
            <editor-button :active="isActive.heading({ level: 2 })" @click="commands.heading({ level: 2 })">
              H2
            </editor-button>
            <editor-button :active="isActive.heading({ level: 3 })" @click="commands.heading({ level: 3 })">
              H3
            </editor-button>
            <editor-button :active="isActive.paragraph()" @click="commands.paragraph">
              P
            </editor-button>
            <editor-button :active="isActive.blockquote()" @click="commands.blockquote">
              <v-icon small>
                mdi-format-quote-open
              </v-icon>
            </editor-button>
            <editor-button :active="isActive.bold()" @click="commands.bold">
              B
            </editor-button>
            <editor-button :active="isActive.italic()" @click="commands.italic">
              I
            </editor-button>
            <editor-button :active="isActive.strike()" @click="commands.strike">
              S
            </editor-button>
            <editor-button @click="showImagePrompt(commands.image)">
              <v-icon small>
                mdi-image
              </v-icon>
            </editor-button>
            <editor-button :active="isActive.bullet_list()" @click="commands.bullet_list">
              <v-icon small>
                mdi-format-list-bulleted-square
              </v-icon>
            </editor-button>
            <editor-button :active="isActive.ordered_list()" @click="commands.ordered_list">
              <v-icon small>
                mdi-format-list-numbered
              </v-icon>
            </editor-button>
          </div>
        </editor-menu-bar>
      </v-card-text>
      <v-card-text class="pa-4 black--text">
        <editor-content :editor="editor" :content="jsonValue" @input="handleInput" />
      </v-card-text>
    </v-card>
  </v-input>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Bold,
  BulletList,
  Heading,
  Italic,
  Link,
  ListItem,
  OrderedList,
  Strike,
  TrailingNode
} from 'tiptap-extensions'
import Blockquote from '~/scripts/tiptap-extensions/Blockquote.js'
import Paragraph from '~/scripts/tiptap-extensions/Paragraph.js'
import MyImage from '~/scripts/tiptap-extensions/Image.js'
import EditorButton from '~/components/ui/editor/EditorButton'

export default {
  components: {
    EditorMenuBar,
    EditorContent,
    EditorButton
  },
  props: {
    value: {
      type: [Object, String],
      default: null
    },
    errorMessages: {
      type: Array,
      default: () => []
    }
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      editor: new Editor({
        extensions: [
          new Bold(),
          new BulletList(),
          new Heading({ levels: [1, 2, 3] }),
          new Italic(),
          new Link(),
          new ListItem(),
          new OrderedList(),
          new Strike(),
          new TrailingNode({
            node: 'paragraph',
            notAfter: ['paragraph']
          }),
          // Customer Extensions
          new Blockquote(),
          new Paragraph(),
          new MyImage()
        ],
        content: JSON.parse(this.value),
        onUpdate: (e) => {
          const json = e.getJSON()

          const jsonString = JSON.stringify(json)

          this.$emit('input', jsonString)
        }
      })
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    showImagePrompt (command) {
      const src = prompt('Enter the url of your image here')

      if (src !== null) {
        command({ src })
      }
    },
    handleInput (e) {
      this.$emit('input', e)
    }
  }
}
</script>

<style>
  .text-editor {
    width: 100%;
  }
</style>
