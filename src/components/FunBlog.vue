<template>
  <v-container>
    <v-card color="transparent">
      <v-card-title>Blog</v-card-title>
      <v-divider></v-divider>
      <section v-for="post in posts" :key="post">
        <v-card color="transparent">
        <v-card-actions>
          <v-btn text v-bind:href="`/post/${post.default.id}`">
            {{post.default.title}}
          </v-btn>

          <v-btn icon v-bind:href="`/post/${post.default.id}`">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
        </v-card>
      </section>
    </v-card>
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
