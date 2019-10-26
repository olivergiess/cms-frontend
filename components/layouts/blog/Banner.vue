<template>
    <v-container
        fluid
        class="pt-0 pr-0 pl-0"
    >
        <v-img
            :src="background_image_src"
            height="20vh"
            style="opacity: 0.8;"
        ></v-img>
    </v-container>
</template>

<script>
    export default {
        props: [
            'background_image_src'
        ]
    }
</script>
