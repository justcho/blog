<template>
  <div class="title">
    <span className="title-text">{{ nameVal }}</span>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  nameVal?: string;
}>();
</script>
<style lang="scss" scoped>
.title {
  align-items: center;
  display: flex;
  gap: 6px;

  .title-text {
    color: rgba(white, 0.9);
    font-size: 1.5em;
  }
}
</style>
