<script setup>
import { ref } from "vue";
const num = ref("");
const name = ref("");
const address = ref("");

const emit = defineEmits([
  "customerInsert",
  "customerUpdate",
  "customerDelete",
  "customerSearch",
  "customerAll",
]);

function customerInsert() {
  const newdata = {
    num: num.value,
    name: name.value,
    address: address.value,
  };

  clearText();

  emit("customerInsert", newdata);
}

function customerUpdate() {
  emit("customerUpdate");
}

function customerDelete() {
  emit("customerDelete");
}

function customerSearch() {
  emit("customerSearch");
}

function clearText() {
  num.value = "";
  name.value = "";
  address.value = "";
}

function customerAll() {
  emit("customerAll");
}
</script>

<template>
  <div class="container">
    <form id="form1" class="form-horizontal">
      <div class="form-group">
        <label>번호:</label> <input type="text" class="form-control" id="num" v-model="num" />
      </div>
      <div class="form-group">
        <label>이름:</label> <input type="text" class="form-control" id="name" v-model="name" />
      </div>

      <div class="form-group">
        <label>주소:</label>
        <input type="text" class="form-control" id="address" v-model="address" />
      </div>

      <div class="btn-group">
        <input
          type="button"
          class="btn btn-primary"
          value="등록"
          id="btnInsert"
          @click="customerInsert"
        />
        <input
          type="button"
          class="btn btn-primary"
          value="수정"
          id="btnUpdate"
          @click="customerUpdate"
        />
        <input
          type="button"
          class="btn btn-primary"
          value="삭제"
          id="btnDelete"
          @click="customerDelete"
        />

        <input
          type="button"
          class="btn btn-primary"
          value="검색"
          id="btnSearch"
          @click="customerSearch"
        />
        <input
          type="button"
          class="btn btn-primary"
          value="초기화"
          id="btnInit"
          @click="clearText"
        />
        <input
          type="button"
          class="btn btn-primary"
          value="전체"
          id="btnAll"
          @click="customerAll"
        />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
