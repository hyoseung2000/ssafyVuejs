<script setup>
const props = defineProps({
  myName: {
    type: String,
    required: true,
    default: "효승",
  },
  messageData: {
    type: Object,
  },
});

console.log(props.messageData);
</script>

<template>
  <div class="child-item">
    <h3>{{ `${messageData.no}. ${myName}님 ${messageData.msg}` }}</h3>
  </div>
</template>

<style scoped>
.child-item {
  background-color: skyblue;
}
</style>
