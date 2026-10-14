<template>
  <teleport :to="appendTo">
    <div :class="kls" v-bind="$attrs">
      <el-tour-mask
        :visible="mergedShowMask"
        :fill="mergedMaskStyle?.color"
        :style="mergedMaskStyle?.style"
        :pos="pos"
        :z-index="mergedZIndex"
        :target-area-clickable="targetAreaClickable"
      />
      <el-tour-content
        v-if="modelValue"
        :key="current"
        :reference="triggerTarget"
        :placement="mergedPlacement"
        :show-arrow="mergedShowArrow"
        :z-index="mergedZIndex"
        :style="mergedContentStyle"
        @close="onEscClose"
      >
        <el-tour-steps :current="current" @update-total="onUpdateTotal">
          <slot />
        </el-tour-steps>
      </el-tour-content>
    </div>
  </teleport>
  <!-- just for IDE -->
  <slot v-if="false" name="indicators" :current="current + 1" :total="total" />
</template>

<script lang="ts" setup>
import { computed, provide, ref, toRef, useSlots, watch } from 'vue'
import { useNamespace, useZIndex } from '@element-plus/hooks'
import { isBoolean, isUndefined } from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import ElTourMask from './mask.vue'
import ElTourContent from './content.vue'
import ElTourSteps from './steps'
import { tourEmits } from './tour'
import { tourKey, useTarget } from './helper'

import type { TourStepProps } from './step'
import type { TourProps } from './tour'

defineOptions({
  name: 'ElTour',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TourProps>(), {
  showArrow: true,
  showClose: true,
  placement: 'bottom',
  mask: true,
  gap: () => ({ offset: 6, radius: 2 }),
  scrollIntoViewOptions: () => ({ block: 'center' }),
  appendTo: 'body',
  closeOnPressEscape: true,
  targetAreaClickable: true,
})
const emit = defineEmits(tourEmits)

const ns = useNamespace('tour')
const total = ref(0)
const currentStep = ref<TourStepProps>()
const isControlled = computed(() => !isUndefined(props.current))
const innerCurrent = ref(props.current ?? 0)

const current = computed<number>({
  get() {
    return isUndefined(props.current) ? innerCurrent.value : props.current
  },
  set(newValue) {
    const oldValue = isControlled.value ? props.current : innerCurrent.value
    if (oldValue === newValue) return

    if (!isControlled.value) {
      innerCurrent.value = newValue
    }

    emit('update:current', newValue)
  },
})

const currentTarget = computed(() => currentStep.value?.target)

const kls = computed(() => [
  ns.b(),
  mergedType.value === 'primary' ? ns.m('primary') : '',
])

const mergedPlacement = computed(
  () => currentStep.value?.placement || props.placement
)

const mergedContentStyle = computed(
  () => currentStep.value?.contentStyle ?? props.contentStyle
)

const mergedMask = computed(() => currentStep.value?.mask ?? props.mask)
const mergedShowMask = computed(() => !!mergedMask.value && props.modelValue)
const mergedMaskStyle = computed(() =>
  isBoolean(mergedMask.value) ? undefined : mergedMask.value
)

const mergedShowArrow = computed(
  () =>
    !!currentTarget.value && (currentStep.value?.showArrow ?? props.showArrow)
)

const mergedScrollIntoViewOptions = computed(
  () => currentStep.value?.scrollIntoViewOptions ?? props.scrollIntoViewOptions
)
const mergedType = computed(() => currentStep.value?.type ?? props.type)

const { nextZIndex } = useZIndex()
const nowZIndex = nextZIndex()
const mergedZIndex = computed(() => props.zIndex ?? nowZIndex)

const { mergedPosInfo: pos, triggerTarget } = useTarget(
  currentTarget,
  toRef(props, 'modelValue'),
  toRef(props, 'gap'),
  mergedMask,
  mergedScrollIntoViewOptions
)

watch(
  () => props.current,
  (val) => !isUndefined(val) && (innerCurrent.value = val)
)

watch(
  current,
  (newCurrent, oldCurrent) => {
    if (!props.modelValue || newCurrent === oldCurrent) return
    emit(CHANGE_EVENT, newCurrent)
  },
  { flush: 'post' }
)

watch(
  () => props.modelValue,
  (val) => {
    if (!val && current.value !== 0) {
      current.value = 0
    }
  }
)

const onEscClose = () => {
  if (props.closeOnPressEscape) {
    emit(UPDATE_MODEL_EVENT, false)
    emit('close', current.value)
  }
}

const onUpdateTotal = (val: number) => {
  total.value = val
}

const slots = useSlots()

provide(tourKey, {
  currentStep,
  current,
  total,
  showClose: toRef(props, 'showClose'),
  closeIcon: toRef(props, 'closeIcon'),
  mergedType,
  ns,
  slots,
  updateModelValue(modelValue) {
    emit(UPDATE_MODEL_EVENT, modelValue)
  },
  onClose() {
    emit('close', current.value)
  },
  onFinish() {
    emit('finish')
  },
})
</script>
