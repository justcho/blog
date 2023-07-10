<template>
  <Title :nameVal="title" />
  <div class="static">
    <div
      class="card"
      v-for="i in cardList"
      :style="{ backgroundImage: `url(${i.image})` }"
      @click="toggle(i.url)"
    >
      <div class="card-content">
        <div class="card-content-items">
          <span class="card-title">{{ i.title }}</span>
          <span class="card-desc">{{ i.des }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Title from "./Title.vue";
const props = defineProps<{
  title?: String;
  cardList?: Array<{
    title: string;
    des: string;
    image: string;
    url: string;
  }>;
}>();

const toggle = (e) => {
  if (e.length !== 0) {
    window.open(e);
  } else {
    alert("敬请期待...");
  }
};
</script>

<style lang="scss" scoped>
$blue: rgb(66, 165, 245);

.static {
  margin-top: 15px;
  padding-top: 5px;
  display: flex;
  gap: 1em;
  width: 100%;
  .card {
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(black, 0.25);
    cursor: pointer;
    height: 15vw;
    position: relative;
    transition: transform 250ms;
    // width: 25%;
    flex: 1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    &:hover {
      transform: translateY(-5px);

      .card-content {
        .card-content-items {
          margin-bottom: 25px;
        }
      }
    }

    .card-content {
      background: linear-gradient(to top, rgba(black, 0.8), transparent);
      border-radius: 10px;
      height: 100%;
      width: 100%;

      .card-content-items {
        bottom: 0px;
        display: flex;
        flex-direction: column;
        margin: 15px;
        position: absolute;
        right: 0px;
        text-align: right;
        transition: margin 250ms;

        .card-title {
          color: #fff;
          font-size: 1.5em;
        }

        .card-desc {
          color: $blue;
          font-size: 0.9em;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .static {
    display: flex;
    flex-direction: column;
    gap: 4.65vw;
    .card {
      flex: none;
      width: 100%;
      height: 20vh;
      &:hover {
        transform: none;
        .card-content {
          .card-content-items {
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
@media (min-width: 601px) and (max-width: 1024px) {
  .static {
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    .card {
      flex: none;
      width: 48.5%;
      height: 20vh;
      &:hover {
        transform: none;
        .card-content {
          .card-content-items {
            margin-bottom: 15px;
          }
        }
      }
      .card-content {
        .card-content-items {
          transition: none;
        }
      }
    }
  }
}
</style>
