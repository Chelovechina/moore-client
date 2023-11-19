<template>
  <button class="btn" @click="onClick">{{ props.text }}</button>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const props = defineProps<{ text: string; mutation: string }>();
const { dispatch } = useStore();

const onClick = () => {
  dispatch(props.mutation);
};
</script>

<style scoped>
.btn {
  width: 100%;
  padding: 15px 0;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 110%;
  flex-shrink: 0;
  border-radius: 4px;
  background: #5780eb;
  border: none;
  margin-top: 20px;
}
</style>
