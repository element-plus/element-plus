<script setup lang="ts">
import { computed, ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
} from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import type { PropType } from 'vue'

const ns = useNamespace('splitter-bar')

defineOptions({
  name: 'ElSplitterBar',
})

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  layout: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  resizable: {
    type: Boolean,
    default: true,
  },
  startCollapsible: {
    type: Boolean,
    default: false,
  },
  endCollapsible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['moveStart', 'moving', 'moveEnd', 'collapse'])

const isHorizontal = computed(() => props.layout === 'horizontal')

const barWrapStyles = computed(() => {
  if (isHorizontal.value) {
    return { width: 0 }
  }
  return { height: 0 }
})

const draggerStyles = computed(() => {
  return {
    width: isHorizontal.value ? '16px' : '100%',
    height: isHorizontal.value ? '100%' : '16px',
    cursor: isHorizontal.value ? 'col-resize' : 'row-resize',
  }
})

const draggerPseudoClass = computed(() => {
  const prefix = ns.e('dragger')
  let className = isHorizontal.value
    ? `${prefix}-horizontal`
    : `${prefix}-vertical`
  if (startPos.value) className += ` ${prefix}-active`
  return className
})

const startPos = ref<[x: number, y: number] | null>(null)

let clearMouseup: () => void
let clearMousemove: () => void

// Start dragging
const onMousedown = (e: MouseEvent) => {
  if (!props.resizable) return
  startPos.value = [e.pageX, e.pageY]
  emit('moveStart', props.index)
  clearMouseup = useEventListener(window, 'mouseup', onMouseUp)
  clearMousemove = useEventListener(window, 'mousemove', onMouseMove)
}

// During dragging
const onMouseMove = (e: MouseEvent) => {
  const { pageX, pageY } = e
  const offsetX = pageX - startPos.value![0]
  const offsetY = pageY - startPos.value![1]
  const offset = isHorizontal.value ? offsetX : offsetY
  emit('moving', props.index, offset)
}

// End dragging
const onMouseUp = () => {
  startPos.value = null
  clearMouseup()
  clearMousemove()
  emit('moveEnd', props.index)
}

const StartIcon = computed(() => (isHorizontal.value ? ArrowLeft : ArrowUp))
const EndIcon = computed(() => (isHorizontal.value ? ArrowRight : ArrowDown))
</script>

<template>
  <div :class="[ns.b()]" :style="barWrapStyles">
    <div
      v-if="startCollapsible"
      :class="[ns.e('collapse-icon'), ns.e(`${layout}-collapse-icon-start`)]"
      @click="emit('collapse', index, 'start')"
    >
      <slot name="startCollapsible">
        <component :is="StartIcon" style="width: 12px; height: 12px" />
      </slot>
    </div>

    <div
      :class="[
        ns.e('dragger'),
        draggerPseudoClass,
        resizable ? '' : ns.e('disable'),
      ]"
      :style="draggerStyles"
      @mousedown="onMousedown"
    />
    <div
      v-if="endCollapsible"
      :class="[ns.e('collapse-icon'), ns.e(`${layout}-collapse-icon-end`)]"
      @click="emit('collapse', index, 'end')"
    >
      <slot name="endCollapsible">
        <component :is="EndIcon" style="width: 12px; height: 12px" />
      </slot>
    </div>
  </div>
</template>
