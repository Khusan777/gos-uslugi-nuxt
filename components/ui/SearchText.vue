<script setup>
import { useRouter } from "vue-router";

defineProps({
  fullWidth: {
    type: Boolean,
  },
  title: {
    type: String,
    default: "Поиск госуслуг",
  },
  icon: {
    type: Boolean,
  },
});

const router = useRouter();
const searchItem = ref(null);

watch(
  () => searchItem.value,
  debounce(() => {
    router.push({ name: "search" });
  }, 1600),
);
</script>

<template>
  <section class="search">
    <input
      v-model="searchItem"
      :class="fullWidth ? 'fullWidth' : null"
      class="search-field"
      type="text"
      :placeholder="title"
    />
    <div v-if="icon" class="notification_icon">
      <img
        class="notification-img"
        src="@/assets/icons/notification.svg"
        alt=""
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search {
  padding: 16px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  & .notification-img {
    border-radius: 10px;
    padding: 8px;
    background-color: #34353f;
    & div {
      flex: 1;
      padding: 10px 20px 10px 20px;
    }
    &.notification_icon {
      display: block;
      flex: 0;
      margin-left: 15px;
    }
  }
}
.search-field {
  height: 35px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #34353f url("@/assets/icons/icon-search.svg") no-repeat left;
  background-position: 8px center;
  padding-left: 34px;
  font-family: "Golos Text", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #b3b7ce;
  width: calc(100% - 99px);
}
.search-field.fullWidth {
  width: 100%;
}
</style>
