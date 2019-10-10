<template>
    <v-col
            cols="12"
            sm="10"
            md="8"
    >
        <EditForm/>
    </v-col>
</template>

<script>
    import EditForm from '~/components/user/EditForm'

    export default {
        layout: 'admin',
        components: {
            EditForm
        }
    }
</script>
