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
import { isEleEllipsis } from './util'

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

const bindTitle = () => {
  const inheritTitle = useAttrs().title
  if (inheritTitle) return

  const shouldShowTitle =
    textRef.value &&
    (props.truncated || !isUndefined(props.lineClamp)) &&
    isEleEllipsis(textRef.value)

  if (shouldShowTitle) {
    const text = textRef.value?.textContent || ''
    textRef.value?.setAttribute('title', text)
  } else {
    textRef.value?.removeAttribute('title')
  }
}

onMounted(bindTitle)
onUpdated(bindTitle)
</script>
