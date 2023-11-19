<template>
  <div class="home">
    <UpdateNotify :text="msg" />
    <AsideNav />
    <main class="main">
      <header class="header">
        <h1 class="title">Менеджеры</h1>
      </header>
      <div class="container">
        <button @click="handleCreate" class="btn">Добавить</button>
      </div>
      <ManagersList />
      <SideModalEdit
        v-if="store.state.modal.managerChange.isModalOpened"
        :title="store.state.modal.managerChange.modalType"
      />
      <SideModalCreateManager
        v-if="store.state.modal.createManager.isModalOpened"
        :title="store.state.modal.createManager.modalType"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { onBeforeMount, ref } from "vue";

import UpdateNotify from "./../components/UpdateNotify.vue";
import AsideNav from "./../components/AsideNav.vue";
import ManagersList from "./../components/ManagersList.vue";
import SideModalEdit from "./../components/SideModalEdit.vue";
import SideModalCreateManager from "./../components/SideModalCreateManager.vue";

const store = useStore();

let msg: string;
if (store.state.status === "updated") {
  msg = "Изменения сохранены";
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
  store.dispatch("getAllManagers");
});

const handleCreate = () => {
  store.commit("toggleIsCreateManagerModalOpen");
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
  opacity: 0.3;
}

.container {
  display: flex;
  justify-content: flex-end;
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
