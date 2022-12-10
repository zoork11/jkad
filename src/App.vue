<template>
  <v-app>
    <v-app-bar app color="transparent">
      <template v-slot:extension>
        <v-tabs centered :value="route">
          <v-tab href=/>blog</v-tab>
          <v-tab href=/whoami>whoami</v-tab>
          <v-tab href=/contact>contact</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer padless fixed color="transparent">
      <v-card tile width="100%" height="60px" color="transparent">
        <v-card-text class="d-flex align-center justify-center">
          &copy; you footer :)
          <v-btn icon href="" target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon href="" target="_blank">
            <v-icon>mdi-mastodon</v-icon>
          </v-btn>
          <v-btn icon href="" target="_blank">
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
      route: this.$route.path
     };
  }
};
</script>

<style>
#app {
  background: url('assets/bg1.png') no-repeat center center fixed !important;
  background-size: cover;
}
</style>
