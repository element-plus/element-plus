<template>
  <div ref="root" :class="ns.b()" :style="rootStyle">
    <el-teleport :disabled="teleportDisabled" :to="appendTo">
      <div :class="{ [ns.m('fixed')]: fixed }" :style="affixStyle">
        <slot />
      </div>
    </el-teleport>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onActivated,
  onDeactivated,
  onMounted,
  ref,
  shallowRef,
  watch,
  watchEffect,
} from 'vue'
import {
  useElementBounding,
  useEventListener,
  useWindowSize,
} from '@vueuse/core'
import ElTeleport from '@element-plus/components/teleport'
import { addUnit, getScrollContainer, throwError } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { CHANGE_EVENT } from '@element-plus/constants'
import { affixEmits } from './affix'

import type { CSSProperties } from 'vue'
import type { AffixProps } from './affix'

const COMPONENT_NAME = 'ElAffix'
defineOptions({
  name: COMPONENT_NAME,
})
const props = withDefaults(defineProps<AffixProps>(), {
  zIndex: 100,
  target: '',
  offset: 0,
  position: 'top',
  appendTo: 'body',
})
const emit = defineEmits(affixEmits)

const ns = useNamespace('affix')

const target = shallowRef<HTMLElement>()
const root = shallowRef<HTMLDivElement>()
const scrollContainer = shallowRef<HTMLElement | Window>()
const { height: windowHeight } = useWindowSize()
const {
  height: rootHeight,
  width: rootWidth,
  top: rootTop,
  bottom: rootBottom,
  left: rootLeft,
  update: updateRoot,
} = useElementBounding(root, { windowScroll: false })
const targetRect = useElementBounding(target)

const fixed = ref(false)
const scrollTop = ref(0)
const transform = ref(0)

const teleportDisabled = computed(() => {
  return !props.teleported || !fixed.value
})

const rootStyle = computed<CSSProperties>(() => {
  return {
    height: fixed.value ? `${rootHeight.value}px` : '',
    width: fixed.value ? `${rootWidth.value}px` : '',
  }
})

const affixStyle = computed<CSSProperties>(() => {
  if (!fixed.value) return {}

  const offset = addUnit(props.offset)
  return {
    height: `${rootHeight.value}px`,
    width: `${rootWidth.value}px`,
    top: props.position === 'top' ? offset : '',
    bottom: props.position === 'bottom' ? offset : '',
    left: props.teleported ? `${rootLeft.value}px` : '',
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

const updateRootRect = async () => {
  if (!fixed.value) {
    updateRoot()
    return
  }

  fixed.value = false
  await nextTick()
  updateRoot()
  fixed.value = true
}

const handleScroll = async () => {
  updateRoot()
  await nextTick()
  emit('scroll', {
    scrollTop: scrollTop.value,
    fixed: fixed.value,
  })
}

watch(fixed, (val) => emit(CHANGE_EVENT, val))

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
})

onActivated(() => {
  nextTick(updateRootRect)
})

onDeactivated(() => {
  fixed.value = false
})

useEventListener(scrollContainer, 'scroll', handleScroll)
watchEffect(update)

defineExpose({
  /** @description update affix status */
  update,
  /** @description update rootRect info */
  updateRoot: updateRootRect,
})
</script>
