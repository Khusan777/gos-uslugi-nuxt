<template>
  <section class="help">
    <p class="help_text">Помощь</p>
    <p class="all_text">
      Смотреть всё <img class="icon_arrow" src="@/assets/icons/icon-arrow-small.svg" alt="" />
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/global';

.help {
  font-family: 'Golos Text', sans-serif;
  padding: 20px 20px 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .help_text {
    color: $gray-light;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & .all_text {
    color: $text-night-primary;
    font-family: 'Golos Text', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    align-self: center;
    line-height: normal;
  }
  & .icon_arrow {
    vertical-align: middle;
    margin-left: 8px;
  }
}
.help p {
  color: $gray-light;
  text-align: start;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
