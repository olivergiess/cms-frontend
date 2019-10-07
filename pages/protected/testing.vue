<template>
    <v-card>
        <TextEditor v-model=""/>
    </v-card>
</template>

<script>
    import TextEditor from '~/components/TextEditor'

    export default {
        components: {
            TextEditor,
        }
    }
</script>