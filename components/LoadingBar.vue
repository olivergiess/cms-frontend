<template>
    <v-progress-linear
            absolute
            color="yellow darken-2"
            indeterminate
            v-if="loading"
    />
</template>

<script>
    export default {
        props: {
            loading: Boolean
        }
    }
</script>