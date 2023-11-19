<template>
  <li
    class="city"
    :class="store.state.currentCity.name === props.name ? 'active' : ''"
    @click="onClick"
  >
    {{ props.name }}
  </li>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const props = defineProps<{ name: string; isActive: boolean }>();
const store = useStore();

const onClick = () => {
  store.commit("setCurrentCity", props.name);
};
</script>

<style scoped>
.city {
  color: #8c8e90;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  border-radius: 0.5px;
  border-bottom: 2px solid #ececee;
  padding-right: 20px;
  padding-bottom: 10px;
}
.city.active {
  color: #4d4aea;
  border-radius: 0.5px;
  border-bottom: 2px solid #4d4aea;
}
</style>
