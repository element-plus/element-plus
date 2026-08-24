<template>
  <transition
    :name="ns.b('fade')"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="id"
      :class="[ns.b(), customClass, horizontalClass, verticalClass]"
      :style="positionStyle"
      role="alert"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @click="onClick"
    >
      <el-icon v-if="iconComponent" :class="[ns.e('icon'), typeClass]">
        <component :is="iconComponent" />
      </el-icon>
      <div :class="ns.e('group')">
        <h2 :class="ns.e('title')" v-text="title" />
        <div
          v-show="message"
          :class="ns.e('content')"
          :style="!!title ? undefined : { margin: 0 }"
        >
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <!-- Caution here, message could've been compromised, never use user's input as message -->
            <p v-else v-html="message" />
          </slot>
        </div>
        <el-icon v-if="showClose" :class="ns.e('closeBtn')" @click.stop="close">
          <component :is="closeIcon" />
        </el-icon>
      </div>
      <div v-if="showProgressBar" :class="ns.e('progress')" aria-hidden="true">
        <el-progress v-bind="progressProps" :percentage="percentage" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, markRaw, onMounted, ref } from 'vue'
import { useEventListener, useIntervalFn, useTimeoutFn } from '@vueuse/core'
import { TypeComponentsMap, getEventCode } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { ElIcon } from '@element-plus/components/icon'
import { ElProgress } from '@element-plus/components/progress'
import { useGlobalComponentSettings } from '@element-plus/components/config-provider'
import { notificationEmits } from './notification'
import { Close } from '@element-plus/icons-vue'

import type { CSSProperties } from 'vue'
import type { NotificationProps } from './notification'

defineOptions({
  name: 'ElNotification',
})

const props = withDefaults(defineProps<NotificationProps>(), {
  customClass: '',
  duration: 4500,
  id: '',
  message: '',
  offset: 0,
  onClick: () => undefined,
  position: 'top-right',
  showClose: true,
  title: '',
  type: '',
  closeIcon: markRaw(Close),
  progress: false,
  pauseOnHover: true,
})
defineEmits(notificationEmits)

const { ns, zIndex } = useGlobalComponentSettings('notification')
const { nextZIndex, currentZIndex } = zIndex

const visible = ref(false)
let timer: (() => void) | undefined = undefined
const percentage = ref(100)
let elapsed = 0
let startedAt = 0

const typeClass = computed(() => {
  const type = props.type
  return type && TypeComponentsMap[props.type] ? ns.m(type) : ''
})

const showProgressBar = computed(() => !!props.progress && props.duration > 0)

const progressStatus = computed<
  'success' | 'warning' | 'exception' | undefined
>(() => {
  switch (props.type) {
    case 'success':
      return 'success'
    case 'warning':
      return 'warning'
    case 'error':
      return 'exception'
    default:
      return undefined
  }
})

const progressProps = computed(() => ({
  status: progressStatus.value,
  strokeWidth: 3,
  showText: false,
  ...(typeof props.progress === 'object' ? props.progress : undefined),
}))

const iconComponent = computed(() => {
  if (!props.type) return props.icon
  return TypeComponentsMap[props.type] || props.icon
})

const horizontalClass = computed(() => {
  if (props.position === 'top' || props.position === 'bottom') {
    return ns.is('center')
  }
  return props.position.endsWith('right') ? 'right' : 'left'
})

const verticalProperty = computed(() =>
  props.position.startsWith('top') ? 'top' : 'bottom'
)

const verticalClass = computed(() => verticalProperty.value)

const positionStyle = computed<CSSProperties>(() => {
  return {
    [verticalProperty.value]: `${props.offset}px`,
    zIndex: props.zIndex ?? currentZIndex.value,
  }
})

// tick interval matches the 0.1s width transition in the style, keeping the bar smooth
const { pause: pauseProgress, resume: resumeProgress } = useIntervalFn(
  () => {
    percentage.value = Math.max(
      0,
      100 - ((elapsed + Date.now() - startedAt) / props.duration) * 100
    )
  },
  100,
  { immediate: false }
)

function startTimer() {
  if (props.duration <= 0) return

  timer?.()
  pauseProgress()
  startedAt = Date.now()

  const remaining = Math.max(0, props.duration - elapsed)

  // close timer with remaining duration
  ;({ stop: timer } = useTimeoutFn(() => {
    if (visible.value) close()
  }, remaining))

  // progress bar resumes from current position
  if (showProgressBar.value) {
    percentage.value = (remaining / props.duration) * 100
    resumeProgress()
  }
}

function clearTimer() {
  timer?.()
  pauseProgress()
  if (startedAt > 0) {
    elapsed += Date.now() - startedAt
    startedAt = 0
  }
}

let isHovered = false

function onMouseEnter() {
  isHovered = true
  if (props.pauseOnHover) clearTimer()
}

function onMouseLeave() {
  isHovered = false
  if (props.pauseOnHover) startTimer()
}

function close() {
  visible.value = false
  clearTimer()
}

function onKeydown(event: KeyboardEvent) {
  const code = getEventCode(event)

  switch (code) {
    case EVENT_CODE.delete:
    case EVENT_CODE.backspace:
      clearTimer() // press delete/backspace clear timer
      break
    case EVENT_CODE.esc:
      // press esc to close the notification
      if (visible.value) {
        close()
      }
      break
    default: // resume timer
      // keep the timer paused while the pointer is still over the notification
      if (isHovered && props.pauseOnHover) break
      clearTimer()
      startTimer()
      break
  }
}

// lifecycle
onMounted(() => {
  startTimer()
  nextZIndex()
  visible.value = true
})

useEventListener(document, 'keydown', onKeydown)

defineExpose({
  visible,
  /** @description close notification */
  close,
})
</script>
