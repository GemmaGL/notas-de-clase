<script setup>
import { ref, reactive } from "vue";
defineProps({
  userName: String,
  userHandle: String,
});
</script>

<template>
  <span className="user">
    <span className="name">{{ userName }}</span>
    <span className="handle">@{{ userHandle }}</span>
  </span>
</template>

<style scoped></style>
