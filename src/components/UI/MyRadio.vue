<template>
  <label @click="handleClick" class="label" :class="status === props.value ? 'active' : ''" :for="props.value">{{
    props.value }}</label>
  <input @click="handleClick" type="radio" class="radio" :value="props.value" name="status" />
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const props = defineProps<{ value: string; status: string }>();
const store = useStore();

const handleClick = (e: Event) => {
  const label = e.target as HTMLLabelElement;
  store.commit("setCurrentStatus", label.textContent);
};
</script>

<style scoped>
.label {
  display: flex;
  width: 74px;
  height: 35px;
  color: #292929;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 110%;
  border-radius: 5px;
  background: #f5f5f5;
}

.label.active {
  color: #7c6e53;
  background: #fcecce;
}

.radio {
  position: absolute;
  opacity: 0;
}
</style>
