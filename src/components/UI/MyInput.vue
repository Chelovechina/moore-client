<template>
  <div class="input__wrapper">
    <label :for="props.id" class="label">{{ label }}</label>
    <input
      :id="props.id"
      :type="props.type"
      :value="props.value"
      @change="onChange"
      class="input"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

interface IProps {
  id: string;
  type: string;
  label: string;
  value: string;
  set: string;
}

const props = defineProps<IProps>();
const { commit } = useStore();

const onChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  commit(props.set, input.value);
};
</script>

<style scoped>
.input__wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
}

.label {
  color: #222;
  opacity: 0.5;
  font-size: 12px;
  font-weight: 400;
  line-height: 110%;
}

.input {
  width: 100%;
  padding: 12px 14px 11px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #000;
}
</style>
