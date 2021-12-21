<script setup lang="ts">
import { computed, ref } from 'vue'
import { hyphenate } from '@vue/shared'
import clipboardCopy from 'clipboard-copy'
import { ElMessage } from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import { useLang } from '../../composables/lang'
import localeData from '../../../i18n/component/icons.json'

const lang = useLang()
const locale = computed(() => localeData[lang.value])
const copyIcon = ref(true)

const copyContent = async (content) => {
  try {
    await clipboardCopy(content)

    ElMessage({
      showClose: true,
      message: locale.value['copy-success'],
      type: 'success',
    })
  } catch (e) {
    ElMessage({
      showClose: true,
      message: locale.value['copy-error'],
      type: 'error',
    })
  }
}

const copySvgIcon = async (name, refs) => {
  if (copyIcon.value) {
    await copyContent(`<el-icon><${hyphenate(name)} /></el-icon>`)
  } else {
    const content = refs[name].querySelector('svg')?.outerHTML ?? ''
    await copyContent(content)
  }
}
</script>

<template>
  <div style="text-align: right">
    <el-switch
      v-model="copyIcon"
      active-text="Copy icon code"
      inactive-text="Copy SVG content"
    >
    </el-switch>
  </div>
  <ul class="demo-icon-list">
    <li
      v-for="component in Icons"
      :key="component"
      :ref="component.name"
      class="icon-item"
      @click="copySvgIcon(component.name, $refs)"
    >
      <span class="demo-svg-icon">
        <ElIcon :size="20">
          <component :is="component" />
        </ElIcon>
        <span class="icon-name">{{ component.name }}</span>
      </span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.demo-icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border-top: 1px solid var(--el-border-color-base);
  border-left: 1px solid var(--el-border-color-base);
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  .icon-item {
    text-align: center;
    color: var(--el-text-color-regular);
    height: 90px;
    font-size: 13px;
    border-right: 1px solid var(--el-border-color-base);
    border-bottom: 1px solid var(--el-border-color-base);
    transition: background-color var(--el-transition-duration);
    &:hover {
      background-color: var(--el-border-color-extra-light);
      .el-icon {
        color: var(--brand-color-light);
      }
      color: var(--brand-color-light);
    }

    .demo-svg-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;

      .icon-name {
        margin-top: 8px;
      }
    }
  }
}
</style>
