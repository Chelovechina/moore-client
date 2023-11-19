<template>
  <p class="status" :class="variantClass">{{ props.status }}</p>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

const props = defineProps<{ status: string; variant: string }>();
let variantClass = ref<string | null>();

onBeforeMount(() => {
  if (props.status === "Активна") {
    variantClass.value = "active";
  } else if (props.status === "Бронь") {
    variantClass.value = "reservation";
  } else if (props.status === "Куплено") {
    variantClass.value = "sold";
  }
});
</script>

<style scoped>
.status {
  font-size: 12px;
  font-weight: 500;
  line-height: 110%;
  border-radius: 5px;
  width: 64px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status.active {
  color: #535e7c;
  background: #cedefc;
}

.status.reservation {
  color: #7c6e53;
  background: #fcecce;
}

.status.sold {
  color: #537c55;
  background: #d4fcce;
}
</style>
