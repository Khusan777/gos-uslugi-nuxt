<script setup>
import HeaderGosUslugi from "@/components/ui/HeaderGosUslugi.vue";
import SearchText from "@/components/ui/SearchText.vue";
import HelpSection from "@/components/ui/HelpSection.vue";
import PopularServices from "@/components/PopularServices.vue";
import GosUslugiCard from "@/components/GosUslugiCard.vue";
import FooterNavigation from "@/components/FooterNavigation.vue";

const loading = ref(false);
</script>

<template>
  <template v-if="loading">
    <div class="loader">
      <div />
      <div>
        <img src="@/assets/click-icon.svg" alt="" />
      </div>
      <p class="footer_text">
        При поддержки Государственных услуг Республики Узбекистан
      </p>
    </div>
  </template>
  <template v-else>
    <div class="container">
      <HeaderGosUslugi title="Госуслуги" />
      <div class="main_container">
        <UiUserData></UiUserData>
        <main>
          <SearchText :full-width="true" />
          <!--          <p-->
          <!--            style="-->
          <!--              color: white;-->
          <!--              user-select: all;-->
          <!--              padding-left: 20px;-->
          <!--              padding-top: 10px;-->
          <!--            "-->
          <!--          >-->
          <!--            {{ getCookie("web-session") }}-->
          <!--          </p>-->
          <HelpSection />
          <!--          <ServicesBlock />-->
          <PopularServices />
          <GosUslugiCard />
        </main>
      </div>
      <div class="footer_container">
        <FooterNavigation />
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/global" as color;

.loader {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 100%;
  & .footer_text {
    color: color.$gray-light;
    text-align: center;
    font-family: "Golos Text", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    padding-bottom: 20px;
    line-height: normal;
  }
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  & .main_container {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: calc(100% - 138px);
    height: calc(100% - 138px);
  }
  & .footer-container {
    max-height: 70px;
    padding: 10px 10px 20px;
    background-color: color.$color-styles-night;
  }
}
</style>
