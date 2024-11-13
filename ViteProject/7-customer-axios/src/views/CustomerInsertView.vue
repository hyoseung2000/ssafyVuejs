<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { insert } from "@/api/customer";

const num = ref("");
const name = ref("");
const address = ref("");

const router = useRouter();

function insertCustomer() {
  const newCustomer = {
    num: num.value,
    name: name.value,
    address: address.value,
  };

  insert(
    newCustomer,
    (response) => {
      alert("생성이 완료되었습니다!");
      clearText();

      router.push({ path: "/list" });
    }, //success callback
    (error) => {
      console.log(error);
    } //failure callback
  );
}

function clearText() {
  num.value = "";
  name.value = "";
  address.value = "";
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
          @click="insertCustomer"
        />

        <input
          type="button"
          class="btn btn-primary"
          value="초기화"
          id="btnInit"
          @click="clearText"
        />
      </div>
    </form>
  </div>
</template>

<style>
.form-group {
  margin: 1rem 0;
}

.btn-group {
  margin-top: 1rem;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
