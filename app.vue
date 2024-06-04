<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
if(window?.visualViewport?.height){
  document.documentElement.style.height = window.visualViewport.height + 'px'
}
</script>

<style lang="scss">
@import '@/assets/fonts/fonts';
@import '@/assets/reset.css';
@import "@/assets/styles/global";

body {
  user-select: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #242429;
  overflow: hidden;
}
</style>

