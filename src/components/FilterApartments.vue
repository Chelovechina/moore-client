<template>
  <select @change="onChange" class="select">
    <option key="Фильтр" value="Фильтр" placeholder="Фильтр" selected></option>
    <option v-for="sort in store.state.sort" :key="sort" :value="sort" class="option">
      {{ sort }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

const onChange = (e: Event) => {
  const select = e.target as HTMLSelectElement;
  store.commit("setCurrentSort", select.value);
};
</script>

<style scoped>
.select {
  margin-left: 30px;
  border: none;
}

.option {
  color: #222;
  font-size: 12px;
  font-weight: 400;
  line-height: 110%;
}
</style>
