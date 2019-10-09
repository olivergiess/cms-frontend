<template>
  <v-content>
    <v-container>
      <v-row
        align="start"
        justify="center"
      >
        <v-col cols="7">
          <v-row
            align="start"
          >
            <v-col
              cols="6"
            >
              <Preview :post="post"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
    import Preview from '~/components/blog/Preview'
    import Published from '@/models/Published'

    export default {
        mode: 'ssr',
        layout: 'landing',
        auth: false,
        components: {
            Preview,
        },
        beforeCreate() {
            Published.$fetch({
                params: {
                    slug: this.$route.params.slug
                }
            })
        },
        computed: {
            posts() {
                return Published.all()
            }
        },
    }
</script>
