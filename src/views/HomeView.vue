<template>
  <div class="home">
    <AsideNav />
    <main class="home__main">Зайдите в квартиры или менеджеры</main>
  </div>
</template>

<script setup lang="ts">
import AsideNav from "../components/AsideNav.vue";
</script>

<style>
.home {
  display: flex;
  height: 100vh;
  width: 100vw;

  .home__main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
</style>
