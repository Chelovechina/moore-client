<template>
  <ul class="cities">
    <CityItem v-for="city in store.state.cities" :name="city.name" :isActive="currentCity.name === city.name"
      :key="city._id" />
  </ul>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import CityItem from "./UI/CityItem.vue";

const store = useStore();
const currentCity = store.state.currentCity;
</script>

<style lang="scss" scoped>
.cities {
  list-style: none;
  display: flex;
  width: 346px;
}
</style>
