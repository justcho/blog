<template>
  <div
    class="wrapper"
    :class="
      comValue === 'loading' ? 'overlay' : comValue === 'guide' ? '' : 'start'
    "
  >
    <component :is="currentCom" v-model:currentValue="comValue"></component>
  </div>
</template>

<script lang="ts" setup>
import { onUpdated, shallowRef, ref } from "vue";
import Guide from "./Guide.vue";
import Start from "./Start.vue";
import Loading from "./Loading.vue";

const currentCom = shallowRef(Guide);
const comValue = ref("guide");

onUpdated(() => {
  switch (comValue.value) {
    case "guide":
      currentCom.value = Guide;
      break;
    case "loading":
      currentCom.value = Loading;
      break;
    case "start":
      currentCom.value = Start;
      break;
  }
});
</script>

<style lang="scss">
$backgroundImage: "/images/bg.jpg";

.wrapper {
  height: 92vh;
  width: 100%;
  background: url($backgroundImage) no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.overlay {
  background: none;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 92vh;
    width: 100%;
    filter: blur(10px);
    // transform: scale(0.99);
    animation: auto-scale-small 1.2s;

    background: url($backgroundImage) no-repeat;
    background-size: 100% 100%;
  }
}
.start {
  animation: auto-scale 750ms;
}
@media (max-width: 600px) {
  .wrapper {
    background-position: center center;
    background-size: cover;
  }
}
@keyframes auto-scale {
  0% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes auto-scale-small {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.98);
  }
}
</style>
