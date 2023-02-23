<script setup>
export default {
  data() {
    return {
      name: "Ivaylo",
      tasks: [
        "Write my posts",
        "Go for a walk",
        "Meet my friends",
        "Buy fruit",
      ],
      newItemText: "",
    };
  },
  methods: {
    addNewTodo() {
      if (this.newItemText != "") {
        this.tasks.unshift(this.newItemText);
      }
      this.newItemText = "";
    },
    removeTodo() {
      this.tasks.shift();
    },
  },
};
</script>
<template>
  <div id="app">
    <h4>{{ name }}'s To Do List</h4>
    <div>
      <input v-model="newItemText" v-on:keyup.enter="addNewTodo" />
      <button v-on:click="addNewTodo">Add</button>
      <button v-on:click="removeTodo">Remove</button>
      <transition-group name="list" tag="ol">
        <li v-for="task in tasks" v-bind:key="task">{{ task }}</li>
      </transition-group>
    </div>
  </div>
</template>
