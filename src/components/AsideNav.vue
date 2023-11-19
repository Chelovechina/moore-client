<template>
  <nav class="nav">
    <div class="nav__search">
      <img src="./../assets/search.svg" alt="Search button" />
    </div>
    <ul class="nav__list">
      <NavItem to="/home" text="Главная" :isActive="false" />
      <NavItem to="/home" text="Отчеты" :isActive="false" />
      <NavItem to="/apartments" text="Квартиры" :isActive="false" />
      <NavItem to="/managers" text="Менеджеры" :isActive="false" />
      <NavItem to="/home" text="Бронирования" :isActive="false" />
    </ul>
    <div class="nav__line">
      <div class="line__item" />
    </div>
    <div class="nav__subnav">
      <NavItem to="/home" exact text="Редак. сайта" :isActive="false" />
      <NavItem to="/home" exact text="Уведомление" :isActive="false" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavItem from "./UI/NavItem.vue";
</script>

<style scoped>
.nav {
  position: sticky;
  min-width: 190px;
  padding: 5px;

  .nav__search {
    padding: 25px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 88px;
  }

  .nav__list {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .nav__line {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .nav__subnav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 322px;
    padding: 10px 0;
  }

  .nav__text {
    border-radius: 10px;
    color: #000;
    font-size: 16px;
    font-weight: 300;
  }
}

.line__item {
  width: 130px;
  height: 1px;
  opacity: 0.1;
  background: #000;
  text-align: center;
}
</style>
