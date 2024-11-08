<template>
  <div>
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
            @click="customerInsert()"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="수정"
            id="btnUpdate"
            @click="customerUpdate()"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="삭제"
            id="btnDelete"
            @click="customerDelete()"
          />

          <input
            type="button"
            class="btn btn-primary"
            value="검색"
            id="btnSearch"
            @click="customerSearch()"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="초기화"
            id="btnInit"
            @click="clearText()"
          />
          <input
            type="button"
            class="btn btn-primary"
            value="전체"
            id="btnAll"
            @click="customerAll()"
          />
        </div>
      </form>
    </div>
    <hr />
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

<script setup>
import { ref } from "vue";

//필요 변수 선언
const num = ref("");
const name = ref("");
const address = ref("");
const customerList = ref([]); //localStorage에서 꺼내온 결과 담을 배열

customerAll();

//화면 로딩 후 로컬 스토리지에서 저장된 값 꺼내오기

function customerInsert() {
  const newdata = {
    num: num.value,
    name: name.value,
    address: address.value,
  };

  customerList.value.push(newdata); //새 고객 정보를 배열에 저장
  localStorage.setItem("customerlist", JSON.stringify(customerList.value));

  alert("새 고객이 등록되었습니다!");

  clearText();
}

function clearText() {
  num.value = "";
  name.value = "";
  address.value = "";
}

function customerAll() {
  let tmp = localStorage.getItem("customerlist");
  if (tmp) {
    customerList.value = JSON.parse(tmp);
  }
}

function customerSearch() {
  let searchList = [];
  customerList.value.forEach((c) => {
    if (c.address == address.value) {
      searchList.push(c);
    }
  });

  customerList.value = searchList;
  clearText();
}

function customerUpdate() {
  customerList.value.forEach((c) => {
    if (c.num == num.value) {
      c.address = address.value;
    }
  });

  localStorage.setItem("customerlist", JSON.stringify(customerList.value));

  alert("주소 수정이 완료되었습니다!");

  clearText();
  customerAll();
}

// find() vs filter()
// find: 조건 만족 첫번째 요소 반환 (단건 조회)
// filter: 조건 만족 새로운 배열 만들어서 반환 (여러건 조회)
function showCustomer(cNum, cName, cAddress) {
  num.value = cNum;
  name.value = cName;
  address.value = cAddress;
}

function customerDelete() {
  customerList.value = customerList.value.filter((c) => c.num !== num.value);

  localStorage.setItem("customerlist", JSON.stringify(customerList.value));

  clearText();
  customerAll();
}
</script>

<style scoped></style>
