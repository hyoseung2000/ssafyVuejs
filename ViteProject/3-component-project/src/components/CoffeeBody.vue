<script setup>
import CoffeeItem from "./CoffeeItem.vue";
import { ref } from "vue";

const total = ref(0);

function orderCoffee() {
  total.value += 1;
}
</script>

<template>
  <div class="container">
    <h1>총 주문수: {{ total }}</h1>
    <div class="coffee">
      <CoffeeItem @addCoffee="orderCoffee" menu="아메리카노" />
      <CoffeeItem @addCoffee="orderCoffee" menu="카페라떼" />
      <CoffeeItem @addCoffee="orderCoffee" menu="카푸치노" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.coffee {
  display: flex;
  flex-direction: row;
}
</style>
