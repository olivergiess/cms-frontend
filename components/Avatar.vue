<template>
    <v-menu
        transition="slide-y-transition"
        bottom
        left
        offset-y
    >
        <template
            v-slot:activator="{ on }"
        >
            <v-avatar
                size="32px"
                v-on="on"
            >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                    alt="Vuetify"
                ></v-img>
            </v-avatar>
        </template>

        <v-list>
            <v-list-item
                @click="logout"
            >
                <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        data: () => {
            return {
                items: [
                    { title: 'Log Out' }
                ]
            }
        },
        methods: {
            logout() {
                this.$auth.logout()
            }
        }
    }
</script>