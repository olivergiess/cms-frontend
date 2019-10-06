<template>
    <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar">
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.bold() }"
                        @click="commands.bold"
                >
                    <v-icon class="mr-1">mdi-format-bold</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.italic() }"
                        @click="commands.italic"
                >
                    <v-icon class="mr-1">mdi-format-italic</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.strike() }"
                        @click="commands.strike"
                >
                    <v-icon class="mr-1">mdi-format-strikethrough</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.underline() }"
                        @click="commands.underline"
                >
                    <v-icon class="mr-1">mdi-format-underline</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.code() }"
                        @click="commands.code"
                >
                    <v-icon class="mr-1">mdi-code-tags</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.paragraph() }"
                        @click="commands.paragraph"
                >
                    <v-icon class="mr-1">mdi-format-paragraph</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                        @click="commands.heading({ level: 1 })"
                >
                    <v-icon class="mr-1">mdi-format-header-1</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                        @click="commands.heading({ level: 2 })"
                >
                    <v-icon class="mr-1">mdi-format-header-2</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                        @click="commands.heading({ level: 3 })"
                >
                    <v-icon class="mr-1">mdi-format-header-3</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.bullet_list() }"
                        @click="commands.bullet_list"
                >
                    <v-icon class="mr-1">mdi-format-list-bulleted-square</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.ordered_list() }"
                        @click="commands.ordered_list"
                >
                    <v-icon class="mr-1">mdi-format-list-numbered</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.blockquote() }"
                        @click="commands.blockquote"
                >
                    <v-icon class="mr-1">mdi-format-quote-close</v-icon>
                </button>
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.code_block() }"
                        @click="commands.code_block"
                >
                    <v-icon class="mr-1">mdi-code-tags</v-icon>
                </button>
                <button
                        class="menubar__button"
                        @click="commands.horizontal_rule"
                >
                    <v-icon class="mr-1">mdi-minus</v-icon>
                </button>
                <button
                        class="menubar__button"
                        @click="commands.undo"
                >
                    <v-icon class="mr-1">mdi-undo</v-icon>
                </button>
                <button
                        class="menubar__button"
                        @click="commands.redo"
                >
                    <v-icon class="mr-1">mdi-redo</v-icon>
                </button>
            </div>
        </editor-menu-bar>

        <editor-content class="editor__content" :editor="editor"/>
        <button
                @click.prevent="temp"
        >
            Hello
        </button>
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
        },
        methods: {
            temp() {
                console.log(this.editor.getHTML());
            }
        }
    }
</script>

<style>
    .is-active {
        background-color: black;
    }
</style>