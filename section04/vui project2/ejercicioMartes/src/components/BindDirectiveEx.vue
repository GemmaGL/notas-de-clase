<script setup>
import { ref,reactive } from "vue";

const h1Hola = ref("mi-super-bind");

const classBoolean= ref(false);
</script>

<template>
  <h1 :id="h1Hola">Hola a todos</h1>
  <h2 :class="classBolean">menos a uno</h2>
</template>

<style scoped>
#mi-super-bind {
  color: red;
}
</style>
