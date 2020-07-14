<template>
  <div>
      <span></span>
      <span>{{getNumberOfPages}}</span>
    <div class="posts" v-for="post in allPosts" :key="post.id">
        <h2>{{post.title}}</h2>
        <span>{{post.body}}</span>
        
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    name:'AllPost',
    
    
methods:mapActions(['getPost']),


computed:mapGetters(['allPosts','getNumberOfPages']),
async mounted(){
 this.getPost()
}
}

</script>

<style scoped>
</style>

<style scoped>
 .posts{
     width: 400px;
     border: 2px solid coral;
     margin-bottom: 1%;
 }

</style>