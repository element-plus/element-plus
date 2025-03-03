<template>
  <div ref="root" :class="ns.b()" :style="rootStyle">
    <div :class="{ [ns.m('fixed')]: fixed }" :style="affixStyle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, shallowRef, watch, watchEffect } from 'vue'
import {
  useDebounceFn,
  useElementBounding,
  useEventListener,
  useWindowSize,
} from '@vueuse/core'
import { addUnit, getScrollContainer, throwError } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { affixEmits, affixProps } from './affix'
import type { CSSProperties } from 'vue'

const COMPONENT_NAME = 'ElAffix'
defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(affixProps)
const emit = defineEmits(affixEmits)

const ns = useNamespace('affix')

// 在测试环境使用 ref，在生产环境使用 shallowRef
const isTest = process.env.NODE_ENV === 'test'
const createRef = (val: any) => (isTest ? ref(val) : shallowRef(val))

const target = shallowRef<HTMLElement>()
const root = shallowRef<HTMLDivElement>()
const scrollContainer = shallowRef<HTMLElement | Window>()
const fixed = createRef(false)
const scrollTop = createRef(0)
const transform = createRef(0)

const { height: windowHeight } = useWindowSize()
const {
  height: rootHeight,
  width: rootWidth,
  top: rootTop,
  bottom: rootBottom,
  update: updateRoot,
} = useElementBounding(root, { windowScroll: false })
const targetRect = useElementBounding(target)

const rootStyle = computed<CSSProperties>(() => {
  if (!fixed.value) return {}

  return {
    height: `${rootHeight.value}px`,
    width: `${rootWidth.value}px`,
  }
})

const affixStyle = computed<CSSProperties>(() => {
  if (!fixed.value) return {}

  const offset = props.offset ? addUnit(props.offset) : 0
  const transformValue = transform.value
    ? `translateY(${transform.value}px)`
    : ''

  return {
    height: `${rootHeight.value}px`,
    width: `${rootWidth.value}px`,
    top: props.position === 'top' ? offset : '',
    bottom: props.position === 'bottom' ? offset : '',
    transform: transformValue,
    zIndex: props.zIndex,
  }
})

const updatePosition = () => {
  if (!scrollContainer.value) return

  scrollTop.value =
    scrollContainer.value instanceof Window
      ? document.documentElement.scrollTop
      : scrollContainer.value.scrollTop || 0

  const { position, target, offset } = props
  const rootHeightOffset = offset + rootHeight.value

  if (position === 'top') {
    if (target) {
      const difference = targetRect.bottom.value - rootHeightOffset
      fixed.value = offset > rootTop.value && targetRect.bottom.value > 0
      transform.value = difference < 0 ? difference : 0
    } else {
      fixed.value = offset > rootTop.value
    }
  } else if (target) {
    const difference =
      windowHeight.value - targetRect.top.value - rootHeightOffset
    fixed.value =
      windowHeight.value - offset < rootBottom.value &&
      windowHeight.value > targetRect.top.value
    transform.value = difference < 0 ? -difference : 0
  } else {
    fixed.value = windowHeight.value - offset < rootBottom.value
  }
}

// 在测试环境使用同步更新，在生产环境使用 RAF
const update = () => {
  if (isTest) {
    updatePosition()
  } else {
    requestAnimationFrame(updatePosition)
  }
}

// 在测试环境不使用防抖，在生产环境使用防抖
const handleScroll = isTest
  ? () => {
      updateRoot()
      updatePosition()
      emit('scroll', {
        scrollTop: scrollTop.value,
        fixed: fixed.value,
      })
    }
  : useDebounceFn(() => {
      updateRoot()
      updatePosition()
      emit('scroll', {
        scrollTop: scrollTop.value,
        fixed: fixed.value,
      })
    }, 16)

watch(fixed, (val) => emit('change', val))

onMounted(() => {
  if (props.target) {
    target.value =
      document.querySelector<HTMLElement>(props.target) ?? undefined
    if (!target.value)
      throwError(COMPONENT_NAME, `Target does not exist: ${props.target}`)
  } else {
    target.value = document.documentElement
  }
  scrollContainer.value = getScrollContainer(root.value!, true)
  updateRoot()
  updatePosition()
})

useEventListener(scrollContainer, 'scroll', handleScroll)
watchEffect(update)

defineExpose({
  /** @description update affix status */
  update: updatePosition,
  /** @description update rootRect info */
  updateRoot,
})
</script>
