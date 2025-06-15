<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useEventListener, useParallax, useThrottleFn } from '@vueuse/core'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'
import HomeSponsors from '../home/home-sponsors.vue'
import HomeCards from '../home/home-cards.vue'
import HomeFooter from './vp-footer.vue'
import type { CSSProperties } from 'vue'
import { isDark } from '~/composables/dark'

const target = ref<HTMLElement | null>(null)
const parallax = reactive(useParallax(target))
const jumbotronRedOffset = ref(0)
const jumbotronRef = ref<HTMLElement | null>(null)
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])

function jumpTo(path: string) {
  // vitepress has not router
  location.href = `/${lang.value}/${path}`
}

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '.3s ease-out all',

  position: 'relative',

  perspective: '300px',
}

const cardStyle = computed(() => ({
  height: '30rem',
  width: '100%',
  transition: '.3s ease-out all',
  transform: `rotateX(${parallax.roll}deg) rotateY(${parallax.tilt}deg)`,
}))

const layerBase: CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  transition: '.3s ease-out all',
}

const screenLayer = computed(() => ({
  ...layerBase,
  width: '80%',
  height: '80%',
  transform: `translateX(${parallax.tilt * 10 + 80}px) translateY(${
    parallax.roll * 10 + 50
  }px)`,
}))

const peopleLayer = computed(() => ({
  ...layerBase,
  width: '30%',
  height: '30%',
  right: 0,
  bottom: 0,
  transform: `translateX(${parallax.tilt * 25 + 25}px) translateY(${
    parallax.roll * 25
  }px) scale(1)`,
}))

// center layer
const leftLayer = computed(() => ({
  ...layerBase,
  width: '20%',
  height: '20%',
  transform: `translateX(${parallax.tilt * 12 + 205}px) translateY(${
    parallax.roll * 12 + 210
  }px)`,
}))

const leftBottomLayer = computed(() => ({
  ...layerBase,
  width: '30%',
  height: '30%',
  left: 0,
  bottom: 0,
  transform: `translateX(${parallax.tilt * 30 - 10}px) translateY(${
    parallax.roll * 30
  }px)`,
}))

const rightLayer = computed(() => ({
  ...layerBase,
  width: '33%',
  height: '33%',
  top: 0,
  right: 0,
  transform: `translateX(${parallax.tilt * 25 + 5}px) translateY(${
    parallax.roll * 25
  }px)`,
}))

const handleScroll = useThrottleFn(() => {
  const ele = jumbotronRef.value
  if (ele) {
    const rect = ele.getBoundingClientRect()
    const eleHeight = ele.clientHeight
    let calHeight = (180 - rect.top) * 2
    if (calHeight < 0) calHeight = 0
    if (calHeight > eleHeight) calHeight = eleHeight
    jumbotronRedOffset.value = calHeight
  }
}, 10)

useEventListener(window, 'scroll', handleScroll)
</script>

<template>
  <div ref="target" class="home-page">
    <div class="banner" text="center">
      <div class="banner-desc">
        <h1>{{ homeLang['title'] }}</h1>
        <p>{{ homeLang['title_sub'] }}</p>
      </div>
    </div>
    <div ref="jumbotronRef" class="jumbotron">
      <div class="parallax-container" :style="containerStyle">
        <div :style="cardStyle">
          <screen-svg :style="screenLayer" alt="banner" />
          <people-svg
            :style="peopleLayer"
            alt="banner"
            class="cursor-pointer"
            @click="jumpTo('guide/quickstart.html')"
          />
          <left-layer-svg :style="leftLayer" alt="banner" />
          <left-bottom-layer-svg :style="leftBottomLayer" alt="banner" />
          <right-layer-svg :style="rightLayer" alt="banner" />
        </div>
      </div>
    </div>
    <img
      :src="`/images/theme-index-blue${isDark ? '-dark' : ''}.png`"
      alt="banner"
      class="mobile-banner"
    />
    <HomeSponsors />
    <HomeCards />
  </div>
  <HomeFooter :is-home="true" />
</template>

<style lang="scss">
@use '../../styles/mixins' as *;

.home-page {
  .mobile-banner {
    display: none;
  }

  .banner-dot h1 span {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      right: -12px;
      bottom: 8px;
      background: var(--el-color-primary);
      height: 8px;
      width: 8px;
      border-radius: 100%;
    }
  }
  .banner-desc {
    h1 {
      font-size: 48px;
      font-weight: 800;
      margin: 0;
      color: var(--text-color);
      font-family: Inter, sans-serif;
    }

    p {
      font-size: 16px;
      margin-top: 20px;
      color: var(--text-color-light);
    }
  }

  .count-down {
    .cd-main {
      background: #f1f6fe;
      border-radius: 10px;
      width: 50%;
      margin: 60px auto 120px;
      padding: 30px 0;
      font-size: 24px;
      color: #666;
      text-align: center;
      font-weight: 600;
    }
    .cd-date {
      font-size: 28px;
    }
    .cd-time {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin: 10px auto 0;
    }
    .cd-num {
      color: var(--el-color-primary);
      font-size: 78px;
      font-weight: bold;
    }
    .cd-num span {
      width: 50%;
      display: inline-block;
    }
    .cd-str {
      font-size: 22px;
      margin-top: -5px;
    }
  }

  .jumbotron {
    width: 800px;
    margin: 20px auto;
    position: relative;

    img {
      width: 100%;
    }

    .parallax-container {
      width: 800px;
    }
  }

  @media screen and (max-width: 959px) {
    .jumbotron {
      .parallax-container {
        width: 700px;
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 768px) {
    .jumbotron {
      display: none !important;
    }

    .mobile-banner {
      display: inline-block;
      margin-top: 25px;
      margin-bottom: -15px;
    }

    .banner-stars {
      display: none;
    }
    .banner-desc {
      h1 {
        font-size: 36px;
      }
      p {
        margin-top: 10px;
        font-size: 14px;
      }
    }
    .banner-dot h1 span {
      &::after {
        right: -8px;
        bottom: 2px;
        height: 6px;
        width: 6px;
      }
    }
    .count-down {
      .cd-main {
        width: 90%;
        margin: 40px auto 40px;
        padding: 20px 0;
      }
      .cd-date {
        font-size: 22px;
      }
      .cd-num {
        font-size: 38px;
      }
      .cd-str {
        font-size: 12px;
        margin-top: 0;
      }
    }
    .sponsors-list {
      display: flex;
      flex-direction: column;
      align-content: center;
      .sponsor {
        justify-content: left;
      }
    }
  }
  .theme-intro-b {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200;
    .intro-banner {
      position: absolute;
    }
    img {
      width: 300px;
    }
    .title {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        padding: 0;
        margin: 10px 0;
      }
    }
  }
  .theme-intro-a {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200;
    .mask {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #000;
      opacity: 0.5;
    }
    .intro-banner {
      top: 50%;
      left: 50%;
      position: fixed;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      text-align: center;
      z-index: 100;
      img {
        width: 100%;
      }
      .intro-text {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        p {
          padding: 0;
          margin: 0;
          font-size: 48px;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
}

.dark {
  .parallax-container {
    filter: drop-shadow(0px 0px 10px #409eff);
  }
}
</style>
