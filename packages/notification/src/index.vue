<template>
  <transition name="el-notification-fade">
    <div
      v-show="visible"
      :class="['el-notification', customClass, horizontalClass]"
      :style="positionStyle"
      role="alert"
      @mouseenter="clearTimer()"
      @mouseleave="startTimer()"
      @click="click"
    >
      <i v-if="type || iconClass" class="el-notification__icon" :class="[typeClass, iconClass]"></i>
      <div class="el-notification__group" :class="{ 'is-with-icon': typeClass || iconClass }">
        <h2 class="el-notification__title" v-text="title"></h2>
        <div v-show="message" class="el-notification__content">
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <!-- Caution here, message could've been compromized, nerver use user's input as message -->
            <!-- eslint-disable-next-line -->
            <p v-else v-html="message"></p>
          </slot>
        </div>
        <div v-if="showClose" class="el-notification__closeBtn el-icon-close" @click.stop="close"></div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue'
import { eventKeys } from '../../utils/aria'
import { on, off } from '../../utils/dom'

const TypeMap: Indexable<string> = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
}

const defaultProps = {
  visible: false,
  title: '',
  message: '',
  duration: 4500,
  type: '',
  showClose: true,
  customClass: '',
  iconClass: '',
  onClose: null,
  onClick: null,
  closed: false,
  verticalOffset: 0,
  timer: null,
  dangerouslyUseHTMLString: false,
  position: 'top-right',
}
export default defineComponent({
  name: 'ElNotification',
  props: {},
  setup(props) {
    const data = toRefs({
      ...defaultProps,
      ...props,
    })
    const typeClass = computed(() => {
      const { value } = data.type
      return value && TypeMap[value] ? `el-icon-${TypeMap[value]}` : ''
    })

    const horizontalClass = computed(() => {
      const { value } = data.position
      return value.indexOf('right') > 1 ? 'right' : 'left'
    })

    const verticalProperty = computed(() => {
      const { value } = data.position
      return value.startsWith('top') ? 'top' : 'bottom'
    })

    const positionStyle = computed(() => {
      return {
        [verticalProperty.value]: `${data.verticalOffset.value}px`,
      }
    })

    return {
      ...data,
      typeClass,
      horizontalClass,
      verticalProperty,
      positionStyle,
    }
  },
  watch: {
    closed(newVal) {
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
    on(document, 'keydown', this.keydown)
  },
  beforeUnmount() {
    off(document, 'keydown', this.keydown)
  },
  methods: {
    clearTimer() {
      clearTimeout(this.timer)
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    click() {
      this?.onClick()
    },
    close() {
      this.closed = true
      this?.onClose()
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
