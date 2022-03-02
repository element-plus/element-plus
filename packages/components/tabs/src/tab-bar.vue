<template>
  <div
    ref="bar$"
    :class="['el-tabs__active-bar', `is-${rootTabs.props.tabPosition}`]"
    :style="barStyle"
  ></div>
</template>
<script lang="ts" setup>
import { inject, getCurrentInstance, watch, nextTick, ref } from 'vue'
import { capitalize } from '@vue/shared'
import { useResizeObserver } from '@vueuse/core'
import { tabsRootContextKey } from '@element-plus/tokens'
import { throwError } from '@element-plus/utils'
import { tabBar } from './tab-bar'

import type { CSSProperties } from 'vue'

const COMPONENT_NAME = 'ElTabBar'
defineOptions({
  name: 'ElTabBar',
})
const props = defineProps(tabBar)

const instance = getCurrentInstance()!
const rootTabs = inject(tabsRootContextKey)
if (!rootTabs) throwError(COMPONENT_NAME, 'must use with ElTabs')

const bar$ = ref<HTMLDivElement>()
const barStyle = ref()

const getBarStyle = (): CSSProperties => {
  let offset = 0
  let tabSize = 0

  const sizeName = ['top', 'bottom'].includes(rootTabs.props.tabPosition)
    ? 'width'
    : 'height'
  const sizeDir = sizeName === 'width' ? 'x' : 'y'

  props.tabs.every((tab) => {
    const $el = instance.parent?.refs?.[`tab-${tab.paneName}`] as HTMLElement
    if (!$el) return false

    if (!tab.active) {
      return true
    }

    tabSize = $el[`client${capitalize(sizeName)}`]
    const position = sizeDir === 'x' ? 'left' : 'top'
    offset =
      $el.getBoundingClientRect()[position] -
      ($el.parentElement?.getBoundingClientRect()[position] ?? 0)
    const tabStyles = window.getComputedStyle($el)

    if (sizeName === 'width') {
      if (props.tabs.length > 1) {
        tabSize -=
          parseFloat(tabStyles.paddingLeft) + parseFloat(tabStyles.paddingRight)
      }
      offset += parseFloat(tabStyles.paddingLeft)
    }
    return false
  })

  return {
    [sizeName]: `${tabSize}px`,
    transform: `translate${capitalize(sizeDir)}(${offset}px)`,
  }
}

const update = () => (barStyle.value = getBarStyle())

watch(
  () => props.tabs,
  async () => {
    await nextTick()
    update()
  },
  { immediate: true }
)
useResizeObserver(bar$, () => update())
</script>
