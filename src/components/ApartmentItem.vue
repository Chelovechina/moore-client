<template>
  <li class="apartments__item">
    <div class="info">
      <p class="text">{{ apartment.number }}</p>
      <p class="text">Bishkek</p>
      <p class="text">{{ apartment.floor }}</p>
      <p class="text">{{ apartment.sqm }}</p>
      <p class="text">
        {{ new Date(apartment.createdAt).toLocaleDateString() }}
      </p>
      <StatusItem :status="apartment.status" :variant="apartment.status" />
      <p class="text">{{ apartment.price }}c</p>
      <p class="text">{{ apartment.clientName }}</p>
      <p class="text">{{ apartment.statusMessage }}</p>
    </div>
    <div class="manipulation">
      <button @click="handleChange" class="btn">Изменить</button>
      <button @click="handleMore" class="open__btn">
        <img src="./../assets/dots.svg" alt="More" />
      </button>
      <ul v-if="isMoreOpen" class="more__list">
        <li class="more__item">
          <button class="more__btn">История</button>
        </li>
        <li class="more__item">
          <button @click="handleDelete" class="more__btn">Удалить</button>
        </li>
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

import StatusItem from "./UI/StatusItem.vue";

const store = useStore();
const { apartment } = defineProps<{ apartment: any }>();
const isMoreOpen = ref(false);

const handleMore = () => {
  isMoreOpen.value = !isMoreOpen.value;
};
const handleChange = () => {
  store.commit("toggleIsModalOpen");
  store.commit("setCurrentApartment", apartment);
};
const handleDelete = () => {
  store.dispatch("deleteApartment", apartment._id);
};
</script>

<style scoped>
.apartments__item {
  padding: 9.5px 30px 9.5px 30px;
  border-radius: 5px;
  border: 1px solid #ececec;
  background: #fff;
  display: flex;
  justify-content: space-between;

  .info {
    display: flex !important;
    gap: 70px;
    align-items: center;
  }

  .manipulation {
    display: flex;
    gap: 30px;
    align-items: center;
    position: relative;
  }

  .text {
    color: #222;
    font-size: 12px;
    font-weight: 400;
    line-height: 110%;
  }

  .btn,
  .open__btn {
    border: none;
    background: transparent;
    text-align: center;
    color: #5780eb;
    font-size: 12px;
    font-weight: 400;
    line-height: 110%;
  }

  .open__btn {
    padding: 5px;
  }

  .more__list {
    list-style: none;
    position: absolute;
    padding: 16px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .more__btn {
    color: #222;
    font-size: 12px;
    font-weight: 400;
    line-height: 110%;
    border: none;
    background: transparent;
  }
}
</style>
