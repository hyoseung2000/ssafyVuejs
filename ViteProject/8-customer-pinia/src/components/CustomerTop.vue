<script setup>
import useTestStore from "@/store/test";
import { storeToRefs } from "pinia";

const store = useTestStore();
// storeToRefs : data, getters는 그냥 꺼내면 반응형 성질이 사라지므로 storeToRefs로 받아야 함
const { count, getDoubleCount } = storeToRefs(store); //state(data), getters(computed)
const { upCount } = store; //action
</script>

<template>
  <div class="container">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
    <h1>Vue Customer Management</h1>
    <div>
      count: {{ store.count }} <br />
      count double: {{ store.getDoubleCount }} <br />
      <button @click="store.upCount()">Increment</button>
    </div>
    <hr />
    <div>
      count: {{ count }} <br />
      count double: {{ getDoubleCount }} <br />
      <button @click="upCount()">Increment</button>
    </div>
    <nav>
      <RouterLink to="/list">Customer List</RouterLink>
      <RouterLink to="/insert">Customer Insert</RouterLink>
      <RouterLink to="/other">Customer Other</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 5rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
