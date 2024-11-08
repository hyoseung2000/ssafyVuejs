<!-- setup()의 역할을 함 -->
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MyWorld from "./components/MyWorld.vue";
</script>

<template>
  <div>
    <MyWorld />
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" code="12345" />
      </div>
    </header>

    <main>
      <TheWelcome />
    </main>
  </div>
</template>

<!-- scoped : 이 vue 파일에만 적용, 안쓰면 전체에 적용됨 -->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
