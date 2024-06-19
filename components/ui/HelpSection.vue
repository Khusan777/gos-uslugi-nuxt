<template>
  <section class="help">
    <p class="help_text">Популярные</p>
    <p class="all_text">
      Все услуги
      <img
        class="icon_arrow"
        src="@/assets/icons/icon-arrow-small.svg"
        alt=""
      />
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/global";

.help {
  font-family: "Golos Text", sans-serif;
  padding: 20px 20px 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .help_text {
    color: $gray-light;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    font-weight: 600;
  }
  & .all_text {
    color: #0073ff;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    align-self: center;
    line-height: normal;
  }
  & .icon_arrow {
    color: #0073ff;
    vertical-align: middle;
    margin-left: 4px;
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
