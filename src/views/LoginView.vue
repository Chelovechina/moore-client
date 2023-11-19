<template>
  <div class="wrapper">
    <div class="login">
      <h1 class="title">Email: test@gmail.com<br />Пароль: abcd</h1>
      <MyInput id="name" type="text" label="Введите email" set="setEmail" :value="state.email" />
      <MyInput id="password" type="password" label="Введите пароль" set="setPassword" :value="state.password" />
      <MyBtn text="Войти" mutation="login" />
    </div>
  </div>
  <div class="bg"></div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import MyInput from "./../components/UI/MyInput.vue";
import MyBtn from "./../components/UI/MyBtn.vue";

const { state } = useStore();
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  opacity: 0.3;
  background: #000;
}

.login {
  position: relative;
  z-index: 5;
  width: 500px;
  background: #fff;
  padding: 50px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  color: #000;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 30px;
}
</style>
