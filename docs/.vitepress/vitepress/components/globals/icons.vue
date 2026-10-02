<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'
import clipboardCopy from 'clipboard-copy'
import { ElMessage } from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import { useLang } from '../../composables/lang'
import localeData from '../../../i18n/component/icons.json'
import IconCategories from './icons-categories.json'

import type { Component, DefineComponent } from 'vue'

type CategoriesItem = {
  name: string
  icons: (DefineComponent | Component)[]
}

const lang = useLang()
const locale = computed(() => localeData[lang.value])
const copyIcon = ref(true)
const query = ref('')

const copyContent = async (content) => {
  try {
    await clipboardCopy(content)

    ElMessage({
      showClose: true,
      message: locale.value['copy-success'],
      type: 'success',
    })
  } catch {
    ElMessage({
      showClose: true,
      message: locale.value['copy-error'],
      type: 'error',
    })
  }
}

const copySvgIcon = async (name, refs) => {
  if (copyIcon.value) {
    await copyContent(`<el-icon><${name} /></el-icon>`)
  } else {
    let content = refs[name]?.[0].querySelector('svg')?.outerHTML ?? ''
    if (content) {
      content = content.replace(/data-v-\w+=""/, '')
    }
    await copyContent(content)
  }
}

const categories = shallowRef<CategoriesItem[]>([])
const iconMap = new Map(Object.entries(Icons))

IconCategories.categories.forEach((o) => {
  const result: CategoriesItem = {
    name: o.name,
    icons: [],
  }
  o.items.forEach((i) => {
    const icon = iconMap.get(i)
    if (icon) {
      result.icons.push(icon)
      iconMap.delete(i)
    }
  })
  categories.value.push(result)
})

categories.value.push({ name: 'Other', icons: Array.from(iconMap.values()) })

const filterCategories = computed(() => {
  return categories.value
    .map((category) => {
      const icons = category.icons.filter((icon) => {
        return icon.name?.toLowerCase().includes(query.value.toLowerCase())
      })
      return { ...category, icons }
    })
    .filter((category) => category.icons.length)
})
</script>

<template>
  <div style="text-align: right">
    <el-switch
      v-model="copyIcon"
      active-text="Copy icon code"
      inactive-text="Copy SVG content"
    />
  </div>
  <div class="icon-search-content">
    <el-input
      v-model="query"
      :prefix-icon="Icons.Search"
      size="large"
      placeholder="Search Icons"
    />
  </div>
  <div v-for="item in filterCategories" :key="item.name" class="demo-icon-item">
    <div class="demo-icon-title">{{ item.name }}</div>
    <ul class="demo-icon-list">
      <li
        v-for="component in item.icons"
        :key="component.name"
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
  </div>
</template>

<style scoped lang="scss">
.demo-icon {
  &-item {
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }
  }

  &-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 1rem;
  }

  &-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      background-color: var(--el-border-color);
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: var(--el-border-color);
      z-index: 2;
    }

    .icon-item {
      text-align: center;
      color: var(--el-text-color-regular);
      height: 90px;
      font-size: 13px;
      position: relative;
      transition: background-color var(--el-transition-duration);

      &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: var(--el-border-color);
        z-index: 2;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: var(--el-border-color);
        z-index: 2;
      }

      &:hover {
        background-color: var(--el-border-color-extra-light);
        color: var(--brand-color-light);

        .el-icon {
          color: var(--brand-color-light);
        }
      }

      .demo-svg-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        padding: 0.5rem;
        position: relative;
        z-index: 1;

        .icon-name {
          margin-top: 8px;
          word-break: break-word;
          line-height: 1.2;
        }
      }
    }
  }
}

.icon-search-content {
  position: sticky;
  top: 60px;
  z-index: 10;
  margin-bottom: 1.5rem;

  .el-input {
    background: var(--bg-color);
  }
}

@media screen and (max-width: 1200px) {
  .demo-icon-list {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media screen and (max-width: 992px) {
  .demo-icon-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .demo-icon-list {
    grid-template-columns: repeat(3, 1fr);
  }

  .icon-item {
    height: 80px !important;
    font-size: 12px !important;
  }
}

@media screen and (max-width: 480px) {
  .demo-icon-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
