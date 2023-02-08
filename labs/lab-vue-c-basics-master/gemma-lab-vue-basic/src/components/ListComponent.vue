<script setup>
import { ref, reactive } from "vue";

const postList = reactive([
  {
    title: "Post1",
    description: "Descrip1",
    content: "Content1",
  },
  {
    title: "Post2",
    description: "Descrip2",
    content: "Content2",
  },
  {
    title: "Post3",
    description: "Descrip3",
    content: "Content3",
  },
]);
</script>

<template>
  <p v-for="pList in postList">
    {{ pList.title }}, {{ pList.description }}, {{ pList.content }}
  </p>
</template>

<style scoped></style>
