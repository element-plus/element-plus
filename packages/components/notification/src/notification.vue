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
      @mouseenter="progress.pauseOrReset"
      @mouseleave="progress.resume"
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
        <div v-if="mustShowActions" :class="ns.e('actions')">
          <el-button
            v-for="action of actions_"
            :key="action.label"
            v-bind="action.button"
            :disabled="action.disabled.value"
            @click="action.onClick"
          >
            {{ action.label }}
          </el-button>
        </div>
        <el-icon v-if="showClose" :class="ns.e('closeBtn')" @click.stop="close">
          <Close />
        </el-icon>
      </div>
      <div
        ref="progressBarRef"
        :hidden="progress.mustHide.value"
        :class="[ns.e('progressBar'), typeClass]"
      />
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import { CloseComponents, TypeComponentsMap } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { ElIcon } from '@element-plus/components/icon'
import { ElButton } from '@element-plus/components/button'
import { useGlobalComponentSettings } from '@element-plus/components/config-provider'
import { notificationEmits, notificationProps } from './notification'
import { useActions, useProgress, useVisibility } from './composables'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElNotification',
})

const props = defineProps(notificationProps)
defineEmits(notificationEmits)

const { visible, show: open, hide: close } = useVisibility(false)

const onClose = () => {
  progress.cleanup()
  props.onClose?.()
}

const progressBarRef = ref<HTMLElement>()
const progress = useProgress(
  () => props.showProgressBar,
  () => props.duration,
  () => props.timerControls === 'reset-restart',
  progressBarRef,
  close
)

const { actions: actions_, mustShow: mustShowActions } = useActions(
  () => props.actions,
  close
)

const { ns, zIndex } = useGlobalComponentSettings('notification')
const { nextZIndex, currentZIndex } = zIndex

const { Close } = CloseComponents

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

useEventListener(document, 'keydown', ({ code }: KeyboardEvent) => {
  if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
    progress.pauseOrReset()
  } else if (code === EVENT_CODE.esc) {
    close()
  } else {
    progress.resume()
  }
})

onMounted(() => {
  progress.initialize()
  nextZIndex()
  open()
})

defineExpose({
  visible,
  /** @description close notification */
  close,
})
</script>
