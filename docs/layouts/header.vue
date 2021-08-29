<template>
  <div
    class="header-wrapper"
  >
    <header ref="header" class="header">
      <div class="header-container">
        <h1>
          <toggle-sidebar-btn @toggle="$emit('toggle-sidebar')" />
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
        <div style="flex-grow: 1;"></div>
        <div class="nav-item nav-algolia-search">
          <algolia-search />
        </div>
        <ul class="nav">
          <li class="nav-item">
            <nav-link
              :item="{
                link: `/${rootPath}/guide`,
                text: locale.guide,
                activeMatch: 'guide',
              }"
            />
          </li>
          <li class="nav-item">
            <nav-link
              :item="{
                link: `/${rootPath}/component`,
                text: locale.components,
                activeMatch: 'component',
              }"
            />
          </li>
          <li class="nav-item">
            <nav-link
              :item="{
                link: `/${rootPath}/resource`,
                text: locale.resource,
                activeMatch: 'resource',
              }"
            />
          </li>

          <!-- gap -->
          <!-- 语言选择器 -->
        </ul>
        <div class="nav-gap"></div>
        <div class="language-selector">
          <el-dropdown
            class="nav-dropdown nav-lang"
            :class="{ 'is-active': state.langDropdownVisible }"
            @visible-change="handleLangDropdownToggle"
          >
            <span>
              {{ state.langs[lang] }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu class="nav-dropdown-list">
                <el-dropdown-item
                  v-for="(value, key) in state.langs"
                  :key="key"
                  :class="{ 'current-language': lang === value }"
                  @click="switchLang(key)"
                >
                  {{ value }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vitepress'
import { version } from 'element-plus'
import AlgoliaSearch from '../components/search.vue'
import ToggleSidebarBtn from '../components/toggle-sidebar-btn.vue'
import { Language, defaultLang } from '../constants/language'
import { useLang, useRootPath } from '../utils/routes'
import localeData from '../assets/components/header.json'
const router = useRouter()
const route = useRoute()

defineEmits(['toggle-sidebar', 'toggle-theme'])

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

const rootPath = useRootPath(lang)

const switchLang = (targetLang: string) => {
  if (lang.value === targetLang) return
  localStorage.setItem('ELEMENT_LANGUAGE', targetLang)
  let go = ''
  if (lang.value === defaultLang) {
    go = `/${targetLang}${route.path}`
  } else {
    go = `/${route.path
      .split('/')
      .slice(2)
      .join('/')}`
  }
  router.go(go)
}

const handleLangDropdownToggle = (visible: boolean) => {
  state.langDropdownVisible = visible
}
</script>
