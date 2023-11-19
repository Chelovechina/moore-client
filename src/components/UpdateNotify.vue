<template>
  <div class="notification">
    <p class="notification__text">{{ props.text }}</p>
    <img src="./../assets/done.svg" alt="Done" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  text: string;
  isVisible: boolean;
  set: any;
}>();

onMounted(() => {
  if (props.isVisible) {
    setTimeout(() => {
      props.set();
    }, 5000);
  }
});
</script>

<style scoped>
.notification {
  position: absolute;
  right: 30px;
  top: 30px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 60px;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
}
</style>
