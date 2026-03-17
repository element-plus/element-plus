<script setup lang="ts">
import { computed, getCurrentInstance, ref, toRef } from 'vue'
import { useClipboard, useLocalStorage, useToggle } from '@vueuse/core'
import { EVENT_CODE } from 'element-plus'
import { CaretTop } from '@element-plus/icons-vue'
import { useLang } from '../composables/lang'
import { useSourceCode } from '../composables/source-code'
import { usePlayground } from '../composables/use-playground'
import demoBlockLocale from '../../i18n/component/demo-block.json'
import SourceCode from './demo/vp-source-code.vue'

const props = defineProps<{
  sources: [string, string]
  path: string
  rawSources: [string, string]
  description: string
}>()

const vm = getCurrentInstance()!

const sourceLangs = ['TS', 'JS'] satisfies ['TS', 'JS']

const sourceCodeRef = ref<HTMLButtonElement>()
const jsOrTs = useLocalStorage<(typeof sourceLangs)[number]>(
  'epJsOrTs',
  sourceLangs[0]
)

const locale = computed(() => demoBlockLocale[lang.value])
const decodedDescription = computed(() => decodeURIComponent(props.description))
const sourceVisibilityLabel = computed(() =>
  sourceVisible.value
    ? locale.value['hide-source']
    : locale.value['view-source']
)
const rawSource = computed(
  () => props.rawSources[jsOrTs.value === 'TS' ? 0 : 1]
)
const decodedRawSource = computed(() => decodeURIComponent(rawSource.value))
const source = computed(() => props.sources[jsOrTs.value === 'TS' ? 0 : 1])

const { copy, isSupported } = useClipboard({
  source: decodedRawSource,
  read: false,
})
const [sourceVisible, toggleSourceVisible] = useToggle()
const lang = useLang()
const demoSourceUrl = useSourceCode(toRef(props, 'path'))
const { link: playgroundUrl } = usePlayground(rawSource)

const onSourceVisibleKeydown = (e: KeyboardEvent) => {
  if (
    [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space].includes(
      e.code
    )
  ) {
    e.preventDefault()
    toggleSourceVisible(false)
    sourceCodeRef.value?.focus()
  }
}

const copyCode = async () => {
  const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    $message.error(locale.value['copy-error'])
  }
  try {
    await copy()
    $message.success(locale.value['copy-success'])
  } catch (e: any) {
    $message.error(e.message)
  }
}
</script>

<template>
  <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
  <div text="sm" m="y-4" v-html="decodedDescription" />

  <div class="example">
    <div class="example-showcase">
      <slot name="source" />
    </div>

    <ElDivider class="m-0" />

    <div class="op-btns">
      <ElSegmented v-model="jsOrTs" :options="sourceLangs" size="small" />
      <ElTooltip
        :content="locale['edit-in-editor']"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
        :trigger-keys="[]"
      >
        <ElIcon :size="16" class="op-btn">
          <a
            :href="playgroundUrl"
            :aria-label="locale['edit-in-editor']"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i-ri-flask-line />
          </a>
        </ElIcon>
      </ElTooltip>

      <ElTooltip
        :content="locale['edit-on-github']"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
        :trigger-keys="[]"
      >
        <ElIcon :size="16" class="op-btn github">
          <a
            :href="demoSourceUrl"
            :aria-label="locale['edit-on-github']"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i-ri-github-line />
          </a>
        </ElIcon>
      </ElTooltip>

      <ElTooltip
        :content="locale['copy-code']"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
        :trigger-keys="[]"
      >
        <ElIcon
          :size="16"
          :aria-label="locale['copy-code']"
          class="op-btn"
          tabindex="0"
          role="button"
          @click="copyCode"
          @keydown.prevent.enter="copyCode"
          @keydown.prevent.space="copyCode"
        >
          <i-ri-file-copy-line />
        </ElIcon>
      </ElTooltip>
      <ElTooltip
        :content="sourceVisibilityLabel"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
        :trigger-keys="[]"
      >
        <button
          ref="sourceCodeRef"
          :aria-label="sourceVisibilityLabel"
          class="reset-btn el-icon op-btn"
          @click="toggleSourceVisible()"
        >
          <ElIcon :size="16">
            <i-ri-code-line />
          </ElIcon>
        </button>
      </ElTooltip>
    </div>

    <ElCollapseTransition>
      <SourceCode :visible="sourceVisible" :source="source" />
    </ElCollapseTransition>

    <Transition name="el-fade-in-linear">
      <div
        v-show="sourceVisible"
        class="example-float-control"
        tabindex="0"
        role="button"
        @click="toggleSourceVisible(false)"
        @keydown="onSourceVisibleKeydown"
      >
        <ElIcon :size="16">
          <CaretTop />
        </ElIcon>
        <span>{{ locale['hide-source'] }}</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);

  .example-showcase {
    padding: 1.5rem;
    margin: 0.5px;
    background-color: var(--bg-color);
    border-radius: var(--el-border-radius-base);
    overflow: auto;

    &:has(.el-affix) {
      overflow: visible;
    }
  }

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
