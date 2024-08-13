<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'
import clipboardCopy from 'clipboard-copy'
import { ElMessage } from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import { useLang } from '../../composables/lang'
import localeData from '../../../i18n/component/icons.json'
import IconCategories from './icons-categories.json'
import type { DefineComponent } from 'vue'

type CategoriesItem = {
  name: string
  icons: DefineComponent[]
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
        return icon.name.toLowerCase().includes(query.value.toLowerCase())
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
.icon-search-content {
  position: sticky;
  top: 60px;
  z-index: 10;

  .el-input {
    background: var(--bg-color);
  }
}

.demo-icon {
  &-item {
    margin-top: 24px;

    &:first-child {
      margin-top: 0;
    }
  }

  &-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }

  &-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border-left: 1px solid var(--el-border-color);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    .icon-item {
      &:nth-child(-n + 7) {
        border-top: 1px solid var(--el-border-color);
      }

      text-align: center;
      color: var(--el-text-color-regular);
      height: 90px;
      font-size: 13px;
      border-right: 1px solid var(--el-border-color);
      border-bottom: 1px solid var(--el-border-color);
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
}
</style>
