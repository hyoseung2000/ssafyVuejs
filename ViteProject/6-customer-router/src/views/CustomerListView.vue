<script setup>
import { ref } from "vue";
import axios from "axios";

const customerList = ref([]); //localStorage에서 꺼내온 결과 담을 배열

//화면 로딩 후 로컬 스토리지에서 저장된 값 꺼내오기
selectAll();

function selectAll() {
  axios.get("http://localhost/customers").then((response) => (customerList.value = response.data));
  // let tmp = localStorage.getItem("customerlist");
  // if (tmp) {
  //   customerList.value = JSON.parse(tmp);
  // }
}

function search() {
  alert("주소로 회원을 검색합니다!");
  // let searchList = [];
  // customerList.value.forEach((c) => {
  //   if (c.address == address.value) {
  //     searchList.push(c);
  //   }
  // });

  // customerList.value = searchList;
  // clearText();
}

// find() vs filter()
// find: 조건 만족 첫번째 요소 반환 (단건 조회)
// filter: 조건 만족 새로운 배열 만들어서 반환 (여러건 조회)
</script>

<template>
  <div class="container">
    <h2>사용자 목록</h2>
    <table class="table text-center">
      <thead>
        <tr>
          <th class="text-center">번호</th>
          <th class="text-center">이름</th>
          <!-- <th class="text-center">주소</th> -->
        </tr>
      </thead>
      <tbody id="tb">
        <tr v-for="customer in customerList" :key="customer.num">
          <td>{{ customer.num }}</td>
          <td>
            <RouterLink :to="{ name: 'detail', params: { num: customer.num } }">{{
              customer.name
            }}</RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.container {
  margin-top: 1.5rem;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
