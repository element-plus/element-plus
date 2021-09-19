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
      <el-icon v-if="icon" class="el-notification__icon">
        <component :is="icon" />
      </el-icon>
      <div class="el-notification__group" :class="{ 'is-with-icon': icon }">
        <h2 class="el-notification__title" v-text="title"></h2>
        <div
          v-show="message"
          class="el-notification__content"
          :style="!!title ? null : 'margin: 0'"
        >
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <!-- Caution here, message could've been compromized, nerver use user's input as message -->
            <!-- eslint-disable-next-line -->
            <p v-else v-html="message"></p>
          </slot>
        </div>
        <el-icon
          v-if="showClose"
          class="el-notification__closeBtn"
          @click.stop="close"
        >
          <close />
        </el-icon>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted, onBeforeUnmount } from 'vue'
// notificationVM is an alias of vue.VNode
import { EVENT_CODE } from '@element-plus/utils/aria'
import { on, off } from '@element-plus/utils/dom'
import { ElIcon } from '@element-plus/components/icon'
import {
  Close,
  SuccessFilled,
  WarningFilled,
  CircleCloseFilled,
  InfoFilled,
} from '@element-plus/icons'

import type { CSSProperties, PropType } from 'vue'
import type { NotificationVM, Position } from './notification.type'

export const TYPE_COMPONENTS_MAP = {
  success: 'SuccessFilled',
  warning: 'WarningFilled',
  error: 'CircleCloseFilled',
  info: 'InfoFilled',
}

export default defineComponent({
  name: 'ElNotification',
  components: {
    ElIcon,
    Close,
    SuccessFilled,
    WarningFilled,
    CircleCloseFilled,
    InfoFilled,
  },
  props: {
    customClass: { type: String, default: '' },
    dangerouslyUseHTMLString: { type: Boolean, default: false },
    duration: { type: Number, default: 4500 },
    iconClass: { type: String, default: '' },
    id: { type: String, default: '' },
    message: {
      type: [String, Object] as PropType<string | NotificationVM>,
      default: '',
    },
    offset: { type: Number, default: 0 },
    onClick: {
      type: Function as PropType<() => void>,
      default: () => undefined,
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
    position: {
      type: String as PropType<Position>,
      default: 'top-right',
    },
    showClose: { type: Boolean, default: true },
    title: { type: String, default: '' },
    type: { type: String, default: '' },
    zIndex: { type: Number, default: 0 },
  },
  emits: ['destroy'],

  setup(props) {
    const visible = ref(false)
    let timer = null

    const icon = computed(() => {
      return props.iconClass || TYPE_COMPONENTS_MAP[props.type] || ''
    })

    const horizontalClass = computed(() => {
      return props.position.indexOf('right') > 1 ? 'right' : 'left'
    })

    const verticalProperty = computed(() => {
      return props.position.startsWith('top') ? 'top' : 'bottom'
    })

    const positionStyle = computed(() => {
      return {
        [verticalProperty.value]: `${props.offset}px`,
        'z-index': props.zIndex,
      } as CSSProperties
    })

    function startTimer() {
      if (props.duration > 0) {
        timer = setTimeout(() => {
          if (visible.value) {
            close()
          }
        }, props.duration)
      }
    }

    function clearTimer() {
      clearTimeout(timer)
      timer = null
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
      on(document, 'keydown', onKeydown)
    })

    onBeforeUnmount(() => {
      off(document, 'keydown', onKeydown)
    })

    return {
      horizontalClass,
      icon,
      positionStyle,
      visible,

      close,
      clearTimer,
      startTimer,
    }
  },
})
</script>
