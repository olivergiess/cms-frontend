<template>
  <v-content>
    <v-container>
      <v-row
        align="start"
        justify="center"
      >
        <v-col cols="7">
          Hello
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
    export default {
        mode: 'ssr',
        layout: 'landing',
        auth: false,
    }
</script>
