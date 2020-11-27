<template>
  <transition name="el-notification-fade">
    <div
      v-show="visible"
      :id="id"
      :class="['el-notification', customClass, horizontalClass]"
      :style="positionStyle"
      role="alert"
      @mouseenter="clearTimer()"
      @mouseleave="startTimer()"
      @click="click"
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
        <div v-show="message" class="el-notification__content">
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
import { defineComponent, computed, ref, PropType } from 'vue'
// notificationVM is an alias of vue.VNode
import type { NotificationVM } from './notification.type'
import { EVENT_CODE } from '../../utils/aria'
import { on, off } from '../../utils/dom'

const TypeMap: Indexable<string> = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
}

export default defineComponent({
  name: 'ElNotification',
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
      default: () => void 0,
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
    position: {
      type: String as PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>,
      default: 'top-right',
    },
    showClose: { type: Boolean, default: true },
    title: { type: String, default: '' },
    type: { type: String, default: '' },
    zIndex: { type: Number, default: 0 },
  },
  emits: ['close', 'click'],
  setup(props) {

    const typeClass = computed(() => {
      const type = props.type
      return type && TypeMap[type] ? `el-icon-${TypeMap[type]}` : ''
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
      }
    })

    const visible = ref(false)
    const closed = ref(false)
    const timer = ref(null)

    return {
      horizontalClass,
      typeClass,
      positionStyle,
      verticalProperty,
      visible,
      closed,
      timer,
    }
  },
  watch: {
    closed(newVal: boolean) {
      if (newVal) {
        this.visible = false
        on(this.$el, 'transitionend', this.destroyElement)
      }
    },
  },
  mounted() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close()
        }
      }, this.duration)
    }
    this.visible = true
    on(document, 'keydown', this.keydown)
  },
  beforeUnmount() {
    off(document, 'keydown', this.keydown)
  },
  methods: {
    destroyElement() {
      this.visible = false
      off(this.$el, 'transitionend', this.destroyElement)
      this.onClose()
    },
    // start counting down to destroy notification instance
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    // clear timer
    clearTimer() {
      clearTimeout(this.timer)
      this.timer = null
    },
    // Event handlers
    click() {
      this?.onClick()
    },
    close() {
      this.closed = true
      this.timer = null
    },
    keydown({ code }: KeyboardEvent) {
      if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
        this.clearTimer() // press delete/backspace clear timer
      } else if (code === EVENT_CODE.esc) {
        // press esc to close the notification
        if (!this.closed) {
          this.close()
        }
      } else {
        this.startTimer() // resume timer
      }
    },
  },
})
</script>
