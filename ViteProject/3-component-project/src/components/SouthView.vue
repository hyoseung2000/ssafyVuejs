<script setup>
/* 
defineProps(): 컴포넌트가 가지고 있는 속성에 대한 정의
부모 컴포넌트로부터 값을 받아오는 용도로 사용
자신의 template안에서 사용 가능 
*/
defineProps({
  user: {
    num: Number,
    name: String,
    address: String,
  },
});

/* 
defineEmits(): 자식이 부모에게 값을 전달할 때(신호를 줄 때: 이벤트 발생시킴) 사용할 이벤트 이름을 등록하는 함수

 */
const emit = defineEmits(["giveMoney", "giveWater"]);

function money() {
  emit("giveMoney", { amount: 50000, currency: "dollar" }); //'giveMoney' 이벤트를 발생시킴
}

function water() {
  emit("giveWater", "give me some water..."); //'giveWater' 이벤트를 발생시킴
}
</script>

<template>
  <div>
    <h1>This is SouthView.</h1>
    <h2>{{ user.num }} -- {{ user.name }} -- {{ user.address }}</h2>
    <button @click="money">money</button>
    <button @click="water">water</button>
  </div>
</template>

<style scoped></style>
<!-- 부모가 속성값으로 준 것 -->
