<script setup>
import { useRoute } from "vue-router";
// 경로정보 이용 표시
const currentRoute = useRoute(); // http://localhost:5173/some?nick=dog-red

const nick = currentRoute.query.nick;
</script>

<template>
  <div class="about">
    <!-- some?nick=dog-red -->
    <h1>This is some page: {{ $route.query.nick }}</h1>
    <h1>This is some page: {{ nick }}</h1>
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
