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
  import Post from '@/models/Post'

    export default {
        data: () => {
            return {
                items: [
                    { title: 'Log Out' }
                ]
            }
        },
        computed: {
            user() {
              return this.$auth.user
            },
            initials() {
                let initials = this.user.first_name[0] + this.user.last_name[0]

                return initials
            }
        },
        methods: {
            logout() {
                this.$auth.logout()
                  .then(() => {
                      Post.deleteAll()
                  })
            }
        }
    }
</script>
