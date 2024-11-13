//각각의 컴포넌트 (.vue)에서 요청하는 비동기 작업을 수행하는 함수들이 있는 파일
//axios-common.js 파일에서 export한 axios 객체를 import

import client from "@/util/axios-common";

function selectAll(success, fail) {
  client.get("/customers").then(success).catch(fail);
}

function selectOne(num, success, fail) {
  client.get(`/customers/${num}`).then(success).catch(fail);
}

function insert(customer, success, fail) {
  client.post(`/customers`, customer).then(success).catch(fail);
}

function update(customer, success, fail) {
  client.put(`/customers`, customer).then(success).catch(fail);
}

function remove(num, success, fail) {
  client.delete(`/customers/${num}`).then(success).catch(fail);
}

export { selectAll, selectOne, insert, update, remove };
