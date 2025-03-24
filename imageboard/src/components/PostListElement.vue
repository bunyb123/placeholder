<template>
<div class="post-list-element">
    <h2>
        <!-- values are inserted dynamically into HTML with {{ valueName }}-->
        {{ 
             props.title
        }}
    </h2>
    <p>
        {{ 
             props.content
        }}
    </p>
</div>
</template>
<script setup>
// these are used to pass variables from parent to child
const props = defineProps({
    title: String,
    content: String
})
</script>
<style scoped>
/* scoped means that the style only applies to this component */
.post-list-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid hsl(251, 43%, 47%);
}
</style>