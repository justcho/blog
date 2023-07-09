<template>
  <span class="time" :class="{ startTime: pageValue === 'start' }">
    {{ currentTime }}</span
  >
</template>
<script lang="ts" setup="props, context">
import { onMounted, onBeforeUnmount, ref } from "vue";

const props = defineProps<{
  pageValue?: "guide" | "start";
}>();

const currentTime = ref("");
let timer;
const getTime = () => {
  currentTime.value = new Date().toTimeString().substring(0, 5); //  '10:55:24'
};
onMounted(() => {
  // 初始化时间
  getTime();
  // 每秒钟更新一次时间
  timer = setInterval(getTime, 1000);
});
// 在组件销毁前清除定时器
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
<style lang="scss" scoped>
.time {
  color: #fff;
  font-size: 10em;
  text-shadow: 2px 2px 2px rgba(black, 0.1);
}
.startTime {
  font-size: 6em;
}

@media (max-width: 600px) {
  .time {
    font-size: 6em;
  }

  .startTime {
    font-size: 3em;
  }
}
</style>
