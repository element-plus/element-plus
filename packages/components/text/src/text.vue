<template>
  <EllipsisTooltip
    :enable-ellipsis="enableEllipsis"
    :tooltip-props="tooltipProps"
  >
    <component
      :is="tag"
      ref="textRef"
      :class="textKls"
      :style="{ '-webkit-line-clamp': rows }"
      v-bind="$attrs"
    >
      <slot />
    </component>
  </EllipsisTooltip>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUpdated, ref, useAttrs } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { isObject, isUndefined } from '@element-plus/utils'
import { textProps } from './text'
import { isEleEllipsis } from './util'
import EllipsisTooltip from './ellipsis-tooltip.vue'

defineOptions({
  name: 'ElText',
})

const props = defineProps(textProps)
const textRef = ref<HTMLElement>()
const enableEllipsis = ref(false)

const textSize = useFormSize()
const ns = useNamespace('text')

const _truncated = computed(() => {
  if (!props.ellipsis) return props.truncated
  return isObject(props.ellipsis) ? true : props.ellipsis
})

const rows = computed(() => {
  if (!props.ellipsis) return props.lineClamp
  if (isObject(props.ellipsis)) return props.ellipsis.rows
  return undefined
})

const textKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(textSize.value),
  ns.is('truncated', _truncated.value),
  ns.is('line-clamp', !isUndefined(rows.value)),
])

const tooltipProps = computed(() => {
  if (isObject(props.ellipsis)) {
    return isObject(props.ellipsis.tooltip)
      ? props.ellipsis.tooltip
      : { content: props.ellipsis.tooltip }
  }
  return undefined
})

const bindTitle = () => {
  const textEle = textRef.value
  if (!textEle) return

  if (props.ellipsis) {
    const isEllipsisEnabled = isObject(props.ellipsis) ? true : !!props.ellipsis
    enableEllipsis.value = isEllipsisEnabled && isEleEllipsis(textEle)
    return
  }

  const inheritTitle = useAttrs().title
  if (inheritTitle) return

  const hasTruncation = props.truncated || !isUndefined(props.lineClamp)
  const shouldShowTitle = hasTruncation && isEleEllipsis(textEle)

  if (shouldShowTitle) {
    const textContent = textEle.textContent || ''
    textEle.setAttribute('title', textContent)
  } else {
    textEle.removeAttribute('title')
  }
}

onMounted(bindTitle)
onUpdated(bindTitle)
</script>
