import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // хранилище данных
  state: {
    costsData: [],
    currentPage: 1,
    perPage: 5,
    category: "",
    value: "",
    date: "",
    error: false,
    isPopupActive: false,
  },

  // для вычисления производного состояния на основе состояния хранилища
  // для получения данных из хранилища
  getters: {
    getCostsList: state => {
      return state.costsData;
    },
    getPageCount: state => {
      let l = state.costsData.length,
        s = state.perPage;
      return Math.ceil(l / s);
    },
    getPaginatedData: state => {
      const start = (state.currentPage - 1) * state.perPage,
        end = start + state.perPage;
      return state.costsData.slice(start, end);
    },
    getIsPopupActive: state => state.isPopupActive,
    getCurrentPage: state => state.currentPage,
    getMaxId: state =>
      state.costsData.map(({ id }) => id).sort((a, b) => a - b)[
        state.costsData.length - 1
      ],
  },

  //для изменения данных в state
  mutations: {
    setCostsList: (state, payload) => (state.costsData = payload),
    addCostsList: (state, payload) => state.costsData.push(payload),
    setCurrentPage: (state, payload) => (state.currentPage = payload),
    setIsPopupActive: (state, payload) => (state.isPopupActive = payload),
  },

  // для обмена данными между клиентом-сервером (асинхронных операций)
  actions: {
    async loadCosts({ commit }) {
      const list = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { id: 1, date: "20.09.2022", category: "food", value: 1582 },
            { id: 2, date: "15.09.2022", category: "transport", value: 245 },
            { id: 3, date: "22.09.2022", category: "healthcare", value: 780 },
            { id: 4, date: "22.09.2022", category: "healthcare", value: 780 },
            { id: 5, date: "22.09.2022", category: "healthcare", value: 780 },
            { id: 6, date: "22.09.2022", category: "healthcare", value: 780 },
            { id: 7, date: "22.09.2022", category: "healthcare", value: 780 },
            { id: 8, date: "22.09.2022", category: "healthcare", value: 780 },
            { id: 9, date: "22.09.2022", category: "healthcare", value: 780 },
            { id: 10, date: "22.09.2022", category: "healthcare", value: 780 },
          ]);
        }, 1000);
      });
      return commit("setCostsList", list);
    },
  },
});
