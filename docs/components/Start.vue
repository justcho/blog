<template>
  <div class="start-wrapper">
    <main class="container" :class="{ out: go }">
      <div class="container-time">
        <Time :pageValue="currentValue" />
        <button class="container-time-item" @click="toggle">
          <i>退出</i>
        </button>
      </div>
      <Tags />
      <div class="container-margin">
        <StaticBtn :title="name1" :cardList="list1" fontStyle />
      </div>

      <div class="container-margin">
        <StaticBtn :title="base" :cardList="baseList" fontStyle />
      </div>
      <div class="container-margin">
        <StaticBtn :title="frame" :cardList="frameList" fontStyle />
      </div>

      <div class="container-margin">
        <DynamicBtn />
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup="props, context">
import Time from "../helper/Time.vue";
import Tags from "../helper/Tags.vue";
import StaticBtn from "../helper/StaticBtn.vue";
import DynamicBtn from "../helper/DynamicBtn.vue";
import { ref } from "vue";

const name1 = ref("日常篇");

const list1 = ref([
  {
    title: "Review",
    des: "笔记",
    image: "/blog/images/dog.svg",
    url: "/blog/notes/personal/Personal",
  },
  {
    title: "Explore",
    des: "骚操作",
    image: "/blog/images/dog.svg",
    url: "/blog/notes/surprising/Surprising",
  },
  {
    title: "Instructions",
    des: "工具",
    image: "/blog/images/dog.svg",
    url: "/blog/notes/utils/Util",
  },
]);

const base = ref("基础篇");

const baseList = ref([
  {
    title: "JavaScript",
    des: "即时编译型编程语言",
    image: "/blog/images/JavaScript.svg",
    url: "/blog/notes/javascript/JS",
  },
  {
    title: "HTML",
    des: "超文本标记语言",
    image: "/blog/images/HTML.svg",
    url: "/blog/notes/html/HTML",
  },
  {
    title: "CSS",
    des: "层叠样式表",
    image: "/blog/images/CSS.svg",
    url: "/blog/notes/css/CSS",
  },

  {
    title: "NodeJS",
    des: "开源的、跨平台的运行时环境",
    image: "/blog/images/nodejs.svg",
    url: "/blog/notes/nodejs/NODEJS",
  },
]);
const frame = ref("框架篇");

const frameList = ref([
  {
    title: "Vue 3",
    des: "渐进式 JavaScript 框架3.0",
    image: "/blog/images/vue3.png",
    url: "/blog/notes/vue3/VUE3",
  },
  {
    title: "Vue",
    des: "渐进式 JavaScript 框架2.0",
    image: "/blog/images/vue2.png",
    url: "/blog/notes/vue/VUE",
  },
  {
    title: "React",
    des: "用于构建用户界面的库",
    image: "/blog/images/react.svg",
    url: "/blog/notes/react/REACT",
  },
]);
const props = defineProps<{
  currentValue?: "guide" | "loading" | "start";
}>();

const emit = defineEmits<{
  (e: "update:currentValue", currentValue: "guide" | "loading" | "start"): void;
}>();
const go = ref(false);

const toggle = () => {
  go.value = true;
  setTimeout(() => {
    emit("update:currentValue", "guide");
  }, 700);
};
</script>
<style lang="scss" scoped>
.start-wrapper {
  background: linear-gradient(to top, rgba(black, 0.8), transparent);
  width: 100%;
  height: 92vh;
  &::-webkit-scrollbar-track {
    background-color: gray(30);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(white, 0.2);
    border-radius: 100px;
  }
  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }
  overflow-y: scroll;
  .out {
    animation: slideOut 750ms !important;
  }
  .container {
    padding: 15vh 8vw 4vh 8vw;
    animation: slideIn 750ms;
    .container-time {
      justify-content: space-between;
      align-items: center;
      width: 100%;
      display: flex;

      .container-time-item {
        background-color: rgba(white, 0.1);
        border: 1px solid rgba(white, 0.1);
        border-radius: 100px;
        box-shadow: 2px 2px 2px rgba(white, 0.1);
        cursor: pointer;
        outline: none;
        padding: 8px;
        width: 100px;
        -webkit-tap-highlight-color: transparent;
        -moz-tap-highlight-color: transparent;
        > i {
          color: #fff;
          font-size: 1.25em;
          // font-family: "just";
        }
        &:hover {
          background-color: rgba(white, 0.2);
          border: 1px solid rgba(white, 0.2);
        }
      }
    }

    .container-margin {
      margin-top: 60px;
    }
  }
}
@media (max-width: 600px) {
  .start-wrapper {
    &::-webkit-scrollbar {
      height: 0px;
      width: 0px;
    }
  }
  .container-time-item {
    width: 60px !important;
    padding: 4px !important;
  }
  .container-margin {
    margin-top: 45px !important;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(2%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(2%);
    opacity: 0;
  }
}
</style>
