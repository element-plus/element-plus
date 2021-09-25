<script setup lang="ts">
import { computed } from 'vue'
import { hyphenate } from '@vue/shared'
import clipboardCopy from 'clipboard-copy'
import { ElMessage } from 'element-plus'
import * as Icons from '@element-plus/icons'
import { useLang } from '../../composables/lang'
import localeData from '../../../i18n/component/icons.json'

const lang = useLang()
const locale = computed(() => localeData[lang.value])

const copySvgIcon = async (svg) => {
  try {
    await clipboardCopy(
      `<el-icon>
        <${hyphenate(svg)} />
      </el-icon>`
    )

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
</script>

<template>
  <ul class="demo-icon-list">
    <li
      v-for="component in Icons"
      :key="component"
      class="icon-item"
      @click="copySvgIcon(component.name)"
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
  grid-template-columns: repeat(6, 1fr);

  .icon-item {
    text-align: center;
    color: var(--el-text-color-regular);
    height: 120px;
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
