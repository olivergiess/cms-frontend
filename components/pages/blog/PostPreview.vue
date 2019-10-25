<template>
  <v-card
    flat
    tile
  >
    <v-hover
      v-slot:default="{ hover }"
      open-delay="30"
      close-delay="30"
    >
      <v-img
        :class="{ 'on-hover' : hover }"
        src="http://olivergiess.com/dynamic/images/full/5b811292ed9bf.jpeg"
        height="20vh"
      >
        <v-card-title>Read</v-card-title>
      </v-img>
    </v-hover>
    <v-card-title
      class="pl-0 title"
    >
      Top 10 Australian beaches
    </v-card-title>

    <v-card-text
      class="pl-0 caption text-uppercase"
    >
      By: Oliver Giess / 25th October 2019
    </v-card-text>
  </v-card>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .on-hover{
    opacity: 0.5;
  }
</style>
