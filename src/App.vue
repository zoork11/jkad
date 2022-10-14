<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-container>
        hi
      </v-container>
    </v-app-bar>

    <v-main>
      <FunBlog/>
    </v-main>
  </v-app>
</template>

<script>
import FunBlog from './components/FunBlog';

export default {
  name: 'App',

  components: {
    FunBlog,
  },

  data: () => ({
    //
  }),
};
</script>
