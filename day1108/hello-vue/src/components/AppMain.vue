<script setup>
import IconMain from "@/components/icons/IconMain.vue";
import MainChild from "@/components/main/MainChild.vue";
import { ref } from "vue";

const myName = ref("효승");
const myMessage = ref("싸피 방문을 환영합니다.");
const callBack = (msg) => {
  console.log(msg);
  myMessage.value = msg;
};
</script>

<template>
  <div class="main">
    <h1><IconMain />메인 화면입니다.</h1>
    <MainChild :my-msg="myMessage" :my-name="myName" @emit-event="callBack" />
    <main-child></main-child>
  </div>
</template>

<style scoped></style>
