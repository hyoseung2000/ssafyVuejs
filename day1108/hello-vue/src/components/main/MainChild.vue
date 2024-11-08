<script setup>
import MainChildItem from "./MainChildItem.vue";
import { ref } from "vue";

//1. 문자열 배열
const props = defineProps(["myName", "myMsg"]);
const name = props.myName;

const messages = ref([
  { no: 1, msg: "안녕하세요" },
  { no: 2, msg: "취업 축하해요" },
  { no: 3, msg: "대박 나세요" },
]);
</script>

<template>
  <div class="child">
    <h2>{{ myName }}님, {{ myMsg }}</h2>
    <div>
      <button @click="$emit('emitEvent', '취업을 축하합니다')">
        부모 메세지 변경
      </button>
    </div>
    <MainChildItem
      v-for="msg in messages"
      :key="msg.no"
      :message-data="msg"
      :myName="name"
    />
  </div>
</template>

<style scoped>
.child {
  background-color: pink;
}
</style>
