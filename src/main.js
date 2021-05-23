import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import useVuelidate from "@vuelidate/core";
import "../src/assets/styles/app.scss";

createApp(App).use(store).use(router).use(useVuelidate).mount("#app");
