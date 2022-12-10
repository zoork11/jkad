<template>
  <v-container>
    <component v-bind:is="dynamicPost"></component>
  </v-container>
</template>

<script>
import getPosts from '../getPosts'

export default {
  name: 'ViewPost',
  computed: {
    dynamicPost() {
      var postsFromFolder = getPosts.getPostsFromFolder()
      var postName = ""
      for(const key in postsFromFolder){
        if(postsFromFolder[key].default.id == this.$route.params.id)
        {
          postName = key
          break
        }
      }
      console.log(postName)
      return () => import(`@/components/BlogPosts/${postName}`);
    },
  },
  data () {
    return {
    }
  }
}

</script>
