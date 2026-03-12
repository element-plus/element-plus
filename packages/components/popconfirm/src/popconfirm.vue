<template>
  <g-tooltip
    ref="tooltipRef"
    trigger="click"
    :effect="effect"
    v-bind="$attrs"
    :virtual-triggering="virtualTriggering"
    :virtual-ref="virtualRef"
    :popper-class="`${ns.namespace.value}-popover`"
    :popper-style="style"
    :teleported="teleported"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :hide-after="hideAfter"
    :persistent="persistent"
    loop
    @show="showPopper"
  >
    <template #content>
      <div ref="rootRef" tabindex="-1" :class="ns.b()">
        <div :class="ns.e('main')">
          <g-icon
            v-if="!hideIcon && icon"
            :class="ns.e('icon')"
            :style="{ color: iconColor }"
          >
            <component :is="icon" />
          </g-icon>
          {{ title }}
        </div>
        <div :class="ns.e('action')">
          <slot name="actions" :confirm="confirm" :cancel="cancel">
            <g-button
              size="small"
              :type="cancelButtonType === 'text' ? '' : cancelButtonType"
              :text="cancelButtonType === 'text'"
              @click="cancel"
            >
              {{ finalCancelButtonText }}
            </g-button>
            <g-button
              size="small"
              :type="confirmButtonType === 'text' ? '' : confirmButtonType"
              :text="confirmButtonType === 'text'"
              @click="confirm"
            >
              {{ finalConfirmButtonText }}
            </g-button>
          </slot>
        </div>
      </div>
    </template>
    <template v-if="$slots.reference">
      <slot name="reference" />
    </template>
  </g-tooltip>
</template>

<script lang="ts" setup>
import { computed, ref, unref } from 'vue'
import GButton from '@element-plus/components/button'
import GIcon from '@element-plus/components/icon'
import GTooltip from '@element-plus/components/tooltip'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { addUnit } from '@element-plus/utils'
import { QuestionFilled } from '@element-plus/icons-vue'
import { popconfirmEmits } from './popconfirm'

import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { PopconfirmProps } from './popconfirm'

defineOptions({
  name: 'GPopconfirm',
})

const props = withDefaults(defineProps<PopconfirmProps>(), {
  confirmButtonType: 'primary',
  cancelButtonType: 'text',
  icon: () => QuestionFilled,
  iconColor: '#f90',
  hideAfter: 200,
  effect: 'light',
  teleported: true,
  width: 150,
})
const emit = defineEmits(popconfirmEmits)

const { t } = useLocale()
const ns = useNamespace('popconfirm')
const tooltipRef = ref<TooltipInstance>()
const rootRef = ref<HTMLElement>()

const popperRef = computed(() => {
  return unref(tooltipRef)?.popperRef
})

const showPopper = () => {
  rootRef.value?.focus?.()
}

const hidePopper = () => {
  tooltipRef.value?.onClose?.()
}

const style = computed(() => {
  return {
    width: addUnit(props.width),
  }
})

const confirm = (e: MouseEvent) => {
  emit('confirm', e)
  hidePopper()
}
const cancel = (e: MouseEvent) => {
  emit('cancel', e)
  hidePopper()
}

const finalConfirmButtonText = computed(
  () => props.confirmButtonText || t('g.popconfirm.confirmButtonText')
)
const finalCancelButtonText = computed(
  () => props.cancelButtonText || t('g.popconfirm.cancelButtonText')
)

defineExpose({
  popperRef,
  hide: hidePopper,
})
</script>
