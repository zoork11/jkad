<template>
  <v-container>
    <v-card color="transparent">
      <v-card-title>
        {{$options.title}}
      </v-card-title>
      <v-card-text>
        Please add stuff here :)
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'FirmwareUpdatePost',
    title: 'Frimware update, what can go wrong?',
    id: 0,
  }
</script>
