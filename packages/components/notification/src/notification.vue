<template>
  <transition
    :name="ns.b('fade')"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="id"
      :class="[ns.b(), customClass, horizontalClass]"
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
      <div v-if="showProgress && duration! > 0" :class="ns.e('progress')">
        <el-progress
          :percentage="percentage"
          :status="progressStatus"
          :stroke-width="3"
          :show-text="false"
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, markRaw, onMounted, ref } from 'vue'
import { useEventListener, useTimeoutFn } from '@vueuse/core'
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
  pauseOnHover: true,
})
defineEmits(notificationEmits)

const { ns, zIndex } = useGlobalComponentSettings('notification')
const { nextZIndex, currentZIndex } = zIndex

const visible = ref(false)
let timer: (() => void) | undefined = undefined
const percentage = ref(100)
let progressTimer: (() => void) | undefined
let progressStartTime = 0
let totalElapsed = 0
let shouldResume = false

const typeClass = computed(() => {
  const type = props.type
  return type && TypeComponentsMap[props.type] ? ns.m(type) : ''
})

const progressStatus = computed(() => {
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

const iconComponent = computed(() => {
  if (!props.type) return props.icon
  return TypeComponentsMap[props.type] || props.icon
})

const horizontalClass = computed(() =>
  props.position.endsWith('right') ? 'right' : 'left'
)

const verticalProperty = computed(() =>
  props.position.startsWith('top') ? 'top' : 'bottom'
)

const positionStyle = computed<CSSProperties>(() => ({
  [verticalProperty.value]: `${props.offset}px`,
  zIndex: props.zIndex ?? currentZIndex.value,
}))

function startTimer() {
  if (props.duration <= 0) return

  timer?.()
  progressTimer?.()

  if (!shouldResume) {
    totalElapsed = 0
  }
  shouldResume = false

  const remaining = Math.max(0, props.duration - totalElapsed)

  // close timer with remaining duration
  ;({ stop: timer } = useTimeoutFn(() => {
    if (visible.value) close()
  }, remaining))

  // progress bar resumes from current position
  progressStartTime = Date.now()
  if (props.showProgress) {
    percentage.value = (remaining / props.duration) * 100

    function tick() {
      const elapsed = totalElapsed + (Date.now() - progressStartTime)
      percentage.value = Math.max(0, 100 - (elapsed / props.duration) * 100)
      if (percentage.value > 0) {
        ;({ stop: progressTimer } = useTimeoutFn(tick, 30))
      }
    }

    ;({ stop: progressTimer } = useTimeoutFn(tick, 30))
  }
}

function clearTimer() {
  timer?.()
  progressTimer?.()
  if (progressStartTime > 0) {
    totalElapsed += Date.now() - progressStartTime
    progressStartTime = 0
    shouldResume = true
  }
}

function onMouseEnter() {
  if (props.pauseOnHover) clearTimer()
}

function onMouseLeave() {
  if (props.pauseOnHover) startTimer()
}

function close() {
  visible.value = false
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
