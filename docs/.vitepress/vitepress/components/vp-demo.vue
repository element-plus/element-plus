<script setup lang="ts">
import { computed, toRef, ref, getCurrentInstance } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useToggle } from '../composables/toggle'
import { useLang } from '../composables/lang'
import { useSourceCode } from '../composables/source-code'

import demoBlockLocale from '../../i18n/component/demo-block.json'
import GithubIcon from './icons/github.vue'
import SourceCodeIcon from './icons/source-code.vue'
import CodepenIcon from './icons/codepen.vue'
import CopyIcon from './icons/copy-icon.vue'

import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'
import Codepen from './demo/vp-codepen.vue'

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
  jsPreProcessor: {
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
  rawSource: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
})

const vm = getCurrentInstance()

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, setSourceVisible] = useToggle()
const lang = useLang()
const demoSourceUrl = useSourceCode(toRef(props, 'path'))

const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../examples/', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})

const codepenRef = ref()
const locale = computed(() => demoBlockLocale[lang.value])
const decodedDescription = computed(() => decodeURIComponent(props.description))

const onCodepenClicked = () => {
  codepenRef.value.submit?.()
}

const copyCode = async () => {
  const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    $message.error(locale.value['copy-error'])
  }
  try {
    await copy()
    $message.success(locale.value['copy-success'])
  } catch (e: Error) {
    $message.error(e.message)
  }
}
</script>

<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p class="example-description" v-html="decodedDescription" />
    <div class="example">
      <Codepen
        ref="codepenRef"
        :css="props.css"
        :css-pre-processor="props.cssPreProcessor"
        :html="props.html"
        :js="props.js"
        :js-pre-processor="props.jsPreProcessor"
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
        <ElTooltip :content="locale['copy-code']" :visible-arrow="false">
          <ElIcon :size="20" class="op-btn" @click="copyCode">
            <CopyIcon />
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
  </ClientOnly>
</template>

<style scoped lang="scss">
.example-description {
  font-size: 14px;
}
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);
  overflow: hidden;

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
      color: var(--text-color);

      &.github a {
        color: var(--text-color);
      }
    }
  }
  .el-divider {
    margin: 0;
  }
}
</style>
