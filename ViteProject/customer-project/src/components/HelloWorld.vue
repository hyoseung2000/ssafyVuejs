<script setup>
defineProps({
  msg: {
    type: String,
    required: true, //필수 속성 여부
  },
  code: {
    type: String,
  },
});
</script>

<template>
  <div class="greetings">
    <!-- 부모가 속성값으로 준 것 -->
    <h1 class="green">{{ msg }} -- {{ code }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
