<template>
  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store: any = useStore();
const router = useRouter();

if (store.isLoggedIn === true) {
  router.push("/");
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "SF Pro Display", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
