<script setup>
import { ref } from "vue";

const boleanAns = ref(10);
</script>

<template>
  <h2 v-if="boleanAns === 10">
    Has acertado el número. Era el {{ boleanAns }}
  </h2>
</template>

<style scoped></style>
