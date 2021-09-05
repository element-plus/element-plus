<template>
  <footer v-if="isHome" class="footer">
    <div class="container">
      <div class="footer-main">
        <h4>{{ locale.links }}</h4>
        <a
          href="https://github.com/element-plus/element-plus"
          class="footer-main-link"
          target="_blank"
          >{{ locale.repo }}</a
        >
        <a
          href="https://github.com/element-plus/element-plus/releases"
          class="footer-main-link"
          target="_blank"
          >{{ locale.changelog }}</a
        >
        <a
          href="https://github.com/element-plus/element-plus-starter"
          class="footer-main-link"
          target="_blank"
          >{{ locale.starter }}</a
        >
        <a
          :href="'/' + lang + '/component/custom-theme'"
          class="footer-main-link"
          target="_blank"
          >{{ locale.theme }}</a
        >
      </div>
      <div class="footer-main">
        <h4>{{ locale.community }}</h4>
        <a :href="gitterLink" class="footer-main-link" target="_blank">{{
          locale.gitter
        }}</a>
        <a
          href="https://github.com/element-plus/element-plus/issues"
          class="footer-main-link"
          target="_blank"
          >{{ locale.feedback }}</a
        >
        <a
          :href="`https://github.com/element-plus/element-plus/blob/dev/.github/CONTRIBUTING.${lang}.md`"
          class="footer-main-link"
          target="_blank"
          >{{ locale.contribution }}</a
        >
        <a
          href="https://segmentfault.com/t/element-plus"
          class="footer-main-link"
          target="_blank"
          >SegmentFault</a
        >
      </div>
      <div class="footer-social">
        <p class="footer-social-title">Element Team</p>
        <a href="https://github.com/element-plus/element-plus" target="_blank">
          <el-icon class="ep-icon-github">
            <github-icon />
          </el-icon>
        </a>
      </div>
    </div>
    <!-- TODO: uncomment this -->
    <!-- <div class="made-with-love">
      Supercharged by vitepress
      Made with ❤️ by ElementPlus Team
    </div> -->
  </footer>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import GithubIcon from '../components/github-icon.vue'
import { useLang, useIsHome } from '../utils/routes'
import localeData from '../i18n/layouts/footer.json'
import { Language } from '../constants/language'

const linkMap = {
  [Language.CN]: 'https://gitter.im/ElemeFE/element',
  [Language.EN]: 'https://gitter.im/element-en/Lobby',
}

const lang = useLang()
const locale = computed(() => localeData[lang.value])

const isHome = useIsHome()

const gitterLink = computed(() => linkMap[lang.value])
</script>
