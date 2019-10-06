<template>
  <v-col
          cols="12"
          sm="12"
          md="10"
  >
    Welcome, you're on the landing page.
  </v-col>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import VuetifyLogo from '~/components/VuetifyLogo.vue'

    export default {
      components: {
        Logo,
        VuetifyLogo
      }
    }
</script>
