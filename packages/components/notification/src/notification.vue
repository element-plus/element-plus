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
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
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
          <Close />
        </el-icon>
      </div>
      <div
        v-if="showProgress && duration !== 0"
        :class="[ns.e('progress'), typeClass || ns.m('primary')]"
        :style="progressStyle"
      />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useEventListener, useTimeoutFn } from '@vueuse/core'
import { CloseComponents, TypeComponentsMap } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { ElIcon } from '@element-plus/components/icon'
import { useGlobalComponentSettings } from '@element-plus/components/config-provider'
import { notificationEmits, notificationProps } from './notification'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElNotification',
})

const props = defineProps(notificationProps)
defineEmits(notificationEmits)

const { ns, zIndex } = useGlobalComponentSettings('notification')
const { nextZIndex, currentZIndex } = zIndex

const { Close } = CloseComponents

const visible = ref(false)
const isPaused = ref(false)
const remainingTime = ref(props.duration)
const startTime = ref(0)
let timer: ReturnType<typeof useTimeoutFn> | null = null

const typeClass = computed(() => {
  const type = props.type
  return type && TypeComponentsMap[props.type] ? ns.m(type) : ''
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

const positionStyle = computed<CSSProperties>(() => {
  return {
    [verticalProperty.value]: `${props.offset}px`,
    zIndex: props.zIndex ?? currentZIndex.value,
  }
})

const progressStyle = computed(() => {
  return {
    animationDuration: `${props.duration}ms`,
    animationPlayState: isPaused.value ? 'paused' : 'running',
    opacity: visible.value ? 1 : 0,
  }
})

function startTimer(durationToUse = remainingTime.value) {
  startTime.value = Date.now()
  timer = useTimeoutFn(() => {
    if (visible.value) close()
  }, durationToUse)
}

function pauseTimer() {
  if (timer) {
    timer.stop()
    const elapsed = Date.now() - startTime.value
    remainingTime.value = Math.max(remainingTime.value - elapsed, 0)
  }
}

function resumeTimer() {
  if (remainingTime.value > 0) {
    startTimer(remainingTime.value)
  } else {
    close()
  }
}

function handleMouseEnter() {
  isPaused.value = true
  pauseTimer()
}

function handleMouseLeave() {
  isPaused.value = false
  resumeTimer()
}

function close() {
  visible.value = false
}

function onKeydown({ code }: KeyboardEvent) {
  if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
    pauseTimer() // press delete/backspace clear timer
  } else if (code === EVENT_CODE.esc) {
    // press esc to close the notification
    if (visible.value) {
      close()
    }
  } else {
    resumeTimer() // resume timer
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
