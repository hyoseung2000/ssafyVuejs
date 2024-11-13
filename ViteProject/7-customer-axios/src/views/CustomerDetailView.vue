<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { selectOne, update, remove } from "@/api/customer";

let num = ref("");
let name = ref("");
let address = ref("");

const route = useRoute();
const router = useRouter();
const key = route.params.num;

getOne();

function getOne() {
  selectOne(
    key,
    ({ data }) => {
      console.log(data);
      num.value = data.num;
      name.value = data.name;
      address.value = data.address;
    }, //success callback
    (error) => {
      console.log(error);
    } //failure callback
  );
}

function updateCustomer() {
  const c = {
    num: num.value,
    name: name.value,
    address: address.value,
  };

  update(
    c,
    (response) => {
      alert("주소 수정이 완료되었습니다!");
      router.push({ path: "/list" });
    }, //success callback
    (error) => {
      console.log(error);
    } //failure callback
  );
}

function deleteCustomer() {
  remove(
    num.value,
    (response) => {
      alert("회원 삭제가 완료되었습니다!");
      router.push({ path: "/list" });
    }, //success callback
    (error) => {
      console.log(error);
    }
  ); //failure callback
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
          value="수정"
          id="btnUpdate"
          @click="updateCustomer()"
        />
        <input
          type="button"
          class="btn btn-primary"
          value="삭제"
          id="btnDelete"
          @click="deleteCustomer()"
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
