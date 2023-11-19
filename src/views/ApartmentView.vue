<template>
  <div class="home">
    <UpdateNotify :text="msg" :isVisible="isVisible" :set="changeIsVisible" />
    <AsideNav />
    <main class="main">
      <header class="header">
        <h1 class="title">Квартиры</h1>
      </header>
      <div class="container">
        <CitySelector />
        <button @click="handleCreate" class="btn">Добавить</button>
      </div>
      <FilterApartments />
      <ApartmentsList />
      <SideModal v-if="store.state.modal.apartmentChange.isModalOpened"
        :title="store.state.modal.apartmentChange.modalType" />
      <SideModalCreate v-if="store.state.modal.createApartment.isModalOpened"
        :title="store.state.modal.createApartment.modalType" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { onBeforeMount, ref } from "vue";

import UpdateNotify from "@/components/UpdateNotify.vue";
import AsideNav from "@/components/AsideNav.vue";
import CitySelector from "@/components/CitySelector.vue";
import FilterApartments from "@/components/FilterApartments.vue";
import ApartmentsList from "@/components/ApartmentsList.vue";
import SideModal from "@/components/SideModal.vue";
import SideModalCreate from "@/components/SideModalCreate.vue";

const store = useStore();

let msg: string;
if (store.state.status === "updated") {
  msg = "Изменения созранены";
} else if (store.state.status === "deleted") {
  msg = "Удален элемент";
} else {
  msg = "Сохранено";
}

const isVisible = msg !== "" ? ref(true) : ref(false);

const changeIsVisible = () => {
  console.log("change");
  isVisible.value = false;
};

onBeforeMount(() => {
  store.dispatch("getAllCities");
  store.dispatch("getAllApartments");
});

const handleCreate = () => {
  store.commit("toggleIsCreateModalOpen");
};
</script>

<style scoped>
.main {
  width: 100%;
}

.header {
  padding: 10px 30px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.title {
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 400;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.btn {
  padding: 7px 30px;
  color: #435848;
  font-size: 12px;
  font-weight: 500;
  line-height: 110%;
  border-radius: 5px;
  background: #d1f4d9;
  border: none;
}
</style>
