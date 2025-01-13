<template>
  <div
    ref="wrapperRef"
    :class="[
      ns.b(),
      ns.m(props.size),
      { [ns.m('passed')]: state.isPassed, [ns.m('animated')]: state.animated },
    ]"
    @mousemove="methods.handleDragMoving"
    @mouseleave="methods.handleDragEnd"
    @touchmove="methods.handleDragMoving"
    @touchend="methods.handleDragEnd"
  >
    <div
      ref="activeBarRef"
      :class="[ns.e('active-bar')]"
      :style="{ width: state.left + 'px' }"
    />

    <div :class="[ns.e('content')]">
      {{
        state.isPassed
          ? props.completeText || t('el.captcha.completed')
          : props.helpText || t('el.captcha.helpText')
      }}
    </div>

    <el-button
      ref="btnRef"
      :class="[ns.e('btn')]"
      :icon="state.isPassed ? Check : DArrowRight"
      :style="{ left: state.left + 'px' }"
      @mousedown="methods.handleDragStart"
      @mouseup="methods.handleDragEnd"
      @touchstart="methods.handleDragStart"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { ElButton } from '@element-plus/components/button'
import { Check, DArrowRight } from '@element-plus/icons-vue'

import { captchaEmits, captchaProps } from './captcha'

defineOptions({
  name: 'ElCaptcha',
})
const props = defineProps(captchaProps)
const emit = defineEmits(captchaEmits)

const state = reactive({
  isMoving: false,
  isPassed: false,
  left: 0,
  wrapperOffset: 0,
  btnOffset: 0,
  btnRightOffset: 0,
  wrapperWidth: 0,
  btnWidth: 0,
  startMoveX: 0,
  animated: false,
})

const ns = useNamespace('captcha')
const wrapperRef = ref<HTMLElement>()
const btnRef = ref()
const activeBarRef = ref()
const { t } = useLocale()

function setWidths() {
  state.wrapperWidth = wrapperRef.value?.getBoundingClientRect().width || 0
  state.btnWidth = btnRef.value?.ref.offsetWidth || 0
}

function getEventPageX(e: MouseEvent | TouchEvent): number {
  if ('pageX' in e) {
    return e.pageX
  } else if ('touches' in e && e.touches[0]) {
    return e.touches[0].pageX
  }
  return 0
}

const methods = {
  handleDragStart(e: MouseEvent | TouchEvent) {
    if (!state.isPassed) {
      emit('start')
      state.isMoving = true
      setWidths()

      state.wrapperOffset = wrapperRef.value?.getBoundingClientRect().left || 0

      if (e instanceof MouseEvent) {
        state.btnOffset = e.offsetX || 0
      } else if (e instanceof TouchEvent) {
        state.btnOffset = 0
      }

      state.btnRightOffset = state.btnWidth - state.btnOffset

      state.startMoveX = getEventPageX(e)

      state.animated = false
    }
  },
  handleDragMoving(e: MouseEvent | TouchEvent) {
    if (state.isMoving) {
      const result = getEventPageX(e) - state.startMoveX
      const END_OFFSET = 10

      if (0 <= result) {
        if (result < state.wrapperWidth - state.btnWidth - END_OFFSET) {
          state.left = result
        } else {
          emit('success')
          methods.complete()
        }
      }
    }
  },
  handleDragEnd() {
    if (!state.isPassed && state.isMoving) {
      emit('fail')
      methods.reset()
    }
  },
  reset() {
    state.animated = true
    state.isMoving = false
    state.left = 0
    state.isPassed = false

    emit('update:modelValue', false)
  },
  complete() {
    if (state.isPassed) return

    state.isPassed = true
    state.isMoving = false

    setWidths()

    state.left = state.wrapperWidth - state.btnWidth
    emit('update:modelValue', true)
  },
}

onMounted(() => {
  watch(
    () => props.modelValue,
    (value) => {
      if (value) {
        methods.complete()
      } else {
        methods.reset()
      }
    },
    {
      immediate: true,
    }
  )
})
</script>
