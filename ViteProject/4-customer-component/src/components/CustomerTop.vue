<template>
  <div>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
    <!-- 화면을 꽂아줄 수 있는 태그 -->
    <slot name="title"></slot>
    <slot name="other"></slot>
  </div>
</template>

<script setup></script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
