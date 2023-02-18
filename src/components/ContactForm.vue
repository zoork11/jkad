<template>
  <v-container>
    <v-row justify="center">
      <v-card color="transparent" max-width="1000" width="100%">
        <v-img height="110" src="../assets/header.png" cover class="text-white">
        <v-card-title>contact</v-card-title>
        <v-card-subtitle>call me maybe</v-card-subtitle>
        </v-img>
        <v-divider></v-divider>
        <v-card-text>
          <v-form>
            <v-text-field outlined label="name" background-color="grey darken-1"/>
            <v-text-field outlined label="email" background-color="grey darken-1"/>
            <v-textarea readonly persistent-placeholder placeholder="I was to lazy to set this up just send a mail (admin@jkad.de) or reach out through social media :)" outlined label="your message" background-color="grey darken-1"/>
            <v-btn>send</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ContactForm',
  }
</script>
