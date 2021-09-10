<script lang="ts" setup>
import { reactive, computed, markRaw } from 'vue'
import { useRoute, useRouter, useData } from 'vitepress'
import { version } from 'element-plus'
import AlgoliaSearch from '../components/search.vue'
import ElementPlusLogo from '../components/icons/element-plus-logo.vue'
import ElementPlusTextLogo from '../components/icons/element-plus-text-logo.vue'
import GithubIcon from '../components/icons/github.vue'
import TranslationIcon from '../components/icons/translation-icon.vue'
import Dark from '../components/icons/dark.vue'
import Light from '../components/icons/light.vue'
import ToggleSidebarBtn from '../components/toggle-sidebar-btn.vue'
import { useNav } from '../composables/use-nav'
import { useBackTop } from '../composables/use-back-top'
import { Language, defaultLang } from '../constants/language'
import { useLang, useRootPath } from '../utils/routes'
import localeData from '../i18n/layouts/header.json'
import langs from '../i18n/lang.json'

const router = useRouter()
const route = useRoute()
const { theme } = useData()

defineProps<{ isDark: boolean; hasSidebar: boolean }>()
defineEmits(['toggle-sidebar', 'toggle-dark'])

const lang = useLang()
const nav = useNav()
const { shouldShow, scrollToTop } = useBackTop()

const state = reactive({
  active: '',
  langDropdownVisible: true,
})
const locale = computed(() => localeData[lang.value])
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

<template>
  <header class="nav-bar">
    <div class="nav-wrapper">
      <div class="header-container">
        <a :href="currentRoot" class="icon-link">
          <ElIcon class="logo">
            <ElementPlusTextLogo class="nav-logo" />
          </ElIcon>
        </a>

        <div class="nav-action-items">
          <AlgoliaSearch :options="theme.agolia" />
          <nav class="nav-menu">
            <nav-link
              v-for="(navItem, key) in nav"
              :key="key"
              :item="navItem"
              class="nav-item"
            />
          </nav>
          <div :class="{ 'theme-switcher': true, 'is-dark': isDark }">
            <ElIcon class="header-icon" @click="$emit('toggle-dark')">
              <Dark class="dark-icon" />
              <Light class="light-icon" />
            </ElIcon>
          </div>
          <div class="action-icons">
            <div class="action-group translations">
              <ElIcon class="header-icon translation-icon">
                <TranslationIcon />
                <div class="dropdown-content">
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
                </div>
              </ElIcon>
            </div>
            <ElIcon class="header-icon social-icon">
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
      </div>
    </div>
  </header>
  <div class="sub-nav">
    <ToggleSidebarBtn v-if="hasSidebar" @toggle="$emit('toggle-sidebar')" />
    <Transition name="shifting">
      <ElButton
        type="text"
        :class="{ 'go-back-top': true, show: shouldShow }"
        @click.prevent.stop="scrollToTop"
        >{{ 'Back to top' }}</ElButton
      >
    </Transition>
  </div>
</template>
