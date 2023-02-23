<script setup>
import {ref,reactive} from "Vue";
import Input from './Input.vue';
import Submit from './Submit.vue';
import { VueElement } from 'vue';

const myName=ref ('Gemma');

const changeName = (newName) =>{
    myName.value = newName
}

</script>

<template>

    <h1>{{ myName }}</h1>
    
</template>

<style scoped></style>

