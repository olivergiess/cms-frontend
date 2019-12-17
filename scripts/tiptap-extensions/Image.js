import { Image } from 'tiptap-extensions'
import EditorImage from '~/components/ui/editor/EditorImage'

export default class MyImage extends Image {
  get schema () {
    return {
      attrs: {
        src: {},
        alt: {
          default: null
        },
        aspectRatio: {
          default: 21 / 9
        },
        position: {
          default: {
            x: 50,
            y: 50
          }
        }
      },
      group: 'block',
      draggable: true,
      parseDOM: [
        {
          tag: 'img[src]',
          getAttrs: dom => ({
            src: dom.getAttribute('src')
          })
        }
      ],
      toDOM: node => ['img', node.attrs]
    }
  }

  get view () {
    return EditorImage
  }
}
