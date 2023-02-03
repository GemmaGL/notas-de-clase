<!-- Html aca-->
<template>
  <div>
    <p>Mi nombre es Gemma, nací en Barcelona y tengo 45 años.</p>


  </div>
</template>

<!--JS login-->

<script setup>
import { reactive } from 'vue';


const favouriteMovie= ref ("Gattaca");
const numOfTimesSeen = ref (5);
const favouriteFood = ref ("Sushi")

const aboutMe = reactive ({
    name: "Gemma",
    age: 45,
    dateOfBirth: "24/07/77",
    hobbies: ["reading", "learning", "cooking"],

})
</script>

<!-- Css Estilos aca -->

<style scoped></style>
