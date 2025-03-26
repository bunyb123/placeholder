<template>
    <div>
        <!-- (new) set page title from example-route.js-->
        <h1>{{ pageTitle }}</h1>
        <!-- component magically becomes a custom tag! -->
        <PostListElement
            v-for="(post, index) in posts"
            :key="index"
            :title="post.title"
            :content="post.content"
            style="margin: 10px;"
        />
        <!-- 
            v-for means dynamically make a component for each post
            and if "posts" changes, it will automatically update :) 
            think of it like an html for-loop that is re-run whenever we change "posts"
        -->
        <!--
            as u can see we also bind variables here post.title and post.content 
        -->
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
// @ is an alias to "/src"!!
import PostListElement from '@/components/PostListElement.vue';
import example from '@/api/example-route';


const posts = ref([
    {title: "Anonymous", content: "default post, didnt get backend one yet :("},
]);
//                      VVV this is the default value, it is to be overwritten once example getTitle request give us the title
const pageTitle = ref('backend didnt give us title yet :(');
//                ^^^ this is a reactive variable, accessed and updated with .value

//        VVVVV needed to be able to use await
onMounted(async () => {
  pageTitle.value = await example.getTitle(); // <= we update the title here with the result of the request
  //                ^^^^^ await means we wait for the request to finish before we update the title
});
</script>
<style scoped>

</style>