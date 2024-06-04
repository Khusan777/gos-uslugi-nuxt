<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})

const isActive = ref(false)
const toggle = () => (isActive.value = !isActive.value)
</script>

<template>
  <div @click="toggle" class="dropdown_list">
    <div>
      <p class="text">
        {{ item.text }}
      </p>
      <img
        v-if="!isActive"
        src="@/assets/icons/icon-down.svg"
        class="icon"
        alt=""
      />
      <img v-else src="@/assets/icons/icon-up.svg" class="icon" alt="" />
    </div>
    <p v-show="isActive" class="description">
      {{ item.desc }}
    </p>
  </div>
  <div class="border_arrow"></div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/global';

.dropdown_list {
  & div {
    cursor: pointer;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }
}
.text {
  width: calc(100% - 39px);
  color: $text-night-primary;
  font-family: 'Golos Text', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}
.icon {
  width: 24px;
}
.description {
  padding: 10px 20px;
  color: $gray-light;
  font-family: 'Golos Text', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
}
.border_arrow {
  margin: 10px 20px;
  border: 1px solid rgba(179, 183, 206, 0.2);
}
</style>
