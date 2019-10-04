<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="12"
          md="10"
        >
          <v-card>
            <v-toolbar
              color="purple"
              flat
            >
              <v-toolbar-title>
                Posts
              </v-toolbar-title>
              <div class="flex-grow-1"></div>

                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
            </v-toolbar>
            <v-data-table
              :loading="loading"
              :headers="headers"
              :items="posts"
              :items-per-page="15"
            >
              <template v-slot:item.action="{ item }">
                <v-icon
                  small
                  class="mr-2"
                  @click="edit(item)"
                >
                  mdi-square-edit-outline
                </v-icon>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
    import Post from '@/models/Post'

    export default {
        computed: {
            posts() {
                return Post.all();
            },
        },
        mounted() {
            Post.$fetch().then(() => {
                this.loading = false
            });
        },
        data() {
            return {
                loading: true,
                headers: [
                    {text: 'Title', value: 'title'},
                    {text: 'Publish At', value: 'publish_at'},
                    {text: 'Actions', value: 'action', sortable: false},
                ]
            }
        },
        methods: {
            edit(item) {
                this.$router.push('/posts/' + item.$id)
            }
        }
    }
</script>
