<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";

let num = ref("");
let name = ref("");
let address = ref("");
let customers = ref([]);

const route = useRoute();
const router = useRouter();
const key = route.params.num;

axios.get("http://localhost/customers/" + key).then((response) => {
  num.value = response.data.num;
  name.value = response.data.name;
  address.value = response.data.address;
});

// customers.value = JSON.parse(localStorage.getItem("customerlist"));
// const c = customers.value.find((item) => {
//   return item.num == key;
// });

// num.value = c.num;
// name.value = c.name;
// address.value = c.address;

function updateCustomer() {
  c.address = address.value;

  localStorage.setItem("customerlist", JSON.stringify(customers.value));

  alert("주소 수정이 완료되었습니다!");
}

function deleteCustomer() {
  axios
    .delete("http://localhost/customers/" + num.value)
    .then((response) => console.log(response.data))
    .then(alert(num.value + "번 고객이 삭제되었습니다."));

  // customers.value = customers.value.filter((c) => c.num !== num.value);

  // localStorage.setItem("customerlist", JSON.stringify(customers.value));

  router.push({ path: "/list" });
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
