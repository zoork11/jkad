<template>
  <v-app>
    <v-app-bar app hide-on-scroll :color="appBarColor">
      <template v-slot:extension>
        <v-tabs centered :value="route">
          <v-tab href=/>blog</v-tab>
          <v-tab href=/whoami>whoami</v-tab>
          <v-tab href=/contact>contact</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app padless fixed>
      <v-card tile width="100%" height="50px" color="grey darken-3">
        <v-card-text class="pa-2 d-flex align-center justify-center">
          &copy; just knows about debugging
          <v-btn icon href="https://github.com/zoork11" target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon href="https://social.tchncs.de/@zoork" target="_blank">
            <v-icon>mdi-mastodon</v-icon>
          </v-btn>
          <v-btn icon href="https://app.hackthebox.com/profile/283872" target="_blank">
            <v-icon>mdi-cube-outline</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      route: this.$route.path,
      appBarColor: "transparent",
     };
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      if(window.scrollY < 100)
      {
        this.appBarColor="transparent"
      }
      else
      {
        this.appBarColor="grey darken-3"
      }
      console.log(this.scrollPosition)
  }
}
};
</script>

<style>
#app {
  background: url('assets/bg1.png') no-repeat center center fixed !important;
  background-size: cover;
}
</style>
