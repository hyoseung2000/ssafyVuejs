<script setup>
defineProps({
  codeMsg: {
    type: String,
  },
});
</script>

<template>
  <div>
    <h1>This is WestView.</h1>
    <h2>{{ codeMsg }}</h2>
  </div>
</template>

<style scoped></style>
