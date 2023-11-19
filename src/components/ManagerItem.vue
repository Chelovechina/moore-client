<template>
  <li class="apartments__item">
    <div class="info">
      <p class="text">{{ manager.name }}</p>
      <p class="text">{{ manager.phoneNumber }}</p>
      <p class="text">{{ manager.email }}</p>
      <p class="text">{{ new Date(manager.createdAt).toLocaleDateString() }}</p>
      <p class="text">{{ manager.dealsAmount }}</p>
    </div>
    <div class="manipulation">
      <button @click="handleMore" class="open__btn">
        <img src="./../assets/dots.svg" alt="More" />
      </button>
      <ul v-if="isMoreOpen" class="more__list">
        <li class="more__item">
          <button @click="handleChange" class="more__btn edit">Изменить</button>
        </li>
        <li class="more__item">
          <button @click="handleDelete" class="more__btn delete">
            Удалить
          </button>
        </li>
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { manager } = defineProps<{ manager: any }>();
const isMoreOpen = ref(false);

const handleMore = () => {
  isMoreOpen.value = !isMoreOpen.value;
};
const handleChange = () => {
  store.commit("toggleIsManagerModalOpen");
  store.commit("setCurrentManager", manager);
};
const handleDelete = () => {
  store.dispatch("deleteManager", manager._id);
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
    display: flex;
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
    z-index: 5;
    right: 3px;
    top: 20px;
    padding: 16px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .more__btn {
    color: #222;
    border: none;
    background: transparent;
    font-size: 15px;
    font-weight: 400;
    line-height: 110%;
  }

  .more__btn.edit {
    color: #5780eb;
  }

  .more__btn.delete {
    color: #f98c8c;
  }
}
</style>
