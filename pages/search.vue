<template>
  <HeaderGosUslugi right left title="Все услуги" />
  <SearchText :full-width="true" />
  <GosUslugiList />
</template>

<script setup>
import HeaderGosUslugi from "@/components/ui/HeaderGosUslugi.vue";
import SearchText from "@/components/ui/SearchText.vue";
import GosUslugiList from "@/components/GosUslugiList.vue";
</script>
