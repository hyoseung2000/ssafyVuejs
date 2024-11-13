import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router); // 어플리케이션 안의 모든 컴포넌트(.vue)에서 라우터 사용이 가능해 짐.

app.mount("#app");
