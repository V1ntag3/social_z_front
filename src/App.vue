<script setup>
import LoginView from './views/LoginView.vue'
</script>

<template>
  <router-view></router-view>
</template>

<style>
@import './assets/fonts-Poppins.css';

:root {
  --color1: #2c463f;
  --color2: #403831;
  --color3: #36544f;
  --color4: #1f5f61;
  --color5: #0b8185;
}

* {
  padding: 0px;
  margin: 0px;
  font-family: 'Poppins-Regular';
  transition: 0.5s;
}

html {
  height: 100vh;
  width: 100vw;

}

body {
  margin: 0px !important;

  background-color: var(--color1) !important;
}
</style>
