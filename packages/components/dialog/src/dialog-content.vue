<template>
  <div
    ref="dialogRef"
    :class="[
      ns.b(),
      ns.is('fullscreen', fullscreen),
      ns.is('draggable', draggable),
      { [ns.m('center')]: center },
      customClass,
    ]"
    aria-modal="true"
    role="dialog"
    :aria-label="title || 'dialog'"
    :style="style"
  >
    <div ref="headerRef" :class="ns.e('header')">
      <slot name="title">
        <span :class="ns.e('title')">
          {{ title }}
        </span>
      </slot>
    </div>
    <div :class="ns.e('body')">
      <slot />
    </div>
    <div v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer" />
    </div>
    <button
      v-if="showClose"
      aria-label="close"
      :class="ns.e('headerbtn')"
      type="button"
      @click="$emit('close')"
    >
      <el-icon :class="ns.e('close')">
        <component :is="closeIcon || Close" />
      </el-icon>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { CloseComponents } from '@element-plus/utils'
import { dialogInjectionKey } from '@element-plus/tokens'
import { dialogContentProps, dialogContentEmits } from './dialog-content'

const { Close } = CloseComponents

defineOptions({ name: 'ElDialogContent' })
defineProps(dialogContentProps)
defineEmits(dialogContentEmits)

const { dialogRef, headerRef, ns, style } = inject(dialogInjectionKey)!
// const { focusTrapRef, onKeydown } = inject(FOCUS_TRAP_INJECTION_KEY)!

// const composedDialogRef = composeRefs(focusTrapRef, dialogRef)
</script>
