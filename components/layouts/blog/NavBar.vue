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
            lg="8"
          >
            <v-toolbar
              flat
            >
              <v-toolbar-title v-text="user.first_name"/>

              <div class="flex-grow-1"/>

              <v-toolbar-items>
                <v-btn
                  v-for="(item, i) in items"
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
    import { mapGetters } from 'vuex'

    import User from '@/models/User'

    export default {
        computed: {
            ...mapGetters({
                slug: 'currentSlug/get'
            }),
            user() {
                let user = User.query().where('slug', this.slug).first();

                return user ? user : new User();
            },
            items() {
                return [
                    {
                        title: 'Home',
                        to: '/' + this.slug
                    },
                    {
                        title: 'About',
                        to: '/' + this.slug + '/about'
                    },
                    {
                        title: 'Login',
                        to: '/'
                    },
                ]
            }
        }
    }
</script>
