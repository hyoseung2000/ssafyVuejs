<script setup>
import { useRoute } from "vue-router";
// 경로정보 이용 표시
const currentRoute = useRoute(); // http://localhost:5173/other/cat-blue

const code = currentRoute.params.code;
</script>

<template>
  <div class="about">
    <!--other/cat-blue -->
    <h1>This is an other page : {{ $route.params.code }}</h1>
    <h1>This is an other page : {{ code }}</h1>
    <h2></h2>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
