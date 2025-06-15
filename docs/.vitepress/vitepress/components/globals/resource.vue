<script lang="ts" setup>
import { computed } from 'vue'
import { isClient } from '@vueuse/core'
import { useLang } from '../../composables/lang'
import resourceLocale from '../../../i18n/pages/resource.json'
import { sendEvent } from '../../../config/analytics'

import AxureComponentsSvg from './resources/axure-components-svg.vue'
import SketchTemplateSvg from './resources/sketch-template-svg.vue'
import FigmaTemplateSvg from './resources/figma-template-svg.vue'
import FigmaVariablesSvg from './resources/figma-variables-svg.vue'
import FigmaUiKitSvg from './resources/figma-ui-kit-svg.vue'
import MasterGoUiKitSvg from './resources/master-go-ui-kit-svg.vue'

const mirrorUrl = 'element-plus.gitee.io'
const isMirrorUrl = () => {
  if (!isClient) return
  return window.location.hostname === mirrorUrl
}
const resourceUrl = {
  github: {
    sketch:
      'https://github.com/ElementUI/Resources/raw/master/Element_Plus_Design_System_2022_1.0_Beta.zip',
    axure:
      'https://github.com/ElementUI/Resources/raw/master/Element_Components_v2.1.0.rplib',
  },
  gitee: {
    sketch:
      'https://gitee.com/element-plus/resources/raw/master/Element_Plus_Design_System_2022_1.0_Beta.zip',
    axure:
      'https://gitee.com/element-plus/resources/raw/master/Element_Components_v2.1.0.rplib',
  },
}[isMirrorUrl() ? 'gitee' : 'github']

const lang = useLang()
const resourceLang = computed(() => resourceLocale[lang.value])
const onClick = (item: string) => {
  sendEvent('resource_download', item)
}

const resourceCards = computed(() => [
  {
    key: '2024-master-go-ui-kit',
    title: resourceLang.value.masterGo2024,
    icon: MasterGoUiKitSvg,
    intro: resourceLang.value.masterGo2024Intro,
    url: 'https://mastergo.com/community/resource/124855257836266',
  },
  {
    key: '2023-figma-ui-kit',
    title: resourceLang.value.figma2023,
    icon: FigmaUiKitSvg,
    intro: resourceLang.value.figma2023Intro,
    url: 'https://www.figma.com/community/file/1305760370797950824/element-plus-design-system-ui-kit',
  },
  {
    key: 'figma-variables',
    title: resourceLang.value.figmaVariables,
    icon: FigmaVariablesSvg,
    intro: resourceLang.value.figmaVariablesIntro,
    url: 'https://www.figma.com/community/file/1256091634199852065',
  },
  {
    key: 'figma',
    title: resourceLang.value.figma,
    icon: FigmaTemplateSvg,
    intro: resourceLang.value.figmaIntro,
    url: 'https://www.figma.com/community/file/1021254029764378306',
  },
  {
    key: 'sketch',
    title: resourceLang.value.sketch,
    icon: SketchTemplateSvg,
    intro: resourceLang.value.sketchIntro,
    url: resourceUrl.sketch,
  },
  {
    key: 'axure',
    title: resourceLang.value.axure,
    icon: AxureComponentsSvg,
    intro: resourceLang.value.axureIntro,
    url: resourceUrl.axure,
  },
])
</script>

<template>
  <div class="page-resource">
    <h1>{{ resourceLang.title }}</h1>
    <p>{{ resourceLang.lineOne }}</p>
    <p v-html="resourceLang.lineTwo" />
    <div class="resource-content">
      <el-card
        v-for="card in resourceCards"
        :key="card.title"
        class="card"
        shadow="hover"
      >
        <div class="w-30 m-auto">
          <component :is="card.icon" alt="icon" />
        </div>
        <h3>{{ card.title }}</h3>
        <p>
          {{ card.intro }}
        </p>
        <a target="_blank" :href="card.url" @click="onClick(card.title)">
          <el-button type="primary">{{ resourceLang.download }}</el-button>
        </a>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-resource {
  box-sizing: border-box;
  padding: 0 40px;

  h1 {
    color: var(--text-color);
    margin-bottom: 24px;
  }
  p {
    color: var(--text-color-light);
    line-height: 24px;
    margin: 0;
    &:last-of-type {
      margin-top: 8px;
    }
  }
}

.resource-content {
  margin-top: 32px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
}

.card {
  width: 100%;
  text-align: center;
  padding: 32px 0;

  img {
    margin: auto;
    margin-bottom: 16px;
    height: 87px;
  }

  h3 {
    margin: 10px;
    font-size: 18px;
    font-weight: normal;
  }

  p {
    font-size: 14px;
    color: #99a9bf;
    padding: 0 30px;
    margin: 0;
    overflow-wrap: break-word;
    line-height: 1.8;
    min-height: 75px;
    margin-bottom: 16px;
  }
}
</style>
