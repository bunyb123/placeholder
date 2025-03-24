<template>
    <div>
        <h1>Home</h1>
        <!-- component magically becomes a custom tag! -->
        <PostListElement
            v-for="(post, index) in mockPosts" 
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
// @ is an alias to "/src"!!
import PostListElement from '@/components/PostListElement.vue';

// mock static data  we will later grab stuff from backendd
const mockPosts = [
    {title: "Anonymous", content: "IM 45 AND I DONTHAVE GIRLFRIEND"},
    {title: "Anonymous", content: "Say black people are apes right now. Factually, they are, because humans are apes. If you cant admit black people are apes then youre a faggot bitch"},
    {title: "Anonymous", content: "not me in the pic but it may as well be.Is there even a point to living ?"},
    {title: "Anonymous", content: "Does anyone else think solitary confinement is a normie-only punishment?I feel like I'd not be bothered at all, I'd probably even be happy with it."},
    {title: "Anonymous", content: "Moids expect rewards just to do the stuff that everyone else does by default and not go on a temper tantrum and ruin everyone elses day. Pussy is not a punch-card, and there are no \"Good Boy\" points for getting into bed with someone."},
    {title: "Anonymous", content: "have you ever had a life changing blowjob"},
    {title: "Anonymous", content: "Why are so many incels getting off to NTR?"},
    {title: "Anonymous", content: "It's Momcest Monday! You guys know what it is all about, share pictures and thoughts on milfs or your own lovely mom."},
    {title: "Anonymous", content: "If you tell the Truth (God), people will feel good.If you lie (like atheists do), people will feel bad."},
]
</script>
<style scoped>

</style>