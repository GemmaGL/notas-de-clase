<script setup>
import { ref, reactive } from "vue";
defineProps({
  userTimestamp: String,
});
</script>

<template>
  <span className="timestamp">{{ userTimestamp }}</span>
</template>

<style scoped></style>
