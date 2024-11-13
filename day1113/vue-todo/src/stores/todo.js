import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", () => {
  let id = 0;
  const todos = ref([
    { id: id++, text: "Learn HTML", isCompleted: false },
    { id: id++, text: "Learn JS", isCompleted: false },
    { id: id++, text: "Learn Vue", isCompleted: false },
  ]);

  const totalTodoCount = computed(() => todos.value.length);
  const completeTodoCount = computed(() => todos.value.filter((todo) => todo.isCompleted).length);
  const leftTodoCount = computed(() => todos.value.filter((todo) => !todo.isCompleted).length);

  const addTodo = (todoText) => {
    todos.value.push({ id: id++, text: todoText, isCompleted: false });
  };
  const completedTodo = (todoId) => {
    todos.value = todos.value.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
  };

  return { todos, totalTodoCount, completeTodoCount, leftTodoCount, addTodo, completedTodo };
});
