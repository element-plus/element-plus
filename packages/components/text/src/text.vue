<template>
  <component
    :is="tag"
    ref="textRef"
    :class="textKls"
    :title="$attrs.title ?? (isTruncated ? textRef?.textContent : undefined)"
    :style="{ '-webkit-line-clamp': lineClamp }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useElementSize, useMutationObserver } from '@vueuse/core'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { cAF, isUndefined, rAF } from '@element-plus/utils'

import type { TextProps } from './text'

defineOptions({
  name: 'ElText',
})

const props = withDefaults(defineProps<TextProps>(), {
  type: '',
  size: '',
  tag: 'span',
})
const textRef = ref<HTMLElement>()

const textSize = useFormSize()
const ns = useNamespace('text')

const textKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(textSize.value),
  ns.is('truncated', props.truncated),
  ns.is('line-clamp', !isUndefined(props.lineClamp)),
])

const { width, height } = useElementSize(textRef)
const isTruncated = ref(false)
let rafId: number | undefined

const bindTitle = () => {
  if (rafId) {
    cAF(rafId)
  }

  rafId = rAF(() => {
    rafId = undefined
    isTruncated.value = false

    if (props.truncated) {
      const width = textRef.value?.offsetWidth
      const scrollWidth = textRef.value?.scrollWidth
      if (width && scrollWidth && scrollWidth > width) {
        isTruncated.value = true
      }
    } else if (!isUndefined(props.lineClamp)) {
      const height = textRef.value?.offsetHeight
      const scrollHeight = textRef.value?.scrollHeight
      if (height && scrollHeight && scrollHeight > height) {
        isTruncated.value = true
      }
    }
  })
}

watch(
  () => [width.value, height.value, props.truncated, props.lineClamp],
  bindTitle,
  { flush: 'post' }
)

useMutationObserver(textRef, bindTitle, {
  attributes: true,
  attributeFilter: ['class', 'style'],
  subtree: true,
  childList: true,
  characterData: true,
})

onMounted(bindTitle)
onBeforeUnmount(() => {
  if (rafId) {
    cAF(rafId)
  }
})

defineExpose({
  /** @description whether the text is truncated */
  isTruncated,
})
</script>
