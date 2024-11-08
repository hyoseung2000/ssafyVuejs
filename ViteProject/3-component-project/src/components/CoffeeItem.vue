<script setup>
import { ref } from "vue";

defineProps(["menu"]);

const count = ref(0);

const emit = defineEmits(["addCoffee"]);

function addCoffee() {
  count.value++;
  emit("addCoffee");
}
</script>

<template>
  <div>
    <button @click="addCoffee">{{ menu }} - {{ count }}</button>
  </div>
</template>

<style scoped>
div {
  margin: 0.5rem;
}

button {
  width: 7rem;
}
</style>
