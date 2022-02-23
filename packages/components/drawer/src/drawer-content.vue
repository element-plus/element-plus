<template>
  <div
    :ref="composedDialogRef"
    aria-modal="true"
    :aria-hidden="!visible"
    :aria-labelledby="ns.e('title')"
    :aria-label="title"
    :class="[ns.b(), direction, ns.is('open', visible), customClass]"
    :style="contentStyle"
    role="dialog"
    @click.stop
    @keydown="onKeydown"
  >
    <header v-if="withHeader" :id="ns.e('title')" :class="ns.e('header')">
      <slot name="title">
        <span role="heading" :title="title">
          {{ title }}
        </span>
      </slot>
    </header>
    <section :class="ns.e('body')">
      <slot></slot>
    </section>
    <div v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer"></slot>
    </div>
    <button
      v-if="showClose"
      :aria-label="'close ' + (title || 'drawer')"
      :class="ns.e('close-btn')"
      type="button"
      @click="$emit('close')"
    >
      <el-icon :class="ns.e('close')"><Close /></el-icon>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { isNumber, composeRefs } from '@element-plus/utils'
import ElIcon from '@element-plus/components/icon'
import { Close } from '@element-plus/icons-vue'
import { FOCUS_TRAP_INJECTION_KEY } from '@element-plus/components/focus-trap'
import { drawerContentProps, drawerContentEmits } from './drawer-content'
import { elDrawerInjectionKey } from './token'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElDrawerContent',
})
defineEmits(drawerContentEmits)
const props = defineProps(drawerContentProps)

const { drawerRef, ns, visible } = inject(elDrawerInjectionKey)!
const { focusTrapRef, onKeydown } = inject(FOCUS_TRAP_INJECTION_KEY)!

const composedDialogRef = composeRefs(focusTrapRef, drawerRef)

const isHorizontal = computed(
  () => props.direction === 'rtl' || props.direction === 'ltr'
)

const drawerSize = computed(() =>
  isNumber(props.size) ? `${props.size}px` : props.size
)

const contentStyle = computed(() => {
  const style: CSSProperties = {}
  if (isHorizontal.value) {
    style.width = drawerSize.value
  } else {
    style.height = drawerSize.value
  }
  return style
})
</script>
