<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/stores/todo";

const store = useTodoStore();

const todoText = ref("");
//form의 ref와 이름 맞춰주면 됨
const formE1 = ref(null);

const createTodo = () => {
  console.log(todoText);
  store.addTodo(todoText.value);
  // todoText.value = "";
  formE1.value.reset(); // form 초기화
};
</script>

<template>
  <div>
    <!-- <input type="text" v-model="todoText" @keyup.enter="createTodo" />
    <button @click="createTodo">할일 추가</button> -->
    <form @submit.prevent="createTodo" ref="formE1">
      <input type="text" v-model="todoText" />
      <button type="submit">할일 추가</button>
    </form>
  </div>
</template>

<style scoped></style>
