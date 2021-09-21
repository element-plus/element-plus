<template>
  <transition
    name="el-message-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="id"
      :class="[
        'el-message',
        type && !iconClass ? `el-message--${type}` : '',
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
        customClass,
      ]"
      :style="customStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <i
        v-if="type || iconClass"
        :class="['el-message__icon', typeClass, iconClass]"
      ></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="el-message__content">
          {{ message }}
        </p>
        <!-- Caution here, message could've been compromised, never use user's input as message -->
        <p v-else class="el-message__content" v-html="message"></p>
      </slot>
      <div
        v-if="showClose"
        class="el-message__closeBtn el-icon-close"
        @click.stop="close"
      ></div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useEventListener, useTimeoutFn } from '@vueuse/core'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { messageEmits, messageProps } from './message'

import type { CSSProperties } from 'vue'
import type { MessageProps } from './message'

const typeMap: Record<MessageProps['type'], string> = {
  success: 'el-icon-success',
  info: 'el-icon-info',
  warning: 'el-icon-warning',
  error: 'el-icon-error',
}

export default defineComponent({
  name: 'ElMessage',

  props: messageProps,
  emits: messageEmits,

  setup(props) {
    const visible = ref(false)
    let timer: (() => void) | undefined = undefined

    const typeClass = computed(() =>
      props.iconClass ? props.iconClass : typeMap[props.type] ?? ''
    )
    const customStyle = computed<CSSProperties>(() => ({
      top: `${props.offset}px`,
      zIndex: props.zIndex,
    }))

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

    function keydown({ code }: KeyboardEvent) {
      if (code === EVENT_CODE.esc) {
        // press esc to close the message
        if (visible.value) {
          close()
        }
      } else {
        startTimer() // resume timer
      }
    }

    onMounted(() => {
      startTimer()
      visible.value = true
    })

    useEventListener(document, 'keydown', keydown)

    return {
      typeClass,
      customStyle,
      visible,

      close,
      clearTimer,
      startTimer,
    }
  },
})
</script>
