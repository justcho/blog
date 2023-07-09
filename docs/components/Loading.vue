<template>
  <div class="loading-item">
    <svg
      class="spinner"
      width="5vh"
      height="5vh"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="path"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  </div>
</template>
<script lang="ts" setup="props, context">
import { onMounted } from "vue";

const props = defineProps<{
  currentValue?: "guide" | "loading" | "start";
}>();
const emit = defineEmits<{
  (e: "update:currentValue", currentValue: "guide" | "loading" | "start"): void;
}>();
const toggle = () => {
  emit("update:currentValue", "start");
};
onMounted(() => {
  setTimeout(() => {
    toggle();
  }, 1200);
});
</script>

<style lang="scss" scoped>
$offset: 187;
$duration: 1.2s;

.loading-item {
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  .spinner {
    animation: rotator $duration linear infinite;
    .path {
      stroke-dasharray: $offset;
      stroke-dashoffset: 0;
      transform-origin: center;
      animation: dash $duration ease-in-out infinite,
        colors ($duration * 4) ease-in-out infinite;
    }
  }
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

@keyframes colors {
  0% {
    stroke: #2e90c7;
  }
  25% {
    stroke: #dde7f3;
  }
  50% {
    stroke: #fbb946;
  }
  75% {
    stroke: #f9694a;
  }
  100% {
    stroke: #d02e7d;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: calc($offset/4);
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>
