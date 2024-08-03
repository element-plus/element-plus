<template>
  <div :style="style" :class="containerKls">
    <!-- icon & line -->
    <div :class="[ns.e('head'), ns.is(currentStatus)]">
      <div v-if="!isSimple" :class="ns.e('line')">
        <i :class="ns.e('line-inner')" :style="lineStyle" />
      </div>

      <div
        :class="[ns.e('icon'), ns.is(icon || $slots.icon ? 'icon' : 'text')]"
      >
        <slot name="icon">
          <el-icon v-if="icon" :class="ns.e('icon-inner')">
            <component :is="icon" />
          </el-icon>
          <el-icon
            v-else-if="currentStatus === 'success'"
            :class="[ns.e('icon-inner'), ns.is('status')]"
          >
            <Check />
          </el-icon>
          <el-icon
            v-else-if="currentStatus === 'error'"
            :class="[ns.e('icon-inner'), ns.is('status')]"
          >
            <Close />
          </el-icon>
          <div v-else-if="!isSimple" :class="ns.e('icon-inner')">
            {{ index + 1 }}
          </div>
        </slot>
      </div>
    </div>
    <!-- title & description -->
    <div :class="ns.e('main')">
      <div :class="[ns.e('title'), ns.is(currentStatus)]">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="isSimple" :class="ns.e('arrow')" />
      <div v-else :class="[ns.e('description'), ns.is(currentStatus)]">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { ElIcon } from '@element-plus/components/icon'
import { Check, Close } from '@element-plus/icons-vue'
import { isNumber } from '@element-plus/utils'
import { stepProps } from './item'

import type { CSSProperties, Ref } from 'vue'

export interface IStepsProps {
  space: number | string
  active: number
  direction: string
  alignCenter: boolean
  simple: boolean
  finishStatus: string
  processStatus: string
}

export interface StepItemState {
  uid: number
  currentStatus: string
  setIndex: (val: number) => void
  calcProgress: (status: string) => void
}

export interface IStepsInject {
  props: IStepsProps
  steps: Ref<StepItemState[]>
  addStep: (item: StepItemState) => void
  removeStep: (uid: number) => void
}

defineOptions({
  name: 'ElStep',
})

const props = defineProps(stepProps)
const ns = useNamespace('step')
const index = ref(-1)
const lineStyle = ref({})
const internalStatus = ref('')
const parent = inject('ElSteps') as IStepsInject
const currentInstance = getCurrentInstance()

onMounted(() => {
  watch(
    [
      () => parent.props.active,
      () => parent.props.processStatus,
      () => parent.props.finishStatus,
    ],
    ([active]) => {
      updateStatus(active)
    },
    { immediate: true }
  )
})

onBeforeUnmount(() => {
  parent.removeStep(stepItemState.uid)
})

const currentStatus = computed(() => {
  return props.status || internalStatus.value
})

const prevStatus = computed(() => {
  const prevStep = parent.steps.value[index.value - 1]
  return prevStep ? prevStep.currentStatus : 'wait'
})

const isCenter = computed(() => {
  return parent.props.alignCenter
})

const isVertical = computed(() => {
  return parent.props.direction === 'vertical'
})

const isSimple = computed(() => {
  return parent.props.simple
})

const stepsCount = computed(() => {
  return parent.steps.value.length
})

const isLast = computed(() => {
  return parent.steps.value[stepsCount.value - 1]?.uid === currentInstance?.uid
})

const space = computed(() => {
  return isSimple.value ? '' : parent.props.space
})

const containerKls = computed(() => {
  return [
    ns.b(),
    ns.is(isSimple.value ? 'simple' : parent.props.direction),
    ns.is('flex', isLast.value && !space.value && !isCenter.value),
    ns.is('center', isCenter.value && !isVertical.value && !isSimple.value),
  ]
})

const style = computed(() => {
  const style: CSSProperties = {
    flexBasis: isNumber(space.value)
      ? `${space.value}px`
      : space.value
      ? space.value
      : `${100 / (stepsCount.value - (isCenter.value ? 0 : 1))}%`,
  }
  if (isVertical.value) return style
  if (isLast.value) {
    style.maxWidth = `${100 / stepsCount.value}%`
  }
  return style
})

const setIndex = (val: number) => {
  index.value = val
}

const calcProgress = (status: string) => {
  const isWait = status === 'wait'
  const style: CSSProperties = {
    transitionDelay: `${isWait ? '-' : ''}${150 * index.value}ms`,
  }
  const step = status === parent.props.processStatus || isWait ? 0 : 100

  style.borderWidth = step && !isSimple.value ? '1px' : 0
  style[parent.props.direction === 'vertical' ? 'height' : 'width'] = `${step}%`
  lineStyle.value = style
}

const updateStatus = (activeIndex: number) => {
  if (activeIndex > index.value) {
    internalStatus.value = parent.props.finishStatus
  } else if (activeIndex === index.value && prevStatus.value !== 'error') {
    internalStatus.value = parent.props.processStatus
  } else {
    internalStatus.value = 'wait'
  }
  const prevChild = parent.steps.value[index.value - 1]
  if (prevChild) prevChild.calcProgress(internalStatus.value)
}

const stepItemState = reactive({
  uid: currentInstance!.uid,
  currentStatus,
  setIndex,
  calcProgress,
})

parent.addStep(stepItemState)
</script>
