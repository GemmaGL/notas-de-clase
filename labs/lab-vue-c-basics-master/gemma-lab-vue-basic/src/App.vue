<script setup>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import BoleanComponent from "./components/BoleanComponent.vue";
import ListComponent from "./components/ListComponent.vue";

import { ref, reactive } from "vue";

const fnstring = () => {
  return "Esta es una string impresa a partir de una función";
};
</script>

<template>
  <NavbarComponent></NavbarComponent>
  <header></header>

  <main>
    <h1>Ejercicio 2.1</h1>
    <p>El resultado de la función matemática de 2 +2 es {{ 2 + 2 }}</p>
    <br />
    <h1>Ejercicio 2.2</h1>
    <p>{{ fnstring() }}</p>
    <h1>Ejercicio 3</h1>
    <BoleanComponent></BoleanComponent>
    <h1>Ejercicio 4</h1>
    <ListComponent></ListComponent>
  </main>
  <FooterComponent></FooterComponent>
</template>

<style scoped></style>
