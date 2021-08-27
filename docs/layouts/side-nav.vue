<template>
  <div
    class="side-nav"
    :class="{ 'is-fade': isFade }"
    :style="navStyle"
    @mouseenter="isFade = false"
  >
    <ul>
      <li class="nav-item sponsors">
        <a>{{ sponsorsLocale.title }}</a>
        <ul class="pure-menu-list sub-nav">
          <li class="nav-item">
            <a
              class="sponsor"
              href="https://bit.dev/?from=element-ui"
              target="_blank"
              title="bit"
            >
              <img :src="withBase('/assets/images/bit.svg')">
            </a>
          </li>
          <li class="nav-item">
            <a
              class="sponsor"
              href="https://www.renren.io/?from=element-ui"
              target="_blank"
              :title="sponsorsLocale.sponsorIntroR"
            >
              <img :src="withBase('/assets/images/renren.png')">
            </a>
          </li>
        </ul>
      </li>
      <li v-for="(item, keyy) in data" :key="keyy" class="nav-item">
        <a v-if="!item.path && !item.href" @click="expandMenu">{{
          item.name
        }}</a>
        <a v-if="item.href" :href="item.href" target="_blank">{{
          item.name
        }}</a>
        <router-link
          v-if="item.path"
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name"
        />
        <ul v-if="item.children" class="pure-menu-list sub-nav">
          <li
            v-for="(navItem, key) in item.children"
            :key="key"
            class="nav-item"
          >
            <router-link
              class=""
              active-class="active"
              :to="base + navItem.path"
              exact
              v-text="navItem.title || navItem.name"
            />
          </li>
        </ul>
        <template v-if="item.groups">
          <div v-for="(group, key) in item.groups" :key="key" class="nav-group">
            <div class="nav-group__title" @click="expandMenu">
              {{ group.groupName }}
            </div>
            <ul class="pure-menu-list">
              <li
                v-for="(navItem, keey) in group.list"
                v-show="!navItem.disabled"
                :key="keey"
                class="nav-item"
              >
                <el-badge v-if="navItem.beta" value="Beta">
                  <router-link
                    class=""
                    active-class="active"
                    :to="base + navItem.path"
                    exact
                    v-text="navItem.title || navItem.name"
                  />
                </el-badge>
                <router-link
                  v-else
                  class=""
                  active-class="active"
                  :to="base + navItem.path"
                  exact
                  v-text="navItem.title || navItem.name"
                />
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
    <!--<div id="code-sponsor-widget"></div>-->
  </div>
</template>
<script lang="ts" setup>
import {
  defineProps,
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'
import { useRoute, withBase } from 'vitepress'
import sponsorsData from '../assets/components/sponsors.json'
import { useLang } from '../utils/routes'
import bus from '../utils/bus'

import type { CSSProperties, PropType } from 'vue'

type SideNavItem = {
  beta: boolean
  disabled: boolean
  href: string
  path: string
  name: string
  title: string
  children: Array<SideNavItem>
  groups: Array<{
    groupName: string
    list: SideNavItem[]
  }>
}

const props = defineProps({
  data: {
    type: Array as PropType<Array<SideNavItem>>,
    default: () => [],
  },
  base: {
    type: String,
    default: '',
  },
})

const isSmallScreen = ref(false)
const isFade = ref(false)
const route = useRoute()

console.log(route.data)

const lang = useLang()
const sponsorsLocale = computed(() => sponsorsData[lang.value])
bus.$on('fade-nav', () => {
  isFade.value = true
})

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const navStyle = computed(() => {
  const style = {} as CSSProperties
  if (isSmallScreen.value) {
    style.paddingBottom = '60px'
  }
  style.opacity = isFade.value ? '0.5' : '1'
  return style
})

watch(
  () => route.path,
  () => {
    handlePathChange()
  },
)

watch(isFade, val => {
  bus.$emit('nav-fade', val)
})

const handleResize = () => {
  isSmallScreen.value = document.documentElement.clientWidth < 768
  handlePathChange()
}

const handlePathChange = async () => {
  if (!isSmallScreen.value) {
    expandAllMenu()
    return
  }
  await nextTick()
  hideAllMenu()
  let activeAnchor = document.querySelector('a.active')
  let ul = activeAnchor.parentNode as HTMLElement
  while (ul.tagName !== 'UL') {
    ul = ul.parentNode as HTMLElement
  }
  ul.style.height = 'auto'
}

const hideAllMenu = () => {
  [].forEach.call(document.querySelectorAll('.pure-menu-list'), ul => {
    ul.style.height = '0'
  })
}

const expandAllMenu = () => {
  [].forEach.call(document.querySelectorAll('.pure-menu-list'), ul => {
    ul.style.height = 'auto'
  })
}

const expandMenu = event => {
  if (!isSmallScreen.value) return
  let target = event.currentTarget
  if (!target.nextElementSibling || target.nextElementSibling.tagName !== 'UL')
    return
  hideAllMenu()
  event.currentTarget.nextElementSibling.style.height = 'auto'
}
</script>
