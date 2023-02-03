<template>
  <div id="yolo">
    <h1>Sushi</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat
      non. Inventore, cupiditate laboriosam? Sit at minus fuga voluptatum, rem
      quos dolor nihil temporibus aliquam iste inventore enim omnis?
      Consectetur.
    </p>
    <button @click="verImagen">Click me to see the image</button>
    <div v-if="food.boolean === true">
      <img
        :src="food.imageSrc"
        :alt="food.imageAlt"
        :class="food.boolean ? 'vista' : 'no-vista'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const food = reactive({
  imageSrc:
    "https://tse2.mm.bing.net/th?id=OIP.cOiUqe84m90EJQ1-VSy9swHaE8&pid=Api&P=0",
  imageAlt: "bandeja de sushi",
  boolean: true,
});
<!--Esta es la manera de que se vaya alternado true con false de manera automática-->

const verImagen = () => {
  food.boolean = !food.boolean;
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
