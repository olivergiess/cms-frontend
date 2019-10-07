<template>
    <div>
        <editor-menu-bar
            class="texteditor__menubar theme--light grey lighten-4 ma-3 pl-2 pr-2"
            :editor="editor"
            v-slot="{ commands, isActive }"
        >
            <div>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.bold() }"
                        @click="commands.bold"
                >
                    <v-icon class="ma-1" large>mdi-format-bold</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.italic() }"
                        @click="commands.italic"
                >
                    <v-icon class="ma-1" large>mdi-format-italic</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.strike() }"
                        @click="commands.strike"
                >
                    <v-icon class="ma-1" large>mdi-format-strikethrough</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.underline() }"
                        @click="commands.underline"
                >
                    <v-icon class="ma-1" large>mdi-format-underline</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.code() }"
                        @click="commands.code"
                >
                    <v-icon class="ma-1" large>mdi-code-tags</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.paragraph() }"
                        @click="commands.paragraph"
                >
                    <v-icon class="ma-1" large>mdi-format-paragraph</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                        @click="commands.heading({ level: 1 })"
                >
                    <v-icon class="ma-1" large>mdi-format-header-1</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                        @click="commands.heading({ level: 2 })"
                >
                    <v-icon class="ma-1" large>mdi-format-header-2</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                        @click="commands.heading({ level: 3 })"
                >
                    <v-icon class="ma-1" large>mdi-format-header-3</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.bullet_list() }"
                        @click="commands.bullet_list"
                >
                    <v-icon class="ma-1" large>mdi-format-list-bulleted-square</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.ordered_list() }"
                        @click="commands.ordered_list"
                >
                    <v-icon class="ma-1" large>mdi-format-list-numbered</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        :class="{ 'is-active': isActive.blockquote() }"
                        @click="commands.blockquote"
                >
                    <v-icon class="ma-1" large>mdi-format-quote-close</v-icon>
                </button>
                <button
                        :class="{ 'is-active': isActive.code_block() }"
                        @click="commands.code_block"
                >
                    <v-icon class="ma-1" large>mdi-code-tags</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        @click="commands.horizontal_rule"
                >
                    <v-icon class="ma-1" large>mdi-minus</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        @click="commands.undo"
                >
                    <v-icon class="ma-1" large>mdi-undo</v-icon>
                </button>
                <button
                        class="mt-2 mb-2"
                        @click="commands.redo"
                >
                    <v-icon class="ma-1" large>mdi-redo</v-icon>
                </button>
            </div>
        </editor-menu-bar>

        <editor-content :editor="editor" class="texteditor__editor ma-3"/>
    </div>
</template>

<script>
    import {
        Editor,
        EditorContent,
        EditorMenuBar
    } from 'tiptap'
    import {
        Blockquote,
        CodeBlock,
        HardBreak,
        Heading,
        HorizontalRule,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Italic,
        Link,
        Strike,
        Underline,
        History,
    } from 'tiptap-extensions'

    export default {
        components: {
            EditorContent,
            EditorMenuBar
        },
        props: [
          'value'
        ],
        computed: {
            body() {
                return this.editor.getHTML()
            }
        },
        data() {
            return {
                editor: new Editor({
                    extensions: [
                        new Bold(),
                        new Italic(),
                        new Strike(),
                        new Underline(),
                        new Code(),
                        new Heading({levels: [1, 2, 3]}),
                        new ListItem(),
                        new OrderedList(),
                        new Blockquote(),
                        new CodeBlock(),
                        new HorizontalRule(),
                        new History(),

                        new BulletList(),
                    ]
                }),
            }
        },
        beforeDestroy(){
            this.editor.destroy()
        }
    }
</script>

<style>
    .is-active {
        background-color: lightgrey;
    }

    .texteditor__menubar {
        border-radius: 4px;
    }

    .texteditor__menubar button{
        border-radius: 2px;
    }

    .texteditor__editor .ProseMirror {
        margin: 12px;
    }
    .texteditor__editor .ProseMirror:focus {
        outline: none;
    }
</style>