import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//pinia
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);
const store = createPinia();

app.use(router);
app.use(store);

app.mount("#app");
