<script setup>
// import { reactive } from 'vue'

// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Pagination } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'

// const breakpoints = reactive({
//   200: {
//     slidesPerView: 3.5
//   },
//   360: {
//     slidesPerView: 4.3
//   },
//   450: {
//     slidesPerView: 5
//   },
//   550: {
//     slidesPerView: 6
//   },
//   650: {
//     slidesPerView: 7
//   },
//   750: {
//     slidesPerView: 8
//   },
//   850: {
//     slidesPerView: 9
//   }
// })
</script>

<template>
  <section class="popular-services">
    <div class="services">
      <div v-for="i in 8" :key="i" class="service">
        <div class="service-item">
          <img src="@/assets/icons/popular-services/bank.svg" alt="" />
          <p class="service-text">Определение ИНН</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/global";

.popular-services {
  margin-top: 15px;
  border-radius: 24px;
  & p.title {
    padding: 10px 180px 16px 20px;
    color: $gray-light;
    font-family: "Golos Text", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & .services {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: calc(100% - 40px);
    gap: 15px;
    padding: 0px 20px 0px 20px;
  }
  & .service-item {
    row-gap: 5px;
    display: flex;
    width: 70px;
    flex-direction: column;
    align-items: center;
    & img {
      display: flex;
      align-items: flex-start;
      padding: 7px;
      border: 1px solid #4b4b59;
      border-radius: 12px;
      background-color: rgba(87, 89, 101, 0.35);
    }
    & p.service-text {
      flex: 1 0 0;
      color: $text-night-primary;
      text-align: center;
      font-family: "Golos Text", sans-serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 13px;
    }
  }
}
.service {
  width: calc(25% - 11.5px);
}
@media screen and (max-width: 360px) {
  .popular-services {
    width: 380px;
  }
  popular-services {
    & .services {
      padding: 1px 15px 8px 20px;
      gap: 7px;
    }
  }
}
</style>
