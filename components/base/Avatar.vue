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
                color="yellow darken-3"
                class="white--text"
                size="36"
                v-on="on"
            >
                {{ initials }}
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
        computed: {
            initials() {
                return ''
            }
        },
        methods: {
            logout() {
                this.$auth.logout()
            }
        }
    }
</script>
