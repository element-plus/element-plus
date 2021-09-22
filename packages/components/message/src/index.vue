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
        type && !icon ? `el-message--${type}` : '',
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
        customClass,
      ]"
      :style="customStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <el-icon v-if="iconComponent" class="el-message__icon" :class="typeClass">
        <component :is="iconComponent" />
      </el-icon>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="el-message__content">
          {{ message }}
        </p>
        <!-- Caution here, message could've been compromised, never use user's input as message -->
        <!--  eslint-disable-next-line -->
        <p v-else class="el-message__content" v-html="message"></p>
      </slot>
      <el-icon
        v-if="showClose"
        class="el-message__closeBtn"
        @click.stop="close"
      >
        <close />
      </el-icon>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { on, off } from '@element-plus/utils/dom'
import { ElIcon } from '@element-plus/components/icon'
import { TypeComponents, TypeComponentsMap } from '@element-plus/utils/icon'

// MessageVM is an alias of vue.VNode
import type { PropType, Component } from 'vue'
import type { MessageVM } from './types'

export default defineComponent({
  name: 'ElMessage',
  components: {
    ElIcon,
    ...TypeComponents,
  },
  props: {
    customClass: { type: String, default: '' },
    center: { type: Boolean, default: false },
    dangerouslyUseHTMLString: { type: Boolean, default: false },
    duration: { type: Number, default: 3000 },
    icon: {
      type: [String, Object] as PropType<string | Component>,
      default: '',
    },
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
  emits: ['destroy'],
  setup(props) {
    const typeClass = computed(() => {
      const type = props.type
      return type && TypeComponentsMap[type] ? `el-message-icon--${type}` : ''
    })

    const iconComponent = computed(() => {
      return props.icon || TypeComponentsMap[props.type] || ''
    })
    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
        zIndex: props.zIndex,
      }
    })

    const visible = ref(false)
    let timer = null

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
      on(document, 'keydown', keydown)
    })

    onBeforeUnmount(() => {
      off(document, 'keydown', keydown)
    })

    return {
      typeClass,
      iconComponent,
      customStyle,
      visible,

      close,
      clearTimer,
      startTimer,
    }
  },
})
</script>
