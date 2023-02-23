<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import BindDirectiveEx from "./components/BindDirectiveEx.vue";
import ToDoItem from "./components/ToDoItem.vue";
</script>

<template>
  <main>
    <!-- <BindDirectiveEx></BindDirectiveEx>-->
    <h1>To DO list</h1>
    <ul>
      <li><to-do-item></to-do-item></li>
      <ToDoItem></ToDoItem>
    </ul>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
