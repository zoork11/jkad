<template>
  <v-container>
    <v-card color="transparent" style="max-width: 800px;">
      <v-card-title>Contact</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form>
          <v-text-field outlined label="name" background-color="grey darken-1"/>
          <v-text-field outlined label="email" background-color="grey darken-1"/>
          <v-textarea outlined label="your message" background-color="grey darken-1"/>
          <v-btn>send</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'ContactForm',
  }
</script>
