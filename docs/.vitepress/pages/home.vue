<template>
  <div class="home-page">
    <div class="banner">
      <div class="banner-desc">
        <h1>{{ homeLocale[1] }}</h1>
        <p>{{ homeLocale[2] }}</p>
      </div>
    </div>
    <div ref="indexMainImg" class="jumbotron">
      <img src="../assets/images/theme-index-blue.png" alt="" />
      <div
        class="jumbotron-red"
        :style="{
          height: mainImgOffset + 'px',
        }"
      >
        <img src="../assets/images/theme-index-red.png" alt="" />
      </div>
    </div>
    <div class="sponsors">
      <template v-for="sponsor in sponsors">
        <a
          :class="['sponsor', sponsor.className]"
          :href="sponsor.url"
          target="_blank"
        >
          <img width="45" :src="sponsor.img" :alt="sponsor.name" />
          <div>
            <p>
              {{ locale.sponsoredBy }}
              <span class="name">{{ sponsor.name }}</span>
            </p>
            <p>{{ sponsor.slogan }}</p>
          </div>
        </a>
      </template>
    </div>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="../assets/images/guide.png" alt="" />
            <h3>{{ homeLocale[3] }}</h3>
            <p>{{ homeLocale[4] }}</p>
            <nav-link
              :item="{
                link: `/${lang}/guide/design`,
                text: homeLocale[5],
              }"
            />
          </div>
        </li>
        <li>
          <div class="card">
            <img src="../assets/images/component.png" alt="" />
            <h3>{{ homeLocale[6] }}</h3>
            <p>{{ homeLocale[7] }}</p>
            <nav-link
              :item="{
                link: `/${lang}/component/layout`,
                text: homeLocale[5],
              }"
            />
          </div>
        </li>
        <li>
          <div class="card">
            <img src="../assets/images/resource.png" alt="" />
            <h3>{{ homeLocale[8] }}</h3>
            <p>{{ homeLocale[9] }}</p>
            <nav-link
              :item="{
                link: `/${lang}/resource`,
                text: homeLocale[5],
              }"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'
import sponsorsData from '../i18n/component/sponsor.json'
import homeData from '../i18n/pages/home.json'
import { throttle } from 'throttle-debounce'
import { useLang } from '../utils/routes'

import '../assets/styles/pages/home.scss'

const lang = useLang()
const mainImgOffset = ref(0)
const locale = computed(() => sponsorsData[lang.value])
const homeLocale = computed(() => homeData[lang.value])
const indexMainImg = ref()

const sponsors = [
  {
    name: 'bit',
    img: withBase('.vitepress/assets/images/bit.svg'),
    url: 'https://bit.dev/?from=element-ui',
    slogan: 'Share Code',
  },
  {
    name: 'renren.io',
    img: withBase('.vitepress/assets/images/renren.png'),
    url: 'https://www.renren.io/?from=element-ui',
    slogan: 'Rapid development platform',
    className: 'renren',
  },
]

const handleScroll = () => {
  const ele = indexMainImg.value
  const rect = ele.getBoundingClientRect()
  const eleHeight = ele.clientHeight + 55
  let calHeight = (180 - rect.top) * 2
  if (calHeight < 0) calHeight = 0
  if (calHeight > eleHeight) calHeight = eleHeight
  mainImgOffset.value = calHeight
}

const throttledHandleScroll = throttle(10, true, handleScroll)

// onMounted(() => {
//   const dom = document.querySelector('#app .el-scrollbar .el-scrollbar__wrap.el-scrollbar__wrap--hidden-default')
//   dom.addEventListener('scroll', throttledHandleScroll)
// })

// onBeforeUnmount(() => {
//   const dom = document.querySelector('#app .el-scrollbar .el-scrollbar__wrap.el-scrollbar__wrap--hidden-default')
//   dom.removeEventListener('scroll', throttledHandleScroll)
// })
</script>
