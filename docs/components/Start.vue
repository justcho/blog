<template>
  <div class="start-wrapper">
    <main class="container">
      <div class="container-time">
        <Time :pageValue="currentValue" />
        <button class="container-time-item" @click="toggle">
          <i>退出</i>
        </button>
      </div>
      <Tags />
      <div class="container-margin">
        <StaticBtn :title="name1" :cardList="list1" />
      </div>

      <div class="container-margin">
        <StaticBtn :title="base" :cardList="baseList" />
      </div>
      <div class="container-margin">
        <StaticBtn :title="frame" :cardList="frameList" />
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
    title: "Mana",
    des: "Lovely around",
    image: "/images/dog.svg",
    url: "",
  },
  {
    title: "Mana",
    des: "Lovely around",
    image: "/images/dog.svg",
    url: "",
  },
  {
    title: "Mana",
    des: "Lovely around",
    image: "/images/dog.svg",
    url: "",
  },
  {
    title: "Mana",
    des: "Lovely around",
    image: "/images/dog.svg",
    url: "",
  },
  {
    title: "Mana",
    des: "Lovely around",
    image: "/images/dog.svg",
    url: "",
  },
]);

const base = ref("基础篇");

const baseList = ref([
  {
    title: "JavaScript",
    des: "JavaScript",
    image: "/images/JavaScript.svg",
    url: "",
  },
  {
    title: "HTML5",
    des: "HTML5",
    image: "/images/HTML.svg",
    url: "",
  },
  {
    title: "CSS3",
    des: "控制样式和布局",
    image: "/images/CSS.svg",
    url: "",
  },

  {
    title: "NodeJS",
    des: "服务器端运行",
    image: "/images/nodejs.svg",
    url: "",
  },
]);
const frame = ref("框架篇");

const frameList = ref([
  {
    title: "Vue 3",
    des: "渐进式 JavaScript 框架",
    image: "/images/vue3.png",
    url: "/notes/vue3/前言",
  },
  {
    title: "Vue",
    des: "Vue 2",
    image: "/images/vue2.png",
    url: "/notes/vue/前言",
  },
  {
    title: "React",
    des: "JavaScript 库",
    image: "/images/react.svg",
    url: "/notes/react/前言",
  },
]);
const props = defineProps<{
  currentValue?: "guide" | "loading" | "start";
}>();

const emit = defineEmits<{
  (e: "update:currentValue", currentValue: "guide" | "loading" | "start"): void;
}>();

const toggle = () => {
  emit("update:currentValue", "guide");
};
</script>
<style lang="scss" scoped>
.start-wrapper {
  background: linear-gradient(to top, rgba(black, 0.8), transparent);
  width: 100%;
  min-height: 92vh;

  .container {
    padding: 20vh 8vw 4vh 8vw;
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
        > i {
          color: #fff;
          font-size: 1.25em;
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
  }
}
</style>
