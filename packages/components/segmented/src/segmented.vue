<template>
  <div ref="segmentedRef" :class="segmentedCls">
    <div :class="ns.e('group')">
      <div :style="selectedStyle" :class="selectedCls" />
      <div
        v-for="(item, index) in options"
        :key="index"
        :class="getItemCls(item)"
        @click="handleChange(item)"
      >
        <div :class="ns.e('item-label')">
          <slot :item="item">{{ getLabel(item) }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { isObject } from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { segmentedEmits, segmentedProps } from './segmented'
import type { Option } from './types'

defineOptions({
  name: 'ElSegmented',
})

const props = defineProps(segmentedProps)
const emit = defineEmits(segmentedEmits)

const ns = useNamespace('segmented')
const segmentedSize = useFormSize()
const segmentedRef = ref<HTMLElement | null>(null)

const state = reactive({
  isInit: false,
  width: 0,
  translateX: 0,
  disabled: false,
})

const handleChange = (item: Option) => {
  if (getDisabled(item)) return
  const value = getValue(item)
  if (props.modelValue === value) return
  emit(UPDATE_MODEL_EVENT, value)
  emit(CHANGE_EVENT, value)
}

const getValue = (item: Option) => {
  return isObject(item) ? item.value : item
}

const getLabel = (item: Option) => {
  return isObject(item) ? item.label : item
}

const getDisabled = (item: Option) => {
  return props.disabled || (isObject(item) ? item.disabled : false)
}

const getOption = (value: string | number) => {
  return props.options.find((item) => getValue(item) === value)
}

const getItemCls = (item: Option) => {
  return [
    ns.e('item'),
    ns.is('selected', props.modelValue === getValue(item)),
    ns.is('disabled', getDisabled(item)),
  ]
}

const updateSelect = () => {
  if (!segmentedRef.value) return
  const selectedItem = segmentedRef.value.querySelector('.is-selected')
  if (!selectedItem) {
    state.width = 0
    state.translateX = 0
    state.disabled = false
    return
  }
  const rect = selectedItem.getBoundingClientRect()
  state.isInit = true
  state.width = rect.width
  state.translateX = selectedItem.offsetLeft
  state.disabled = getDisabled(getOption(props.modelValue))
}

const segmentedCls = computed(() => [
  ns.b(),
  ns.m(segmentedSize.value),
  ns.is('block', props.block),
])

const selectedStyle = computed(() => ({
  width: `${state.width}px`,
  transform: `translateX(${state.translateX}px)`,
  display: state.isInit ? 'block' : 'none',
}))

const selectedCls = computed(() => [
  ns.e('item-selected'),
  ns.is('disabled', state.disabled),
])

useResizeObserver(segmentedRef, updateSelect)

watch(
  () => props.modelValue,
  () => {
    updateSelect()
  },
  {
    flush: 'post',
  }
)
</script>
