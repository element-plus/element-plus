<template>
  <div ref="root" :class="ns.b()" :style="rootStyle">
    <div :class="{ [ns.m('fixed')]: fixed }" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, shallowRef, watch } from 'vue'
import { useEventListener, useResizeObserver } from '@vueuse/core'
import { getScrollContainer } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { affixEmits, affixProps } from './affix'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElAffix',
})

const props = defineProps(affixProps)
const emit = defineEmits(affixEmits)

const ns = useNamespace('affix')

const target = shallowRef<HTMLElement>()
const root = shallowRef<HTMLDivElement>()
const scrollContainer = shallowRef<HTMLElement | Window>()

const fixed = ref(false)
const height = ref(0) // height of root
const width = ref(0) // width of root
const scrollTop = ref(0) // scrollTop of documentElement
const clientHeight = ref(0) // clientHeight of documentElement
const transform = ref(0)

const rootStyle = computed<CSSProperties>(() => {
  return {
    height: fixed.value ? `${height.value}px` : '',
    width: fixed.value ? `${width.value}px` : '',
  }
})

const affixStyle = computed<CSSProperties | undefined>(() => {
  if (!fixed.value) return

  const offset = props.offset ? `${props.offset}px` : 0
  const _transform = transform.value ? `translateY(${transform.value}px)` : ''

  return {
    height: `${height.value}px`,
    width: `${width.value}px`,
    top: props.position === 'top' ? offset : '',
    bottom: props.position === 'bottom' ? offset : '',
    transform: _transform,
    zIndex: props.zIndex,
  }
})

const update = () => {
  if (!root.value || !target.value || !scrollContainer.value) return

  const rootRect = root.value.getBoundingClientRect()
  const targetRect = target.value.getBoundingClientRect()
  height.value = rootRect.height
  width.value = rootRect.width
  scrollTop.value =
    scrollContainer.value instanceof Window
      ? document.documentElement.scrollTop
      : scrollContainer.value.scrollTop || 0
  clientHeight.value = document.documentElement.clientHeight

  if (props.position === 'top') {
    if (props.target) {
      const difference = targetRect.bottom - props.offset - height.value
      fixed.value = props.offset > rootRect.top && targetRect.bottom > 0
      transform.value = difference < 0 ? difference : 0
    } else {
      fixed.value = props.offset > rootRect.top
    }
  } else {
    if (props.target) {
      const difference =
        clientHeight.value - targetRect.top - props.offset - height.value
      fixed.value =
        clientHeight.value - props.offset < rootRect.bottom &&
        clientHeight.value > targetRect.top
      transform.value = difference < 0 ? -difference : 0
    } else {
      fixed.value = clientHeight.value - props.offset < rootRect.bottom
    }
  }
}

const onScroll = () => {
  update()

  emit('scroll', {
    scrollTop: scrollTop.value,
    fixed: fixed.value,
  })
}

watch(
  fixed,
  (fixed) => {
    emit('change', fixed)
  }
)

onMounted(() => {
  if (props.target) {
    target.value =
      document.querySelector<HTMLElement>(props.target) ?? undefined
    if (!target.value) {
      throw new Error(`Target is not existed: ${props.target}`)
    }
  } else {
    target.value = document.documentElement
  }
  scrollContainer.value = getScrollContainer(root.value!, true)
})

useEventListener(scrollContainer, 'scroll', onScroll)
useResizeObserver(root, () => update())
useResizeObserver(target, () => update())

defineExpose({
  /** @description update affix status */
  update,
})
</script>
