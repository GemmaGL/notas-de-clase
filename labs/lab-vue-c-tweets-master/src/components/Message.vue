<script setup>
import { ref, reactive } from "vue";
defineProps({
  userMessage: String,
});
</script>

<template>
  <p className="message">{{ userMessage }}</p>
</template>

<style scoped></style>
