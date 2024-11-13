// 비동기 통신에 필요한 axios 객체 생성 후 export
// 사용자 정의 내용으로 편집 가능

import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost", // API 주소
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
