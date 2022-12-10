<template>
  <v-container>
    <v-card color="transparent">
      <v-card-title>
        {{$options.title}}
      </v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'SampleBlogPost',
    title: 'The Sample Post',
    id: 0,
  }
</script>
