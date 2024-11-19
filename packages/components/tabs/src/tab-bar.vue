<template>
  <div
    ref="barRef"
    :class="[ns.e('active-bar'), ns.is(rootTabs!.props.tabPosition)]"
    :style="barStyle"
  />
</template>

<script lang="ts" setup>
import {
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeUnmount,
  ref,
  watch,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { capitalize, throwError } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { tabsRootContextKey } from './constants'
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
  const position = sizeDir === 'x' ? 'left' : 'top'

  props.tabs.every((tab) => {
    const $el = instance.parent?.refs?.[`tab-${tab.uid}`] as HTMLElement
    if (!$el) return false

    if (!tab.active) {
      return true
    }

    offset = $el[`offset${capitalize(position)}`]
    tabSize = $el[`client${capitalize(sizeName)}`]

    const tabStyles = window.getComputedStyle($el)

    if (sizeName === 'width') {
      tabSize -=
        Number.parseFloat(tabStyles.paddingLeft) +
        Number.parseFloat(tabStyles.paddingRight)
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

const saveObserver = [] as ReturnType<typeof useResizeObserver>[]
const observerTabs = () => {
  saveObserver.forEach((observer) => observer.stop())
  saveObserver.length = 0
  const list = instance.parent?.refs as Record<string, HTMLElement>
  if (!list) return
  for (const key in list) {
    if (key.startsWith('tab-')) {
      const _el = list[key]
      if (_el) {
        saveObserver.push(useResizeObserver(_el, update))
      }
    }
  }
}

watch(
  () => props.tabs,
  async () => {
    await nextTick()
    update()

    observerTabs()
  },
  { immediate: true }
)
const barObserever = useResizeObserver(barRef, () => update())

onBeforeUnmount(() => {
  saveObserver.forEach((observer) => observer.stop())
  saveObserver.length = 0
  barObserever.stop()
})

defineExpose({
  /** @description tab root html element */
  ref: barRef,
  /** @description method to manually update tab bar style */
  update,
})
</script>
