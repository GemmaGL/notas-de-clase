<script setpu>
import Childcomponent from "./Childcomponent.vue";

const myFunction = () => {
  alert("Emit realizado con éxito! ;)");
};
</script>

<template>
    <div>
        <h1>Ejemplo Emit</h1>
        <Childcomponent @emitAlert="myFunction" />
    </div>
</template>
