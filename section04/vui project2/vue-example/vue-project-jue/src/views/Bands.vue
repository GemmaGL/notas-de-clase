<template>
  <div id="yolo">
    <h1>Lady Gaga</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat
      non. Inventore, cupiditate laboriosam? Sit at minus fuga voluptatum, rem
      quos dolor nihil temporibus aliquam iste inventore enim omnis?
      Consectetur.
    </p>
    <button @click="verImagen">Click me to see the image</button>
    <img
      :src="imgSrc"
      :alt="imageAlt"
      :class="boolean ? 'vista' : 'no-vista'"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const imgSrc = ref(
  "https://s.yimg.com/sr/img/1/a3f1536d-0d95-3bbc-9665-041c7c730f25"
);

const imageAlt = ref("Lady Gaga");

const boolean = ref(true);

const verImagen = () => {
  boolean.value = !boolean.value;
};
</script>

<style scoped>
.no-vista {
  display: none;
}
.vista {
  width: 200px;
}
</style>
