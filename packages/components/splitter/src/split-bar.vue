<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
} from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'

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
    type: String,
    values: ['horizontal', 'vertical'] as const,
    default: 'horizontal',
  },
  resizable: {
    type: Boolean,
    default: true,
  },
  startCollapsible: {
    type: Boolean,
  },
  endCollapsible: {
    type: Boolean,
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
    touchAction: 'none',
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

// Start dragging
const onMousedown = (e: MouseEvent) => {
  if (!props.resizable) return
  startPos.value = [e.pageX, e.pageY]
  emit('moveStart', props.index)
  window.addEventListener('mouseup', onMouseUp)
  window.addEventListener('mousemove', onMouseMove)
}

const onTouchStart = (e: TouchEvent) => {
  if (props.resizable && e.touches.length === 1) {
    e.preventDefault()
    const touch = e.touches[0]
    startPos.value = [touch.pageX, touch.pageY]
    emit('moveStart', props.index)
    window.addEventListener('touchend', onTouchEnd)
    window.addEventListener('touchmove', onTouchMove)
  }
}

// During dragging
const onMouseMove = (e: MouseEvent) => {
  const { pageX, pageY } = e
  const offsetX = pageX - startPos.value![0]
  const offsetY = pageY - startPos.value![1]
  const offset = isHorizontal.value ? offsetX : offsetY
  emit('moving', props.index, offset)
}

const onTouchMove = (e: TouchEvent) => {
  if (e.touches.length === 1) {
    e.preventDefault()
    const touch = e.touches[0]
    const offsetX = touch.pageX - startPos.value![0]
    const offsetY = touch.pageY - startPos.value![1]
    const offset = isHorizontal.value ? offsetX : offsetY
    emit('moving', props.index, offset)
  }
}

// End dragging
const onMouseUp = () => {
  startPos.value = null
  window.removeEventListener('mouseup', onMouseUp)
  window.removeEventListener('mousemove', onMouseMove)
  emit('moveEnd', props.index)
}

const onTouchEnd = () => {
  startPos.value = null
  window.removeEventListener('touchend', onTouchEnd)
  window.removeEventListener('touchmove', onTouchMove)
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
      <slot name="start-collapsible">
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
      @touchstart="onTouchStart"
    />
    <div
      v-if="endCollapsible"
      :class="[ns.e('collapse-icon'), ns.e(`${layout}-collapse-icon-end`)]"
      @click="emit('collapse', index, 'end')"
    >
      <slot name="end-collapsible">
        <component :is="EndIcon" style="width: 12px; height: 12px" />
      </slot>
    </div>
  </div>
</template>
