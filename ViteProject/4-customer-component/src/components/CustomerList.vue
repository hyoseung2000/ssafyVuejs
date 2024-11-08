<script setup>
import CustomerInput from "./CustomerInput.vue";
import { ref } from "vue";

//필요 변수 선언
// const num = ref("");
// const name = ref("");
// const address = ref("");
const customerList = ref([]); //localStorage에서 꺼내온 결과 담을 배열

selectAll();

//화면 로딩 후 로컬 스토리지에서 저장된 값 꺼내오기

function insert(params) {
  const newdata = {
    num: params.num,
    name: params.name,
    address: params.address,
  };

  customerList.value.push(newdata); //새 고객 정보를 배열에 저장
  localStorage.setItem("customerlist", JSON.stringify(customerList.value));

  alert("새 고객이 등록되었습니다!");

  clearText();
}

function selectAll() {
  let tmp = localStorage.getItem("customerlist");
  if (tmp) {
    customerList.value = JSON.parse(tmp);
  }
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

function update() {
  // customerList.value.forEach((c) => {
  //   if (c.num == num.value) {
  //     c.address = address.value;
  //   }
  // });

  // localStorage.setItem("customerlist", JSON.stringify(customerList.value));

  alert("주소 수정이 완료되었습니다!");

  // clearText();
  // customerAll();
}

// find() vs filter()
// find: 조건 만족 첫번째 요소 반환 (단건 조회)
// filter: 조건 만족 새로운 배열 만들어서 반환 (여러건 조회)
function showCustomer(cNum, cName, cAddress) {
  alert(cNum + "번, " + cName + " 고객, 주소 : " + cAddress);
  // num.value = cNum;
  // name.value = cName;
  // address.value = cAddress;
}

function deleteCustom() {
  alert("000번 고객이 삭제되었습니다.");
  // customerList.value = customerList.value.filter((c) => c.num !== num.value);

  // localStorage.setItem("customerlist", JSON.stringify(customerList.value));

  // clearText();
  // customerAll();
}
</script>

<template>
  <div>
    <CustomerInput
      @customerInsert="insert"
      @customerUpdate="update"
      @customerDelete="deleteCustom"
      @customerSearch="search"
      @customerAll="selectAll"
    />

    <div class="container">
      <h2>사용자 목록</h2>
      <table class="table text-center">
        <thead>
          <tr>
            <th class="text-center">번호</th>
            <th class="text-center">이름</th>
            <th class="text-center">주소</th>
          </tr>
        </thead>
        <tbody id="tb">
          <tr
            v-for="customer in customerList"
            :key="customer.num"
            @click="showCustomer(customer.num, customer.name, customer.address)"
          >
            <td>{{ customer.num }}</td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
