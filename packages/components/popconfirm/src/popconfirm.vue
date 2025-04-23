<template>
  <el-tooltip
    ref="tooltipRef"
    trigger="click"
    effect="light"
    v-bind="$attrs"
    :popper-class="`${ns.namespace.value}-popover`"
    :popper-style="style"
    :teleported="teleported"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :hide-after="hideAfter"
    :persistent="persistent"
  >
    <template #content>
      <div :class="ns.b()">
        <div :class="ns.e('main')">
          <el-icon
            v-if="!hideIcon && icon"
            :class="ns.e('icon')"
            :style="{ color: iconColor }"
          >
            <component :is="icon" />
          </el-icon>
          {{ title }}
        </div>
        <div :class="ns.e('action')">
          <slot name="actions" :confirm="confirm" :cancel="cancel">
            <el-button
              size="small"
              :type="cancelButtonType === 'text' ? '' : cancelButtonType"
              :text="cancelButtonType === 'text'"
              @click="cancel"
            >
              {{ finalCancelButtonText }}
            </el-button>
            <el-button
              size="small"
              :type="confirmButtonType === 'text' ? '' : confirmButtonType"
              :text="confirmButtonType === 'text'"
              :loading="finalConfirmButtonLoading"
              @click="confirm"
            >
              {{ finalConfirmButtonText }}
            </el-button>
          </slot>
        </div>
      </div>
    </template>
    <template v-if="$slots.reference">
      <slot name="reference" />
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import ElButton from '@element-plus/components/button'
import ElIcon from '@element-plus/components/icon'
import ElTooltip from '@element-plus/components/tooltip'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { addUnit } from '@element-plus/utils'
import { popconfirmEmits, popconfirmProps } from './popconfirm'

import type { TooltipInstance } from '@element-plus/components/tooltip'

defineOptions({
  name: 'ElPopconfirm',
})

const props = defineProps(popconfirmProps)
const emit = defineEmits(popconfirmEmits)

const { t } = useLocale()
const ns = useNamespace('popconfirm')
const tooltipRef = ref<TooltipInstance>()
const confirmLoading = ref<boolean>(false)

const hidePopper = () => {
  tooltipRef.value?.onClose?.()
}

const style = computed(() => {
  return {
    width: addUnit(props.width),
  }
})

const confirm = (e: MouseEvent) => {
  const done = () => {
    // 当父组件未传递 loading 状态时自动关闭 loading
    if (props.confirmButtonLoading === undefined) {
      confirmLoading.value = false
    }

    hidePopper()
  }

  // 当父组件未传递 loading 状态时自动开启 loading
  if (props.confirmButtonLoading === undefined) {
    confirmLoading.value = true
  }

  emit('confirm', e, done)
}
const cancel = (e: MouseEvent) => {
  emit('cancel', e)
  hidePopper()
}

const finalConfirmButtonText = computed(
  () => props.confirmButtonText || t('el.popconfirm.confirmButtonText')
)
const finalCancelButtonText = computed(
  () => props.cancelButtonText || t('el.popconfirm.cancelButtonText')
)

const finalConfirmButtonLoading = computed(() => {
  return props.confirmButtonLoading !== undefined
    ? props.confirmButtonLoading
    : confirmLoading.value
})
</script>
