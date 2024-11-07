<template>
  <div
    v-if="options.length"
    :id="inputId"
    ref="segmentedRef"
    :class="segmentedCls"
    role="radiogroup"
    :aria-label="!isLabeledByFormItem ? ariaLabel || 'segmented' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem!.labelId : undefined"
  >
    <div :class="[ns.e('group'), ns.m(props.direction)]">
      <div :style="selectedStyle" :class="selectedCls" />
      <label
        v-for="(item, index) in options"
        :key="index"
        :class="getItemCls(item)"
      >
        <input
          :class="ns.e('item-input')"
          type="radio"
          :name="name"
          :disabled="getDisabled(item)"
          :checked="getSelected(item)"
          @change="handleChange(item)"
        />
        <div :class="ns.e('item-label')">
          <slot :item="item">{{ getLabel(item) }}</slot>
        </div>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { useActiveElement, useResizeObserver } from '@vueuse/core'
import { useId, useNamespace } from '@element-plus/hooks'
import {
  useFormDisabled,
  useFormItem,
  useFormItemInputId,
  useFormSize,
} from '@element-plus/components/form'
import { debugWarn, isObject } from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { segmentedEmits, segmentedProps } from './segmented'
import type { Option } from './types'

defineOptions({
  name: 'ElSegmented',
})

const props = defineProps(segmentedProps)
const emit = defineEmits(segmentedEmits)

const ns = useNamespace('segmented')
const segmentedId = useId()
const segmentedSize = useFormSize()
const _disabled = useFormDisabled()
const { formItem } = useFormItem()
const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
})

const segmentedRef = ref<HTMLElement | null>(null)
const activeElement = useActiveElement()

const state = reactive({
  isInit: false,
  width: 0,
  height: 0,
  translateX: 0,
  translateY: 0,
  focusVisible: false,
})

const handleChange = (item: Option) => {
  const value = getValue(item)
  emit(UPDATE_MODEL_EVENT, value)
  emit(CHANGE_EVENT, value)
}

const getValue = (item: Option) => {
  return isObject(item) ? item.value : item
}

const getLabel = (item: Option) => {
  return isObject(item) ? item.label : item
}

const getDisabled = (item: Option | undefined) => {
  return !!(_disabled.value || (isObject(item) ? item.disabled : false))
}

const getSelected = (item: Option) => {
  return props.modelValue === getValue(item)
}

const getOption = (value: any) => {
  return props.options.find((item) => getValue(item) === value)
}

const getItemCls = (item: Option) => {
  return [
    ns.e('item'),
    ns.is('selected', getSelected(item)),
    ns.is('disabled', getDisabled(item)),
  ]
}

const updateSelect = () => {
  if (!segmentedRef.value) return
  const selectedItem = segmentedRef.value.querySelector(
    '.is-selected'
  ) as HTMLElement
  const selectedItemInput = segmentedRef.value.querySelector(
    '.is-selected input'
  ) as HTMLElement
  if (!selectedItem || !selectedItemInput) {
    state.width = 0
    state.height = 0
    state.translateX = 0
    state.translateY = 0
    state.focusVisible = false
    return
  }
  const rect = selectedItem.getBoundingClientRect()
  state.isInit = true
  if (props.direction === 'vertical') {
    state.height = rect.height
    state.translateY = selectedItem.offsetTop
  } else {
    state.width = rect.width
    state.translateX = selectedItem.offsetLeft
  }
  try {
    // This will failed in test
    state.focusVisible = selectedItemInput.matches(':focus-visible')
  } catch {}
}

const segmentedCls = computed(() => [
  ns.b(),
  ns.m(segmentedSize.value),
  ns.is('block', props.block),
])

const selectedStyle = computed(() => ({
  width: props.direction === 'vertical' ? '100%' : `${state.width}px`,
  height: props.direction === 'vertical' ? `${state.height}px` : '100%',
  transform:
    props.direction === 'vertical'
      ? `translateY(${state.translateY}px)`
      : `translateX(${state.translateX}px)`,
  display: state.isInit ? 'block' : 'none',
}))

const selectedCls = computed(() => [
  ns.e('item-selected'),
  ns.is('disabled', getDisabled(getOption(props.modelValue))),
  ns.is('focus-visible', state.focusVisible),
])

const name = computed(() => {
  return props.name || segmentedId.value
})

useResizeObserver(segmentedRef, updateSelect)

watch(activeElement, updateSelect)

watch(
  () => props.modelValue,
  () => {
    updateSelect()
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  },
  {
    flush: 'post',
  }
)
</script>
