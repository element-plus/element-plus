<template>
  <div :class="ns.e('mask')" aria-hidden="true">
    <transition :name="ns.b('mask-fade')">
      <div
        v-if="top"
        v-show="topVisible"
        :class="ns.e('top-mask')"
        :style="topStyle"
        aria-hidden="true"
      />
    </transition>
    <transition :name="ns.b('mask-fade')">
      <div
        v-if="bottom"
        v-show="bottomVisible"
        :class="ns.e('bottom-mask')"
        :style="bottomStyle"
        aria-hidden="true"
      />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { inject, shallowRef } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { scrollbarContextKey } from './constants'

import type { CSSProperties } from 'vue'

defineProps<{
  top?: boolean
  bottom?: boolean
}>()

const ns = useNamespace('scrollbar')
const scrollbar = inject(scrollbarContextKey)!
const topVisible = shallowRef(false)
const bottomVisible = shallowRef(false)
const topStyle = shallowRef<CSSProperties>({})
const bottomStyle = shallowRef<CSSProperties>({})

const handleScroll = () => {
  const wrap = scrollbar.wrapElement
  if (!wrap) return

  // scrollTop may be fractional, whereas scrollHeight and clientHeight are rounded.
  const hasOverflow =
    wrap.clientHeight > 0 && wrap.scrollHeight - wrap.clientHeight > 1
  topVisible.value = hasOverflow && wrap.scrollTop > 1
  bottomVisible.value =
    hasOverflow &&
    wrap.scrollHeight - wrap.clientHeight - Math.max(0, wrap.scrollTop) > 1
}

const update = () => {
  const { wrapElement: wrap, scrollbarElement } = scrollbar
  if (!wrap || !scrollbarElement) return

  // Align with the viewport, excluding native scrollbars and any wrap border.
  const style = {
    left: `${wrap.offsetLeft + wrap.clientLeft}px`,
    width: `${wrap.clientWidth}px`,
    maxHeight: `${wrap.clientHeight}px`,
  }
  const top = wrap.offsetTop + wrap.clientTop
  topStyle.value = { ...style, top: `${top}px` }
  bottomStyle.value = {
    ...style,
    bottom: `${scrollbarElement.clientHeight - top - wrap.clientHeight}px`,
  }
  handleScroll()
}

defineExpose({ update, handleScroll })
</script>
