<template>
  <section class="gos-uslugi-card">
    <div class="gos-uslugi">
      <p class="title">Каталог</p>
    </div>
    <div class="gos-uslugi-panels">
      <div class="panel-service-1">
        <p class="title">Транспорт</p>
        <img class="img-service" src="@/assets/img/CarInsurance.svg" alt="" />
      </div>
      <div class="panel-service-2">
        <p class="title">Справки</p>
        <img class="img-service" src="@/assets/img/InsuranceContract.svg" alt="" />
      </div>
      <div class="panel-service-3">
        <p class="title">Налоги</p>
        <img class="img-service" src="@/assets/img/InsuranceCalculation.svg" alt="" />
      </div>
      <div class="panel-service-4">
        <p class="title">Все услуги</p>
        <img class="img-service" src="@/assets/img/HouseInsurance.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/global';

.gos-uslugi-card {
  & .gos-uslugi {
    display: flex;
    padding: 20px 20px 9px;
    & .title {
      color: $gray-light;
      font-family: 'Golos Text', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
}
.gos-uslugi-panels {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  padding: 0px 20px 17px;
  grid-gap: 10px;
  & .title {
    color: $text-night-primary;
    font-family: 'Golos Text', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-left: 10px;
    padding-top: 10px;
  }
  & .panel-service-1 {
    position: relative;
    grid-column: span 2 / span 2;
    height: 87px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #19191e;
    & img {
      position: absolute;
      right: -3px;
      top: -2px;
      bottom: 6px;
      width: 89px;
      height: 89px;
    }
  }
  & .panel-service-2 {
    position: relative;
    grid-column: span 1 / span 1;
    height: 87px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #19191e;
    & img {
      position: absolute;
      right: -3px;
      top: -2px;
      bottom: 6px;
      width: 89px;
      height: 89px;
    }
  }
  & .panel-service-3 {
    position: relative;
    grid-column: span 1 / span 1;
    height: 87px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #19191e;
    & img {
      position: absolute;
      right: -3px;
      top: -2px;
      bottom: 6px;
      width: 89px;
      height: 89px;
    }
  }
  & .panel-service-4 {
    position: relative;
    grid-column: span 2 / span 2;
    height: 87px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #19191e;
    & img {
      position: absolute;
      right: -3px;
      top: -2px;
      bottom: 6px;
      width: 89px;
      height: 89px;
    }
  }
}
//@media screen and (max-width: 320px) {
//  .panel-service-1 img.img-service {
//    width: 45px;
//    height: 95px;
//  }
//  .panel-service-4 img.img-service {
//    width: 45px;
//    height: 95px;
//  }
//}
//@media screen and (max-width: 400px) {
//  .panel-service-1 img.img-service {
//    width: 90px;
//    height: 90px;
//  }
//  .panel-service-4 img.img-service {
//    width: 70px;
//    height: 80px;
//  }
//}
//@media screen and (max-width: 430px) {
//  .panel-service-2 img.img-service {
//    width: 45px;
//    height: 95px;
//  }
//  .panel-service-3 img.img-service {
//    width: 45px;
//    height: 95px;
//  }
//}
</style>
