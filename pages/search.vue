<template>
  <HeaderGosUslugi right left title="Все услуги"></HeaderGosUslugi>
  <SearchText :full-width="true"></SearchText>
  <GosUslugiList></GosUslugiList>
</template>

<script setup>
import HeaderGosUslugi from '@/components/ui/HeaderGosUslugi.vue'
import SearchText from '@/components/ui/SearchText.vue'
import GosUslugiList from '@/components/GosUslugiList.vue'
</script>
