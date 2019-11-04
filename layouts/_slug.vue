<template>
  <v-app>
    <NavBar :user="user"/>

    <v-content>
      <nuxt/>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
    import NavBar from '@/components/layouts/blog/NavBar'
    import Footer from '@/components/layouts/core/Footer'

    import {showUserBySlug} from '@/mixins/compositions/Users'

    export default {
        setup(props, context) {
            let slug = context.root.$route.params.slug;

            let user = showUserBySlug(slug, () => context.root.$router.push('/'));

            return user;
        },
        components: {
            NavBar,
            Footer
        }
    }
</script>
