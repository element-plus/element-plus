<template>
  <transition
    name="el-notification-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="id"
      :class="['el-notification', customClass, horizontalClass]"
      :style="positionStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      @click="onClick"
    >
      <i
        v-if="type || iconClass"
        class="el-notification__icon"
        :class="[typeClass, iconClass]"
      ></i>
      <div
        class="el-notification__group"
        :class="{ 'is-with-icon': typeClass || iconClass }"
      >
        <h2 class="el-notification__title" v-text="title"></h2>
        <div
          v-show="message"
          class="el-notification__content"
          :style="!!title ? undefined : { margin: 0 }"
        >
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <!-- Caution here, message could've been compromized, nerver use user's input as message -->
            <!-- eslint-disable-next-line -->
            <p v-else v-html="message"></p>
          </slot>
        </div>
        <div
          v-if="showClose"
          class="el-notification__closeBtn el-icon-close"
          @click.stop="close"
        ></div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useEventListener, useTimeoutFn } from '@vueuse/core'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { notificationProps, notificationEmits } from './notification'

import type { CSSProperties } from 'vue'
import type { NotificationProps } from './notification'

export const typeMap: Record<NotificationProps['type'], string> = {
  '': '',
  success: 'el-icon-success',
  info: 'el-icon-info',
  warning: 'el-icon-warning',
  error: 'el-icon-error',
} as const

export default defineComponent({
  name: 'ElNotification',

  props: notificationProps,
  emits: notificationEmits,

  setup(props) {
    const visible = ref(false)
    let timer: (() => void) | undefined = undefined

    const typeClass = computed(() => typeMap[props.type])

    const horizontalClass = computed(() =>
      props.position.endsWith('right') ? 'right' : 'left'
    )

    const verticalProperty = computed(() =>
      props.position.startsWith('top') ? 'top' : 'bottom'
    )

    const positionStyle = computed<CSSProperties>(() => {
      return {
        [verticalProperty.value]: `${props.offset}px`,
        zIndex: props.zIndex,
      }
    })

    function startTimer() {
      if (props.duration > 0) {
        ;({ stop: timer } = useTimeoutFn(() => {
          if (visible.value) close()
        }, props.duration))
      }
    }

    function clearTimer() {
      timer?.()
    }

    function close() {
      visible.value = false
    }

    function onKeydown({ code }: KeyboardEvent) {
      if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
        clearTimer() // press delete/backspace clear timer
      } else if (code === EVENT_CODE.esc) {
        // press esc to close the notification
        if (visible.value) {
          close()
        }
      } else {
        startTimer() // resume timer
      }
    }

    // lifecycle
    onMounted(() => {
      startTimer()
      visible.value = true
    })

    useEventListener(document, 'keydown', onKeydown)

    return {
      horizontalClass,
      typeClass,
      positionStyle,
      visible,

      close,
      clearTimer,
      startTimer,
    }
  },
})
</script>
