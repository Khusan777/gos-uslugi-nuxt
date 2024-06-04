<template>
  <HeaderGosUslugi isBackground right left title="Штрафы"></HeaderGosUslugi>
  <div class="help_screen_container">
    <div class="help_screen">
      <div>
        <p class="title">Штрафы</p>
        <p class="subtitle">Об оплате штрафов по административным делам</p>
      </div>
      <div>
        <img src="@/assets/icons/help-screen/service-icon.svg" alt="" />
      </div>
    </div>
    <div v-for="item in items" :key="item">
      <ToggleListItem :item="item"></ToggleListItem>
    </div>
  </div>
</template>

<script setup>
import HeaderGosUslugi from '@/components/ui/HeaderGosUslugi.vue'
import ToggleListItem from '@/components/ui/ToggleListItem.vue'

const items = reactive([
  {
    text: 'В течении какого срока можно оплатить штраф в размере 50% от суммы наложенного штрафа?',
    desc: 'Lorem kdndkvn mdlvdmvldvml mldvmdlv,dlv,d l,v;dv,dlv, dcdvdvd ijigbjtgvdkovd fvmodvmfovfmk fovjdofjm okvdokfovf dkvdvkd'
  },
  {
    text: 'В течении какого срока можно оплатить штраф в размере 50% от суммы наложенного штрафа?',
    desc: 'Lorem kdndkvn mdlvdmvldvml mldvmdlv,dlv,d l,v;dv,dlv, dcdvdvd ijigbjtgvdkovd fvmodvmfovfmk fovjdofjm okvdokfovf dkvdvkd'
  },
  {
    text: 'В течении какого срока можно оплатить штраф в размере 50% от суммы наложенного штрафа?',
    desc: 'Lorem kdndkvn mdlvdmvldvml mldvmdlv,dlv,d l,v;dv,dlv, dcdvdvd ijigbjtgvdkovd fvmodvmfovfmk fovjdofjm okvdokfovf dkvdvkd'
  }
])
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global';

.help_screen_container {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100% - 50px);
  height: calc(100% - 50px);
  & .help_screen {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 24px 24px;
    margin-bottom: 20px;
    background-color: #19191e;
    & div {
      padding: 20px;
    }
    & .title {
      color: $text-night-primary;
      font-family: 'Golos Text', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 8px;
    }
    & .subtitle {
      color: $gray-light;
      font-family: 'Golos Text', sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
  }
}
</style>
