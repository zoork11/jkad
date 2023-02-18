<template>
  <v-container>
    <v-row justify="center">
      <v-card color="transparent" max-width="1000" width="100%">
        <v-img height="110" src="../assets/header.png" cover class="text-white">
        <v-card-title>blog</v-card-title>
        <v-card-subtitle>does anyone care</v-card-subtitle>
        </v-img>
        <v-divider></v-divider>
        <section v-for="post in posts" :key="post">
          <v-card max-width="1000" width="100%" color="transparent">
          <v-card-actions>
            <v-btn text max-width="1000" width="100%" v-bind:href="`/post/${post.default.id}`">
              <span class="text-wrap">
                {{post.default.title}}
                <v-icon>mdi-chevron-right</v-icon>
              </span>
            </v-btn>
          </v-card-actions>
          </v-card>
        </section>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import getPosts from '../getPosts'
export default {
  name: 'FunBlog',
  data() {
    return {
      posts: getPosts.getPostsFromFolder()
     };
  }
}
</script>

<style>
.v-btn > span {
  width: 100%;
  text-align: center !important;
}
</style>
