<template>
  <v-container>
    <v-row justify="center">
      <v-card color="transparent" max-width="1000" width="100%">
        <v-card-title>
          {{$options.title}}
        </v-card-title>
        <v-card-text>
          Please add stuff here :)
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FirmwareUpdatePost',
    title: 'Updating software can be tricky',
    id: 0,
  }
</script>
