import { api } from "@/api";
import router from "@/router";
import { IApartment } from "@/types/IApartment";
import { ICity } from "@/types/ICity";
import { IManager } from "@/types/IManager";
import { IState } from "@/types/IState";
import { createStore } from "vuex";
import modalModule from "./modalModule";

export default createStore({
  state: {
    status: "loading",
    cities: [{ name: "Все" }],
    currentCity: "Все",
    sort: ["Бронь", "Куплено", "Бартер", "Рассроч", "Отмена", "Активна"],
    currentSort: "Активна",
  } as IState,
  getters: {
    isLoggedIn: () => {
      let isGotToken = false;
      const token = sessionStorage.getItem("token");
      token ? (isGotToken = true) : (isGotToken = false);
      return isGotToken;
    },
  },
  mutations: {
    setStatus: (state: IState, status: string) => {
      state.status = status;
    },
    setErrorMessage: (state: IState, errorMessage: string) => {
      state.errorMessage = errorMessage;
    },
    setToken: (state, token: string) => {
      sessionStorage.setItem("token", token);
      state.status = "fullfilled";
    },
    setEmail: (state: IState, email: string) => {
      state.email = email;
    },
    setPassword: (state: IState, password: string) => {
      state.password = password;
    },
    setCurrentCity: (state: IState, name: string) => {
      const currentCity = state.cities.find((city) => city.name === name);
      state.currentCity = currentCity ? currentCity : "Все";
    },
    setCities: (state: IState, cities: ICity[]) => {
      state.cities = state.cities.concat(cities);
    },
    setCurrentSort: (state: IState, name: string) => {
      const currentSort = state.sort.find((sort) => sort === name);
      state.currentSort = currentSort ? currentSort : "Фильтр";
    },
    setApartments: (state: IState, apartments: IApartment[]) => {
      state.apartments = apartments;
    },
    setManagers: (state: IState, managers: IManager[]) => {
      state.managers = managers;
    },
  },
  actions: {
    login: async ({ state, commit }) => {
      try {
        commit("setStatus", "loading");
        const response = await api.post("/auth/login", {
          email: state.email,
          password: state.password,
        });
        localStorage.setItem("token", response.data.token);
        commit("setToken", response.data.token);
        commit("setStatus", "fullfilled");
        router.push("/home");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    getAllCities: async ({ commit }) => {
      try {
        commit("setStatus", "loading");
        const response = await api.get("/apartments/cities", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        commit("setCities", response.data);
        commit("setStatus", "fullfilled");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    getAllApartments: async ({ commit }) => {
      try {
        commit("setStatus", "loading");
        const response = await api.get("/apartments", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        commit("setApartments", response.data);
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    setApartment: async ({ commit }, apartment) => {
      try {
        commit("setStatus", "loading");
        const response = await api.patch(
          "/apartments",
          { ...apartment },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        commit("setApartment", response.data);
        commit("toggleIsModalOpen");
        commit("setStatus", "updated");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    deleteApartment: async ({ dispatch, commit }, id: string) => {
      try {
        commit("setStatus", "loading");
        const response = await api.delete(`/apartments/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        commit("setApartment", response.data);
        dispatch("getAllApartments");
        commit("setStatus", "deleted");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    createApartment: async ({ dispatch, commit }, apartment) => {
      try {
        commit("setStatus", "loading");
        const response = await api.post(
          "/apartments",
          { ...apartment, cityId: "6558aff7d1a28871189039ff" },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        commit("setApartment", response.data);
        commit("clearCurrentCreateApartment");
        dispatch("getAllApartments");
        commit("setStatus", "save");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    getAllManagers: async ({ commit }) => {
      try {
        const response = await api.get("/managers", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        commit("setManagers", response.data);
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    updateManager: async ({ dispatch, commit }, manager: IManager) => {
      try {
        commit("setStatus", "loading");
        const response = await api.put(
          "/managers",
          { ...manager },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        commit("setStatus", "updated");
        dispatch("getAllManagers");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    deleteManager: async ({ dispatch, commit }, id: string) => {
      try {
        commit("setStatus", "loading");
        const response = await api.delete(`/managers/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        dispatch("getAllManagers");
        commit("setStatus", "deleted");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
    createManager: async ({ dispatch, commit }, manager) => {
      try {
        commit("setStatus", "loading");
        const response = await api.post(
          "/managers",
          { ...manager },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        commit("clearCurrentCreateManager");
        dispatch("getAllManagers");
        commit("setStatus", "save");
      } catch (e) {
        commit("setStatus", "error");
        commit("setErrorMessage", e);
      }
    },
  },
  modules: {
    modal: modalModule,
  },
});
