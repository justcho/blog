<template>
  <div>
    <div class="info" :class="{ control: currentValue === 'guide' }">
      <Time :pageValue="currentValue" />
    </div>
    <div class="login" :class="{ control: currentValue === 'guide' }">
      <button class="login-button" @click="toggle">
        <i>开始</i>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup="props, context">
import Time from "../helper/Time.vue";

const props = defineProps<{
  currentValue?: "guide" | "loading" | "start";
}>();

const emit = defineEmits<{
  (e: "update:currentValue", currentValue: "guide" | "loading" | "start"): void;
}>();
const toggle = () => {
  emit("update:currentValue", "loading");
};
</script>

<style lang="scss" scoped>
$yellow: rgb(253, 216, 53);

.info {
  top: 27vh;
  width: 100%;
  position: absolute;
  justify-content: center;
  display: flex;
  opacity: 0;
}
.control {
  animation: fade-in 750ms linear;
  opacity: 1;
}
.login {
  position: absolute;
  bottom: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;

  .login-button {
    background-color: rgba(white, 0.1);
    border: 1px solid rgba(white, 0.1);
    border-radius: 100px;
    box-shadow: 2px 2px 2px rgba(white, 0.1);
    cursor: pointer;
    outline: none;
    padding: 8px;
    width: 100px;
    > i {
      color: #fff;
      font-size: 1.25em;
    }
    &:hover {
      background-color: rgba(white, 0.2);
      border: 1px solid rgba(white, 0.2);
    }
    &:not(:hover) {
      animation: bounce 3s infinite;
      animation-delay: 1s;
    }
  }
}

// 跳动动画
@keyframes bounce {
  from,
  6.66%,
  17.66%,
  33.33% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  13.33%,
  14.33% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  23.33% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  26.66% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  30% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}

// 淡出
@keyframes fade-in {
  from,
  25%,
  to {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: 600px) {
  .info {
    top: 13vh;
    .time {
      font-size: 6em;
    }
  }
  .start {
    bottom: 15vh;
  }
}
</style>
