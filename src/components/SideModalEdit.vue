<template>
  <div class="modal">
    <aside class="aside">
      <div class="aside__header">
        <h2 class="aside__title">{{ props.title }}</h2>
        <button @click="handleClose" class="aside__btn">
          <img class="aside__img" src="@/assets/cancel.svg" alt="close" />
        </button>
      </div>
      <div class="aside__form">
        <MyInput id="name" type="text" label="ФИО менеджера" :value="currentManager.name" set="setCurrentName" />
        <MyInput id="phoneNumber" type="tel" label="Номер" :value="currentManager.phoneNumber"
          set="setCurrentPhoneNumber" />
        <MyInput id="email" type="email" label="Почта" :value="currentManager.email" set="setCurrentEmail" />
      </div>
    </aside>
    <div class="btn__group">
      <button class="btn save" @click="onClick">Сохранить</button>
      <button @click="handleClose" class="btn">Отмена</button>
    </div>
  </div>
  <div @click="handleClose" class="bg"></div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import MyInput from "./../components/UI/MyInput.vue";

const props = defineProps<{ title: string }>();
const store = useStore();
const currentManager = store.state.modal.managerChange.currentManager;

const onClick = () => {
  store.dispatch("updateManager", currentManager);
  store.commit("toggleIsManagerModalOpen");
};

const handleClose = () => {
  store.commit("toggleIsManagerModalOpen");
};
</script>

<style scoped>
.modal {
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  bottom: 0;
  width: 420px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn__group {
  display: flex;
  padding: 30px;
  flex-direction: column;
}

.btn {
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 110%;
  border: none;
  width: 360px;
  height: 50px;
  opacity: 0.5;
  background: inherit;
  border-radius: 4px;
}

.btn.save {
  color: #fff;
  opacity: 1;
  background: #5780eb;
}

.aside {
  .aside__header {
    display: flex;
    padding: 20px 30px;
    align-items: center;
    justify-content: space-between;
    background: #f4faff;
  }

  .aside__title {
    color: #000;
    font-size: 17px;
    font-weight: 400;
    opacity: 0.5;
  }

  .aside__btn {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .aside__form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .aside__text {
    color: #222;
    font-size: 12px;
    font-weight: 400;
    line-height: 110%;
    opacity: 0.5;
  }

  .aside__radio {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.bg {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.3;
  background: #000;
}
</style>
