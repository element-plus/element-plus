<template>
  <div
    class="header-wrapper"
    style="position: fixed; top: 0px; width: 100%; z-index: 2000;"
  >
    <header ref="header" class="header">
      <div class="container">
        <h1>
          <a href="/" class="icon-link">
            <img
              src="../assets/images/element-plus-logo.svg"
              alt="element-logo"
              class="nav-logo"
            >
            <img
              src="../assets/images/element-plus-logo-small.svg"
              alt="element-logo"
              class="nav-logo-small"
            >
          </a>
        </h1>
        <ul class="nav">
          <li v-show="isComponentPage" class="nav-item nav-algolia-search">
            <algolia-search />
          </li>
          <li class="nav-item">
            <nav-link
              :item="{
                link: `/${lang}/guide`,
                text: locale.guide,
              }"
            />
          </li>
          <li class="nav-item">
            <nav-link
              :item="{
                link: `/${lang}/component`,
                text: locale.components,
              }"
            />
          </li>
          <li class="nav-item">
            <nav-link
              :item="{
                link: `/${lang}/resource`,
                text: locale.resource,
              }"
            />
          </li>

          <!-- gap -->
          <li v-show="isComponentPage" class="nav-item">
            <div class="nav-gap"></div>
          </li>
          <!-- 语言选择器 -->
          <li class="nav-item lang-item">
            <el-dropdown
              trigger="click"
              class="nav-dropdown nav-lang"
              :class="{ 'is-active': state.langDropdownVisible }"
              @visible-change="handleLangDropdownToggle"
            >
              <span>
                {{ state.langs[lang] }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu
                  class="nav-dropdown-list"
                >
                  <el-dropdown-item
                    v-for="(value, key) in state.langs"
                    :key="key"
                    @click="switchLang(key)"
                  >
                    {{ value }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vitepress'
import { version } from 'element-plus'
import AlgoliaSearch from '../components/search.vue'
import { Language } from '../constants/language'
import { useLang } from '../utils/routes'
import localeData from '../assets/components/header.json'
const router = useRouter()
const route = useRoute()

const state = reactive({
  active: '',
  versions: [],
  version,
  verDropdownVisible: true,
  langDropdownVisible: true,
  langs: {
    [Language.CN]: '中文',
    [Language.EN]: 'English',
  },
})

const lang = useLang()
const locale = computed(() => localeData[lang.value])
const isComponentPage = computed(() => route.path.includes('component'))

const switchLang = (targetLang: string) => {
  if (lang.value === targetLang) return
  localStorage.setItem('ELEMENT_LANGUAGE', targetLang)
  if (lang.value === Language.CN) {
    router.go(`/${targetLang}/${route.path.slice(1)}`)
    return
  }
  if (targetLang === Language.CN) {
    router.go(route.path.replace(`/${lang.value}`, ''))
    return
  }
  router.go(route.path.replace(lang.value, targetLang))
}

const handleLangDropdownToggle = (visible: boolean) => {
  state.langDropdownVisible = visible
}
</script>
