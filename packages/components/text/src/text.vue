<template>
  <component
    :is="tag"
    ref="textRef"
    :class="textKls"
    :style="{ '-webkit-line-clamp': lineClamp }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUpdated, ref, useAttrs } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { isUndefined } from '@element-plus/utils'
import { textProps } from './text'

defineOptions({
  name: 'ElText',
})

const props = defineProps(textProps)
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

const inheritTitle = useAttrs().title

const bindTitle = () => {
  if (inheritTitle) return
  let shouldAddTitle = false
  const text = textRef.value?.textContent || ''
  if (props.truncated) {
    const width = textRef.value?.offsetWidth
    const scrollWidth = textRef.value?.scrollWidth
    if (width && scrollWidth && scrollWidth > width) {
      shouldAddTitle = true
    }
  } else if (!isUndefined(props.lineClamp)) {
    const height = textRef.value?.offsetHeight
    const scrollHeight = textRef.value?.scrollHeight
    if (height && scrollHeight && scrollHeight > height) {
      shouldAddTitle = true
    }
  }
  if (shouldAddTitle) {
    textRef.value!.setAttribute('title', text)
  } else {
    textRef.value!.removeAttribute('title')
  }
}

onMounted(bindTitle)
onUpdated(bindTitle)
</script>
