<script setup>
import { useTodoStore } from "@/stores/todo";

const store = useTodoStore();

defineProps({
  todo: Object,
});
</script>

<template>
  <span @click="store.completedTodo(todo.id)" :class="{ 'is-done': todo.isCompleted }">{{
    todo.text
  }}</span>
  <button>완료</button>
  <br />
</template>

<style scoped>
.is-done {
  text-decoration: line-through;
  font-weight: bold;
}
</style>
