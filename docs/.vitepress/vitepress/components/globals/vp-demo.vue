<script setup lang="ts">
import { computed, shallowRef, watch, toRef, ref } from 'vue'
import { useToggle } from '../composables/toggle'
import { useLang } from '../composables/lang'
import { useSourceCode } from '../composables/source-code'

import GithubIcon from './icons/github.vue'
import SourceCodeIcon from './icons/source-code.vue'
import CodepenIcon from './icons/codepen.vue'

import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'
import Codepen from './demo/vp-codepen.vue'

import demoBlockLocale from '../../i18n/component/demo-block.json'

const props = defineProps({
  // source is encoded via encodeURIComponent
  source: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
  cssPreProcessor: {
    type: String,
    required: true,
  },
  js: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  demos: {
    type: Object,
    required: true,
  },
})

const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../examples/', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})

const loaded = shallowRef(false)
const hasError = shallowRef(false)
const dataOpt = shallowRef('')
const setupScript = shallowRef('')
const template = shallowRef('')
const [sourceVisible, setSourceVisible] = useToggle()
const hasSetup = computed(() => loaded.value && setupScript.value !== '')
const lang = useLang()

const locale = computed(() => demoBlockLocale[lang.value])

const onDemoLoaded = (content) => {
  loaded.value = true
}

const demoSourceUrl = useSourceCode(toRef(props, 'path'))
const codepenRef = ref()

const onCodepenClicked = () => {
  codepenRef.value.submit?.()
}
</script>

<template>
  <div class="example">
    <Codepen
      :css="props.css"
      :css-pre-processor="props.cssPreProcessor"
      :html="props.html"
      :js="props.js"
      ref="codepenRef"
    />
    <div class="op-btns">
      <ElTooltip :content="locale['edit-in-codepen']" :visible-arrow="false">
        <ElIcon :size="20" class="op-btn">
          <CodepenIcon @click="onCodepenClicked" />
        </ElIcon>
      </ElTooltip>
      <ElTooltip :content="locale['edit-on-github']" :visible-arrow="false">
        <ElIcon :size="20" class="op-btn github">
          <a :href="demoSourceUrl" rel="noreferrer noopener" target="_blank">
            <GithubIcon />
          </a>
        </ElIcon>
      </ElTooltip>
      <ElTooltip :content="locale['view-source']" :visible-arrow="false">
        <ElIcon :size="20" class="op-btn" @click="setSourceVisible">
          <SourceCodeIcon />
        </ElIcon>
      </ElTooltip>
    </div>
    <ElDivider />
    <Example :file="path" :demo="formatPathDemos[path]" />
    <ElDivider v-if="sourceVisible" />
    <el-collapse-transition>
      <SourceCode v-show="sourceVisible" :source="source" />
    </el-collapse-transition>
  </div>
</template>

<style scoped lang="scss">
.example {
  border: var(--el-border-base);
  border-radius: var(--el-border-radius-base);

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 3rem;
    line-height: 3rem;

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;

      &.github a {
        color: var(--text-color-lighter);
      }
    }
  }
  .el-divider {
    margin: 0;
    background-color: var(--border-color);
  }
}
</style>
