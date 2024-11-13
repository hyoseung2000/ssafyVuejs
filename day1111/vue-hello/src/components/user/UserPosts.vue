<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const articleNo = ref(route.params.no);
</script>

<template>
  <div>
    <h1>User Posts</h1>
    <h2>{{ articleNo }}번 글 정보 출력</h2>
  </div>
</template>

<style scoped></style>
