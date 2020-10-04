<template>
  <transition name="el-message-fade">
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
      <i v-if="type || iconClass" :class="[typeClass, iconClass]"></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="el-message__content">
          {{ message }}
        </p>
        <!-- Caution here, message could've been compromised, never use user's input as message -->
        <!--  eslint-disable-next-line -->
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
import { defineComponent, computed, ref, PropType } from 'vue'
// MessageVM is an alias of vue.VNode
import type { MessageVM } from './types'
import { EVENT_CODE } from '../../utils/aria'
import { on, off } from '../../utils/dom'

const TypeMap: Indexable<string> = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
}

export default defineComponent({
  name: 'ElMessage',
  props: {
    customClass: { type: String, default: '' },
    center: { type: Boolean, default: false },
    dangerouslyUseHTMLString: { type: Boolean, default: false },
    duration: { type: Number, default: 3000 },
    iconClass: { type: String, default: '' },
    id: { type: String, default: '' },
    message: {
      type: [String, Object] as PropType<string | MessageVM>,
      default: '',
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
    showClose: { type: Boolean, default: false },
    type: { type: String, default: 'info' },
    offset: { type: Number, default: 20 },
    zIndex: { type: Number, default: 0 },
  },
  setup(props) {
    const typeClass = computed(() => {
      const type = props.type
      return type && TypeMap[type]
        ? `el-message__icon el-icon-${TypeMap[type]}`
        : ''
    })

    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
        zIndex: props.zIndex,
      }
    })

    const visible = ref(false)
    const closed = ref(false)
    const timer = ref(null)

    return {
      typeClass,
      customStyle,
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
    this.startTimer()
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
    // start counting down to destroy message instance
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
    close() {
      this.closed = true
      this.timer = null
    },
    keydown({ code }: KeyboardEvent) {
      if (code === EVENT_CODE.esc) {
        // press esc to close the message
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
