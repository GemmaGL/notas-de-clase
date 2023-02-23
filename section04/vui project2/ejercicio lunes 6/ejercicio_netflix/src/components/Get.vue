<!--Creamos un <h1>. Este debe leer una variable computada myName que, a su vez, lea dos variable reactivas name y lastName. Les daréis un valor default a cada una con vuestro nombre y vuestro apellido. Debajo del h1 creamos un pequeño form con dos inputs, uno que sobreescriba name y el otro lastName. Si todo está bien vinculado, cuando modifiquéis el input el h1 debería modificarse a la vez, incluso antes de hacer submit.-->
<template>
  <h1>{{ myName }}</h1>
  <h2>Gemma</h2>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const myName = ref ("Gemma"),
const lastName = ref ("Galver")

const myFullName = computed({
    get() {
        return `${myName.valeu}` ${}
    }
})
});
</script>

<style scoped></style>
