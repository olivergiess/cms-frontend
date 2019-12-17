import { Node } from 'tiptap'
import { toggleWrap } from 'tiptap-commands'
import EditorBlockquote from '~/components/ui/editor/EditorBlockquote'

export default class Blockquote extends Node {
  get name () {
    return 'blockquote'
  }

  get schema () {
    return {
      group: 'block',
      content: 'paragraph+',
      toDOM: () => ['div', { 'data-type': this.name }, 0],
      parseDOM: [{
        tag: `div[data-type="${this.name}"]`
      }]
    }
  }

  commands ({ type }) {
    return () => toggleWrap(type)
  }

  get view () {
    return EditorBlockquote
  }
}
