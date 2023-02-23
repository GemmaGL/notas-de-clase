<script setup>
import { ref, reactive } from "vue";
defineProps({
  imageURL: String,
});
</script>

<template>
  <div>
    <img :src="imageURL" className="profile" alt="profile" />
  </div>
</template>

<style scoped></style>
