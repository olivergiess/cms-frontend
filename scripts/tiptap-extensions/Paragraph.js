import { Node } from 'tiptap'
import { toggleWrap } from 'tiptap-commands'
import EditorParagraph from '~/components/ui/editor/EditorParagraph'

export default class Paragraph extends Node {
  get name () {
    return 'paragraph'
  }

  get schema () {
    return {
      content: 'inline*',
      group: 'block',
      toDOM: () => ['p', 0],
      parseDOM: [{
        tag: `p`
      }]
    }
  }

  commands ({ type }) {
    return () => toggleWrap(type)
  }

  get view () {
    return EditorParagraph
  }
}
