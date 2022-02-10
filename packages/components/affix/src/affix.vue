<template>
  <div ref="root" :class="ns.b()" :style="rootStyle">
    <div :class="{ [ns.m('fixed')]: fixed }" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, shallowRef, watch, watchEffect } from 'vue'
import {
  useElementBounding,
  useWindowSize,
  useEventListener,
} from '@vueuse/core'
import { getScrollContainer } from '@element-plus/utils/dom'
import { useNamespace } from '@element-plus/hooks'
import { throwError } from '@element-plus/utils-v2'
import { affixEmits, affixProps } from './affix'
import type { CSSProperties } from 'vue'

const COMPONENT_NAME = 'ElAffix'
defineOptions({
  name: 'ElAffix',
})

const props = defineProps(affixProps)
const emit = defineEmits(affixEmits)

const ns = useNamespace('affix')

const target = shallowRef<HTMLElement>()
const root = shallowRef<HTMLDivElement>()
const scrollContainer = shallowRef<HTMLElement | Window>()
const { height: windowHeight } = useWindowSize()
const rootRect = useElementBounding(root)
const targetRect = useElementBounding(target)

const fixed = ref(false)
const scrollTop = ref(0)
const transform = ref(0)

const rootStyle = computed<CSSProperties>(() => {
  return {
    height: fixed.value ? `${rootRect.height.value}px` : '',
    width: fixed.value ? `${rootRect.width.value}px` : '',
  }
})

const affixStyle = computed<CSSProperties>(() => {
  if (!fixed.value) return {}

  const offset = props.offset ? `${props.offset}px` : 0
  return {
    height: `${rootRect.height.value}px`,
    width: `${rootRect.width.value}px`,
    top: props.position === 'top' ? offset : '',
    bottom: props.position === 'bottom' ? offset : '',
    transform: transform.value ? `translateY(${transform.value}px)` : '',
    zIndex: props.zIndex,
  }
})

const update = () => {
  if (!scrollContainer.value) return

  scrollTop.value =
    scrollContainer.value instanceof Window
      ? document.documentElement.scrollTop
      : scrollContainer.value.scrollTop || 0

  if (props.position === 'top') {
    if (props.target) {
      const difference =
        targetRect.bottom.value - props.offset - rootRect.height.value
      fixed.value =
        props.offset > rootRect.top.value && targetRect.bottom.value > 0
      transform.value = difference < 0 ? difference : 0
    } else {
      fixed.value = props.offset > rootRect.top.value
    }
  } else if (props.target) {
    const difference =
      windowHeight.value -
      targetRect.top.value -
      props.offset -
      rootRect.height.value
    fixed.value =
      windowHeight.value - props.offset < rootRect.bottom.value &&
      windowHeight.value > targetRect.top.value
    transform.value = difference < 0 ? -difference : 0
  } else {
    fixed.value = windowHeight.value - props.offset < rootRect.bottom.value
  }
}

const handleScroll = () => {
  emit('scroll', {
    scrollTop: scrollTop.value,
    fixed: fixed.value,
  })
}

watch(fixed, () => emit('change', fixed.value))

onMounted(() => {
  if (props.target) {
    target.value =
      document.querySelector<HTMLElement>(props.target) ?? undefined
    if (!target.value)
      throwError(COMPONENT_NAME, `Target is not existed: ${props.target}`)
  } else {
    target.value = document.documentElement
  }
  scrollContainer.value = getScrollContainer(root.value!, true)
})

useEventListener(scrollContainer, 'scroll', handleScroll)
watchEffect(update)
</script>
