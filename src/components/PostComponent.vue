<template>
  <div class="container">
    <h1>
      Latest Posts 
    </h1>
    <!-- CREATE POST HERE  -->
    <div class="create-post">
      <label for="create-post">Say Something ..</label>
      <input placeholder="Create a Post" id="create-post" v-model="text" type="text"/>
      <button @click="createPost">Post!</button>

    </div>
    <hr>
    <p class ="error" v-if="error">
  {{error}}
    </p>
    <div class="posts-container">
      <!-- :item="post" is extra i guess  -->
      <div class="post" v-bind:key="post._id" v-for="(post,index) in posts" :item="post" :index="index" @dblclick="deletePost(post._id)">
     
      <p class="text">{{post.text}} </p>

      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService'
export default {
  methods: {
    async createPost(){
      await PostService.InsertPost(this.text);
      this.posts=await PostService.getPosts()
    },
    async deletePost(id){
      await PostService.DeletePost(id);
      this.posts=await PostService.getPosts()
    }
  },
  data () {
    return {
      posts:[],
      error:'',
      text:''
    }
  },

  async created(){
    console.log('WORKING AFTER REFRESH')
    try{ 
      this.posts=await PostService.getPosts()
      console.log(this.posts)
      
    } 
    catch(err){
      this.error=err.message;
    }
  },

  name: 'PostComponent',
}
</script>


<style scoped>


div.container {
  max-width: 800px;
  margin: 0 auto;
}
p.error{
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.post{
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb9;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;

}
div.created-at{
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}
p.text{
  font-size: 22px;
  font-weight: 700;
  margin-bottom:0px ;

}
</style>
