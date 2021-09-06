<template>
  <div class="header-wrapper nav-bar">
    <header class="header">
      <div class="header-container">
        <h1>
          <ToggleSidebarBtn @toggle="$emit('toggle-sidebar')" />
          <a :href="currentRoot" class="icon-link">
            <img
              src="../assets/images/element-plus-logo.svg"
              alt="element-logo"
              class="nav-logo"
            />
            <img
              src="../assets/images/element-plus-logo-small.svg"
              alt="element-logo"
              class="nav-logo-small"
            />
          </a>
        </h1>
        <div style="flex-grow: 1"></div>
        <AlgoliaSearch :options="theme.agolia" />
        <ul class="nav">
          <li v-for="(navItem, key) in nav" :key="key" class="nav-item">
            <nav-link :item="navItem" />
          </li>
        </ul>
        <div class="nav-gap"></div>
        <div class="op-icons">
          <ClientOnly>
            <ElPopover
              title=""
              popper-class="header-lang-selector"
              :show-arrow="false"
              width="100px"
              trigger="hover"
            >
              <template #reference>
                <ElIcon>
                  <svg width="1em" height="1em" viewBox="0 0 512 512">
                    <path
                      d="M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </ElIcon>
              </template>
              <ul class="languages-list">
                <li
                  v-for="l in langs"
                  :key="l"
                  @click="switchLang(l)"
                  :class="{ language: true, selected: l === lang }"
                >
                  {{ languageMap[l] }}
                </li>
              </ul>
            </ElPopover>
          </ClientOnly>
          <ElIcon @click="$emit('toggle-dark')">
            <svg v-if="isDark" viewBox="0 0 24 24">
              <path
                d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"
                fill="currentColor"
              ></path>
            </svg>
            <svg v-else viewBox="0 0 24 24">
              <path
                d="M6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z"
                fill="currentColor"
              ></path>
            </svg>
          </ElIcon>
          <ElIcon>
            <a
              href="https://github.com/element-plus/element-plus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </ElIcon>
        </div>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed, markRaw } from 'vue'
import { useRoute, useRouter, useData } from 'vitepress'
import { version } from 'element-plus'
import AlgoliaSearch from '../components/search.vue'
import ToggleSidebarBtn from '../components/toggle-sidebar-btn.vue'
import GithubIcon from '../components/icons/github.vue'
import { useNav } from '../composables/use-nav'
import { Language, defaultLang } from '../constants/language'
import { useLang, useRootPath } from '../utils/routes'
import localeData from '../i18n/layouts/header.json'
import langs from '../i18n/lang.json'

const router = useRouter()
const route = useRoute()
const { theme } = useData()

defineProps<{ isDark: boolean }>()
defineEmits(['toggle-sidebar', 'toggle-dark'])

const state = reactive({
  active: '',
  langDropdownVisible: true,
})

const lang = useLang()
const locale = computed(() => localeData[lang.value])
const nav = useNav()

const currentRoot = computed(() => `/${lang.value}/`)
const languageMap = markRaw({
  'en-US': 'English',
  'zh-CN': '中文',
})

const switchLang = (targetLang: string) => {
  if (lang.value === targetLang) return
  localStorage.setItem('ELEMENT_LANGUAGE', targetLang)
  let go = ''
  const firstSlash = route.path.indexOf('/', 1)

  go = `/${targetLang}/${route.path.slice(firstSlash + 1)}`
  router.go(go)
}

const handleLangDropdownToggle = (visible: boolean) => {
  state.langDropdownVisible = visible
}
</script>
