<template>
  <span ref="avatarRef" :class="avatarClass" :style="sizeStyle">
    <img
      v-if="(src || srcSet) && !hasLoadError"
      :src="src"
      :alt="alt"
      :srcset="srcSet"
      :style="fitStyle"
      @error="handleError"
    />
    <el-icon v-else-if="icon">
      <component :is="icon" />
    </el-icon>
    <span v-else ref="textRef" :class="ns.e('text')" :style="textStyle">
      <slot />
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed, inject, ref, shallowRef, watch } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import { addUnit, isNumber, isString } from '@element-plus/utils'
import { avatarEmits, avatarProps } from './avatar'
import { avatarGroupContextKey } from './constants'
import { useResizeObserver } from '@vueuse/core'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElAvatar',
})

const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)

const avatarGroupContext = inject(avatarGroupContextKey, undefined)

const ns = useNamespace('avatar')

const avatarRef = shallowRef<HTMLElement>()
const textRef = shallowRef<HTMLElement>()
const hasLoadError = ref(false)
const scale = ref(1)

const size = computed(() => props.size ?? avatarGroupContext?.size)
const shape = computed(
  () => props.shape ?? avatarGroupContext?.shape ?? 'circle'
)

const avatarClass = computed(() => {
  const { icon } = props
  const classList = [ns.b()]
  if (isString(size.value)) classList.push(ns.m(size.value))
  if (icon) classList.push(ns.m('icon'))
  if (shape.value) classList.push(ns.m(shape.value))
  return classList
})

const sizeStyle = computed(() => {
  return isNumber(size.value)
    ? (ns.cssVarBlock({
        size: addUnit(size.value)!,
      }) as CSSProperties)
    : undefined
})

const fitStyle = computed<CSSProperties>(() => ({
  objectFit: props.fit,
}))

const textStyle = computed<CSSProperties>(() => {
  if (scale.value < 1) {
    return {
      transform: `scale(${scale.value})`,
    }
  }
  return {}
})

// need reset hasLoadError to false if src changed
watch(
  () => [props.src, props.srcSet],
  () => (hasLoadError.value = false)
)

function handleError(e: Event) {
  hasLoadError.value = true
  emit('error', e)
}

function setTextAutoFitScale() {
  if (props.src || props.srcSet || props.icon) return

  const avatarWidth = avatarRef.value!.offsetWidth
  const textWidth = textRef.value!.offsetWidth
  scale.value = avatarWidth / textWidth
}

// When size prop or text changes, reset the scale
useResizeObserver([avatarRef, textRef], setTextAutoFitScale)
</script>
