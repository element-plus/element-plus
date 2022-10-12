<template>
  <div
    ref="barRef"
    :class="[ns.e('active-bar'), ns.is(rootTabs.props.tabPosition)]"
    :style="barStyle"
  />
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject, nextTick, ref, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { capitalize, throwError } from '@element-plus/utils'
import { tabsRootContextKey } from '@element-plus/tokens'
import { useNamespace } from '@element-plus/hooks'
import { tabBarProps } from './tab-bar'

import type { CSSProperties } from 'vue'

const COMPONENT_NAME = 'ElTabBar'
defineOptions({
  name: COMPONENT_NAME,
})
const props = defineProps(tabBarProps)

const instance = getCurrentInstance()!
const rootTabs = inject(tabsRootContextKey)
if (!rootTabs) throwError(COMPONENT_NAME, '<el-tabs><el-tab-bar /></el-tabs>')

const ns = useNamespace('tabs')

const barRef = ref<HTMLDivElement>()
const barStyle = ref<CSSProperties>()

const getBarStyle = (): CSSProperties => {
  let offset = 0
  let tabSize = 0

  const sizeName = ['top', 'bottom'].includes(rootTabs.props.tabPosition)
    ? 'width'
    : 'height'
  const sizeDir = sizeName === 'width' ? 'x' : 'y'

  props.tabs.every((tab) => {
    const $el = instance.parent?.refs?.[`tab-${tab.uid}`] as HTMLElement
    if (!$el) return false

    if (!tab.active) {
      return true
    }

    tabSize = $el[`client${capitalize(sizeName)}`]
    const position = sizeDir === 'x' ? 'left' : 'top'

    offset =
      $el[`offset${capitalize(position)}`] -
      ($el.parentElement?.[`offset${capitalize(position)}`] ?? 0)

    const scrollwrapEl = $el.closest('.is-scrollable')
    if (scrollwrapEl) {
      const scrollWrapStyle = window.getComputedStyle(scrollwrapEl)
      offset += Number.parseFloat(
        scrollWrapStyle[`padding${capitalize(position)}`]
      )
    }

    const tabStyles = window.getComputedStyle($el)

    if (sizeName === 'width') {
      if (props.tabs.length > 1) {
        tabSize -=
          Number.parseFloat(tabStyles.paddingLeft) +
          Number.parseFloat(tabStyles.paddingRight)
      }
      offset += Number.parseFloat(tabStyles.paddingLeft)
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
useResizeObserver(barRef, () => update())

defineExpose({
  /** @description tab root html element */
  ref: barRef,
  /** @description method to manually update tab bar style */
  update,
})
</script>
