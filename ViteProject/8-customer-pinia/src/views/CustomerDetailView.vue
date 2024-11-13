<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
// import { selectOne, update, remove } from "@/api/customer";
import { useCustomerStore } from "@/store/customer";
import { storeToRefs } from "pinia";

const store = useCustomerStore();
const { getCustomer: customer } = storeToRefs(store);
const { oneCustomer, modifyCustomer, removeCustomer, allCustomers } = store;

let num = ref("");
let name = ref("");
let address = ref("");
let isDelete = ref(true);

const route = useRoute();
const router = useRouter();
const key = route.params.num;

getOne();

function getOne() {
  oneCustomer(key);

  // selectOne(
  //   key,
  //   ({ data }) => {
  //     console.log(data);
  //     num.value = data.num;
  //     name.value = data.name;
  //     address.value = data.address;
  //   }, //success callback
  //   (error) => {
  //     console.log(error);
  //   } //failure callback
  // );
}

function updateCustomer() {
  isDelete.value = false;

  const c = {
    num: num.value,
    name: name.value,
    address: address.value,
  };

  modifyCustomer(c);

  // update(
  //   c,
  //   (response) => {
  //     alert("주소 수정이 완료되었습니다!");
  //     // router.push({ path: "/list" });
  //   }, //success callback
  //   (error) => {
  //     console.log(error);
  //   } //failure callback
  // );
}

function deleteCustomer() {
  removeCustomer(customer.value.num);

  router.push({ path: "/list" });
  allCustomers();
  // remove(
  //   num.value,
  //   (response) => {
  //     alert("회원 삭제가 완료되었습니다!");
  //     router.push({ path: "/list" });
  //   }, //success callback
  //   (error) => {
  //     console.log(error);
  //   }
  // ); //failure callback
}
</script>

<template>
  <div class="container">
    <form id="form1" class="form-horizontal">
      <div class="form-group">
        <label>번호:</label>
        <input type="text" class="form-control" id="num" v-model="customer.num" />
      </div>
      <div class="form-group">
        <label>이름:</label>
        <input type="text" class="form-control" id="name" v-model="customer.name" />
      </div>

      <div class="form-group">
        <label>주소:</label>
        <input type="text" class="form-control" id="address" v-model="customer.address" />
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
          :class="{ 'is-modify': isDelete }"
          @click="deleteCustomer()"
        />
      </div>
    </form>
  </div>
</template>

<style>
.is-modify {
  display: none;
}
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
