<template>
  <Title :nameVal="name" />
  <div class="dynamic">
    <div class="card" v-for="i in list" @click="toggle(i.url)">
      <div class="card-content" :style="{ backgroundImage: `url(${i.image})` }">
        <div class="card-content-items">
          <span class="card-title">{{ i.title }}</span>
          <span class="card-desc">{{ i.des }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Title from "./Title.vue";
const name = ref("开源项目");

const list = ref([
  {
    title: "Just Devise",
    des: "使用Vue3、TypeScript",
    image: "https://rizige.com/justcho/images/xm_1.jpg",
    url: "https://justcho.github.io/just-devise/",
  },
  {
    title: "记账-Vue版",
    des: "使用Vue、TypeScript",
    image: "https://rizige.com/justcho/images/xm_2.jpg",
    url: "https://justcho.gitee.io/money-website/#/money",
  },
  {
    title: "记账-React版",
    des: "使用React、TypeScript",
    image: "https://rizige.com/justcho/images/xm_3.jpg",
    url: "https://justcho.github.io/money-react-1/index.html#/money",
  },
  {
    title: "图床",
    des: "使用React、JavaScript",
    image: "https://rizige.com/justcho/images/xm_4.jpg",
    url: "https://justcho.github.io/pic-page/",
  },
  {
    title: "简易画板",
    des: "使用CSS、JavaScript",
    image: "https://rizige.com/justcho/images/xm_5.jpg",
    url: "https://justcho.gitee.io/canvas-draw/src/index.html",
  },
]);

const toggle = (e: string) => {
  const width = document.documentElement.clientWidth;
  if (e === "https://justcho.github.io/pic-page/" && width < 700) {
    window.alert("请使用电脑打开本页面，以保证浏览效果");
  } else {
    window.open(e);
  }
};
</script>
<style lang="scss" scoped>
$blue: rgb(66, 165, 245);

.dynamic {
  margin-top: 20px;
  display: flex;
  width: 100%;
  gap: 1em;

  flex-wrap: wrap;
  .card {
    height: 28vw;
    position: relative;
    overflow: hidden;
    box-shadow: 2px 2px 4px rgba(black, 0.25);
    border-radius: 10px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
    &:hover {
      flex: 2;
      transition: flex 250ms;
      .card-content {
        filter: grayscale(5%);
        .card-content-items {
          background: rgba(black, 0.4);
          transform: scale(1.25);
          color: #fff;
        }
      }
    }
    &:not(:hover) {
      flex: 1;
      transition: flex 250ms;
    }
    .card-content {
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 10px;
      height: 100%;
      width: 100%;
      filter: grayscale(100%);
      display: flex;
      justify-content: center;
      align-items: center;
      .card-content-items {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #a0a0a0;
        width: 100%;
        height: 100%;
        font-family: "just";

        .card-title {
          font-size: 2vw;
        }

        .card-desc {
          padding-top: 15px;
          font-size: 1.2vw;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .dynamic {
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    gap: 4.65vw;
    .card {
      width: 100%;
      height: 35vh !important;
      &:hover {
        flex: none;
        transition: none;
        .card-content {
          filter: none;
          .card-content-items {
            transform: none;
          }
        }
      }
      &:not(:hover) {
        flex: none;
        transition: none;
      }
      .card-content {
        filter: grayscale(5%);

        .card-content-items {
          background: rgba(black, 0.4);
          color: #fff;

          .card-title {
            font-size: 10vw;
          }

          .card-desc {
            padding-top: 35px;
            font-size: 6vw;
          }
        }
      }
    }
  }
}
</style>
