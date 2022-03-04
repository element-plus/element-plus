<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useParallax, useThrottleFn, useEventListener } from '@vueuse/core'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'
import { isDark } from '../../composables/dark'
import HomeSponsors from '../home/home-sponsors.vue'
import HomeCards from '../home/home-cards.vue'
import HomeFooter from './home-footer.vue'
import type { CSSProperties } from 'vue'
const target = ref<HTMLElement | null>(null)
const parallax = reactive(useParallax(target))
const jumbotronRedOffset = ref(0)
const jumbotronRef = ref<HTMLElement | null>(null)
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])

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
  background: 'var(--bg-color)',
  height: '30rem',
  width: '100%',
  borderRadius: '5px',
  transition: '.3s ease-out all',
  boxShadow:
    isDark && !isDark.value ? '0 0 20px 0 rgba(255, 255, 255, 0.25)' : 'none',
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
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(0.9)`,
}))

const peopleLayer = computed(() => ({
  ...layerBase,
  width: '30%',
  height: '30%',
  right: 0,
  bottom: 0,
  transform: `translateX(${parallax.tilt * 25}px) translateY(${
    parallax.roll * 25
  }px) scale(1)`,
}))

// center layer
const leftLayer = computed(() => ({
  ...layerBase,
  width: '20%',
  height: '20%',
  transform: `translateX(${274 + parallax.tilt * 12}px) translateY(${
    parallax.roll * 12 + 220
  }px)`,
}))

const leftBottomLayer = computed(() => ({
  ...layerBase,
  width: '30%',
  height: '30%',
  left: 0,
  bottom: 0,
  transform: `translateX(${parallax.tilt * 30 + 50}px) translateY(${
    parallax.roll * 30
  }px)`,
}))

const rightLayer = computed(() => ({
  ...layerBase,
  width: '35%',
  height: '35%',
  top: 0,
  right: 0,
  transform: `translateX(${parallax.tilt * 25}px) translateY(${
    parallax.roll * 25 - 20
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
    <div class="banner">
      <div class="banner-desc">
        <h1>{{ homeLang['title'] }}</h1>
        <p>{{ homeLang['title_sub'] }}</p>
      </div>
    </div>
    <div ref="jumbotronRef" class="jumbotron">
      <div class="parallax-container" :style="containerStyle">
        <div :style="cardStyle">
          <img
            :style="screenLayer"
            src="/images/home/screen.svg"
            alt="banner"
          />
          <img
            :style="peopleLayer"
            src="/images/home/people.svg"
            alt="banner"
          />
          <img
            :style="leftLayer"
            src="/images/home/left-layer.svg"
            alt="banner"
          />
          <img
            :style="leftBottomLayer"
            src="/images/home/left-bottom-layer.svg"
            alt="banner"
          />
          <img
            :style="rightLayer"
            src="/images/home/right-layer.svg"
            alt="banner"
          />
        </div>
      </div>
    </div>

    <HomeSponsors />
    <HomeCards />
  </div>
  <HomeFooter />
</template>

<style lang="scss">
.home-page {
  .banner {
    text-align: center;
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
    padding-top: 30px;

    h1 {
      font-size: 34px;
      margin: 0;
      line-height: 48px;
      color: var(--text-color);
    }

    p {
      font-size: 18px;
      line-height: 28px;
      color: var(--text-color-light);
      margin: 20px 0 5px;
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
    width: 1000px;
    margin: 30px auto;
    position: relative;

    img {
      width: 100%;
    }

    .parallax-container {
      width: 1000px;
    }
  }

  @media (max-width: 768px) {
    .jumbotron {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    .banner-desc {
      padding-top: 0px;
    }
    .cards {
      li {
        width: 80%;
        margin: 0 auto 20px;
        float: none;
      }
      .card {
        height: auto;
        padding-bottom: 54px;
      }
    }
    .banner-stars {
      display: none;
    }
    .banner-desc {
      h1 {
        font-size: 22px;
      }
      #line2 {
        display: none;
      }
      h2 {
        font-size: 32px;
      }
      p {
        width: auto;
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
        margin-top: 0px;
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
</style>
