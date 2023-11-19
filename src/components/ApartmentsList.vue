<template>
  <div class="title">
    <p class="text">№ Квартиры</p>
    <p class="text">Объект</p>
    <p class="text">Этаж</p>
    <p class="text">КВ</p>
    <p class="text">Дата</p>
    <p class="text">Статус</p>
    <p class="text">Цена</p>
    <p class="text">Клиент</p>
    <p class="text">Статус</p>
  </div>
  <ul class="apartments__list">
    <ApartmentItem v-for="apartment in store.state.apartments" :apartment="apartment" :key="apartment._id" />
  </ul>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import ApartmentItem from "./ApartmentItem.vue";

const store = useStore();
</script>

<style scoped>
.title {
  margin: 30px 30px 14px;
  display: flex;
  gap: 70px;
  border-radius: 5px;
  border: 1px solid #ececec;
  background: #fff;
  padding: 6px 30px 6px 30px;

  .text {
    color: #001737;
    font-size: 12px;
    font-weight: 500;
  }
}

.apartments__list {
  list-style: none;
  margin: 0 30px;
  display: flex;
  gap: 4px;
  flex-direction: column;
}

.apartments__item {
  display: flex;
  padding: 9.5px 30px 9.5px 30px;
  gap: 70px;
  border-radius: 5px;
  border: 1px solid #ececec;
  background: #fff;
  align-items: center;

  .text {
    color: #222;
    font-size: 12px;
    font-weight: 400;
    line-height: 110%;
  }
}
</style>
