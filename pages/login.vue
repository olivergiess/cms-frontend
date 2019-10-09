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
            cols="10"
            sm="8"
            md="4"
          >
            <LoginForm/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
  import LoginForm from '~/components/LoginForm'

  export default {
    layout: 'landing',
    components: {
      LoginForm
    }
  }
</script>
