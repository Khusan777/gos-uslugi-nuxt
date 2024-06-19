<template>
  <div class="user-container">
    <div>
      <div class="user-info">
        <img class="user-img" src="@/assets/icons/user.svg" alt="user" />
        <div>
          <p class="name">Ulugbek</p>
          <p class="telephone">99899566565</p>
        </div>
      </div>
    </div>
    <div>
      <img
        style="width: 30px; height: 30px"
        src="@/assets/icons/question.svg"
        alt="question"
      />
      <img
        style="width: 30px; height: 30px; padding-left: 10px"
        src="@/assets/icons/notification.svg"
        alt="notification"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/global" as color;

.user-container {
  padding: 10px 20px 0;
  display: flex;
  justify-content: space-between;
  & .user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    & .user-img {
      width: 30px;
      height: 30px;
    }
    & .name {
      padding-bottom: 2px;
      font-weight: 700;
      font-size: 16px;
      color: color.$text-night-primary;
    }
    & .telephone {
      font-weight: 700;
      font-size: 16px;
      color: #b3b7ce;
    }
  }
}
</style>

<script setup lang="ts"></script>
