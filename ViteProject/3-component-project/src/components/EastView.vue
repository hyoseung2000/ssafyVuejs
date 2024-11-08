<script setup>
defineProps({
  pointx: {
    type: Number,
  },
  pointy: {
    type: Number,
  },
});
</script>

<template>
  <div>
    <h1>This is EastView.</h1>
    <h2>{{ pointx }} -- {{ pointy }}</h2>
  </div>
</template>

<style scoped></style>
