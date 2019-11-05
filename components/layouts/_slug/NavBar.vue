<template>
  <v-app-bar
    app
    fixed
    :elevate-on-scroll="true"
  >
    <v-container
      fill-height
    >
      <v-row
        no-gutters
        justify="center"
        align="center"
      >
        <v-col
          cols="11"
          lg="9"
        >
          <v-toolbar
            flat
          >
            <v-toolbar-title v-text="user.first_name"/>

            <div class="flex-grow-1"/>

            <v-toolbar-items>
              <v-btn
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                text
              >
                {{item.title}}
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
    import User from '@/store/models/User'

    export default {
        props: {
            user: {
                type: User,
                default: () => new User,
            }
        },
        computed: {
            items() {
                let items = [
                    {
                        title: 'Home',
                        to: '/'
                    }
                ]

                if (this.user.slug)
                    items.push({
                        title: 'Blog',
                        to: '/' + this.user.slug
                    });

                if (this.$auth.loggedIn)
                    items.push({
                        title: 'Manage',
                        to: '/admin'
                    });
                else {
                    items.push({
                        title: 'Login',
                        to: '/login'
                    });
                }

                return items
            }
        }
    }
</script>
