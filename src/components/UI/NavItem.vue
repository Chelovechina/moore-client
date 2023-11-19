<template>
  <li class="nav__item">
    <router-link :to="to" exact class="nav__link">{{ text }}</router-link>
  </li>
</template>

<script setup lang="ts">
const { text, to } = defineProps<{
  text: string;
  to: string;
}>();
</script>

<style scoped>
.nav__link {
  text-decoration: none;
}

.nav__link {
  display: block;
  padding: 10px 25px;
  color: #000;
  font-size: 16px;
  font-weight: 300;
}

.nav__link.active {
  border-radius: 10px;
  background: #bfc4f6;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
}
</style>
