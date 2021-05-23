import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
// import config from "../config";
//
// import getters from "./core/getters";
// import mutations from "./core/mutations";
// import accounts from "./modules/account";
// import activity from "./modules/activity";
// import user from "./modules/user";
// import tracker from "./modules/tracker";
// import projects from "./modules/project";

export default createStore({
  state: {
    language: "ru",
  },

  mutations: {},
  actions: {},
  modules: {},
});

// plugins: [
//   createPersistedState({
//     key: config?.storageName ?? "state",
//     paths: ["user"],
//   }),
// ],
