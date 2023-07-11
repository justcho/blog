<template>
  <div class="tags">
    <button class="tags-item" v-for="i in list">
      <i>{{ i }}</i>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const list = ref(["日常", "学习", "笔记", "分享"]);
</script>
<style lang="scss" scoped>
.tags {
  .tags-item {
    background-color: rgba(white, 0.1);
    border: 1px solid rgba(white, 0.1);
    border-radius: 100px;
    cursor: not-allowed;
    outline: none;
    padding: 2px 20px;
    font-family: "just";

    &:nth-child(even) {
      margin: 0 10px;
    } //奇数行
    > i {
      color: #fff;
      font-size: 1.25em;
    }
  }
}

@media (max-width: 600px) {
  .tags {
    // margin-top: 20px !important;
    .tags-item {
      padding: 0 10px !important;
      &:nth-child(even) {
        margin: 0 8px !important;
      } //奇数行
      > i {
        font-size: 0.8em !important;
      }
    }
  }
}
</style>
