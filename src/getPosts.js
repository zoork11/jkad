export default {
  getPostsFromFolder: function() {
    const req = require.context('@/components/BlogPosts', false, /.*\.vue$/)
    const postsFromFolder = {}
    req.keys().forEach(filename => {
      const name = filename.split('.')[1].split('/')[1]
      const comp = req(filename)
      postsFromFolder[name] = comp
    })
    return postsFromFolder 
  }
}