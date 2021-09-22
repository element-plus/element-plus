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
      <el-icon
        v-if="iconComponent"
        class="el-notification__icon"
        :class="typeClass"
      >
        <component :is="iconComponent" />
      </el-icon>
      <div class="el-notification__group">
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
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useEventListener, useTimeoutFn } from '@vueuse/core'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { ElIcon } from '@element-plus/components/icon'
import { TypeComponents, TypeComponentsMap } from '@element-plus/utils/icon'
import { notificationProps, notificationEmits } from './notification'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElNotification',

  components: {
    ElIcon,
    ...TypeComponents,
  },

  props: notificationProps,
  emits: notificationEmits,

  setup(props) {
    const visible = ref(false)
    let timer: (() => void) | undefined = undefined

    const typeClass = computed(() => {
      const type = props.type
      return type && TypeComponentsMap[props.type]
        ? `el-notification--${type}`
        : ''
    })

    const iconComponent = computed(() => {
      return TypeComponentsMap[props.type] || props.icon || ''
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
      iconComponent,
      positionStyle,
      visible,

      close,
      clearTimer,
      startTimer,
    }
  },
})
</script>
