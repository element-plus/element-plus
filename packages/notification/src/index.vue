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
import { defineComponent, reactive, computed, ref, PropType } from 'vue'
import { defaultProps } from './notification.constants'
import type { NotificationVM } from './notification.constants'
import { eventKeys } from '../../utils/aria'
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
    dangerouslyUseHTMLString: { type: Boolean, default: false }, // default false
    duration: { type: Number, default: 4500 }, // default 4500
    iconClass: { type: String, default: '' },
    id: { type: String, default: '' },
    message: { type: [String, Object] as PropType<>, default: '' },
    offset: { type: Number, default: 0 }, // defaults 0
    onClick: { type: Function, default: () => void 0 },
    onClose: { type: Function, required: true },
    position: { type: String, default: 'top-right' }, // default top-right
    showClose: { type: Boolean, default: true },
    title: { type: String, default: '' },
    type: { type: String, default: '' },
    // disabling linter next two lines due to this is a internal prop which should not be accessed by end user
    // eslint-disable-next-line
    _idx: { type: Number, required: false, default: null },
    // eslint-disable-next-line
    _init: { type: Function as (idx: number, vm: NotificationVM) => void, required: false, default: null }
  },
  emits: ['close', 'click'],
  setup(props) {
    const data = reactive({
      ...defaultProps,
      ...props,
    })

    const typeClass = computed(() => {
      const { type } = data
      return type && TypeMap[type] ? `el-icon-${TypeMap[type]}` : ''
    })

    const horizontalClass = computed(() => {
      const { position } = data
      return position.indexOf('right') > 1 ? 'right' : 'left'
    })

    const verticalProperty = computed(() => {
      const { position } = data
      return position.startsWith('top') ? 'top' : 'bottom'
    })

    const positionStyle = ref({
      [verticalProperty.value]: props.offset,
    })

    const visible = ref(true)

    return {
      ...data,
      visible,
      typeClass,
      horizontalClass,
      verticalProperty,
      positionStyle,
    }
  },
  watch: {
    closed(newVal: boolean) {
      if (newVal) {
        this.visible = false
        on(this.$el, 'transitionend', this.destroyElement)
      }
    },
    offset(newVal: number) {
      this.positionStyle = {
        [this.verticalProperty]: `${newVal}px`,
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
    // When using notification programmably, this is line of code is critical
    // to obtain the public component instance
    if (typeof this._init === 'function') {
      this._init(this._idx, this)
    }
    on(document, 'keydown', this.keydown)
  },
  beforeUnmount() {
    off(document, 'keydown', this.keydown)
  },
  methods: {
    destroyElement() {
      off(this.$el, 'transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
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
      this.$emit('click')
    },
    close() {
      this.closed = true
      this.timer = null
      this.onClose()
      this.$emit('close')
    },
    keydown({ keyCode }: KeyboardEvent) {
      if (keyCode === eventKeys.delete || keyCode === eventKeys.backspace) {
        this.clearTimer() // press detele/backspace clear timer
      } else if (keyCode === eventKeys.esc) {
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
