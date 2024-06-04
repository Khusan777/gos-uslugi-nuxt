<script setup>
const router = useRouter()
const iconArrowClicked = () => {
  router.go(-1)
}

defineProps({
  title: {
    type: String,
    default: 'Госуслуги'
  },
  left: {
    type: Boolean
  },
  right: {
    type: Boolean
  },
  isBackground: {
    type: Boolean
  }
})
</script>

<template>
  <header>
    <div :class="{ isBackground: isBackground }" class="header-items">
      <img style="width: 25px" v-if="left" @click="iconArrowClicked" src="@/assets/icons/icon-arrow.svg" alt="" />
      <div v-else class="header-left"></div>
      <p v-if="title" class="header-text">{{ title }}</p>
      <div class="header-right"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/global';

header {
  max-height: 50px;
  height: 50px;
  & .isBackground {
    background-color: #19191e;
  }
  & .header-items {
    padding: 30px 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    & .header-text {
      font-family: 'Golos Text', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: $text_color;
    }
    & img {
      cursor: pointer;
    }
  }
}
</style>
