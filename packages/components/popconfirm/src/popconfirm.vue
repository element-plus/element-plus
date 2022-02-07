<template>
  <el-tooltip
    ref="tooltipRef"
    v-bind="$attrs"
    trigger="click"
    effect="light"
    popper-class="el-popover"
    :teleported="compatTeleported"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :hide-after="hideAfter"
    persistent
  >
    <template #content>
      <div class="el-popconfirm">
        <div class="el-popconfirm__main">
          <el-icon
            v-if="!hideIcon && icon"
            class="el-popconfirm__icon"
            :style="{ color: iconColor }"
          >
            <component :is="icon" />
          </el-icon>
          {{ title }}
        </div>
        <div class="el-popconfirm__action">
          <el-button size="small" :type="cancelButtonType" @click="cancel">
            {{ finalCancelButtonText }}
          </el-button>
          <el-button size="small" :type="confirmButtonType" @click="confirm">
            {{ finalConfirmButtonText }}
          </el-button>
        </div>
      </div>
    </template>
    <template v-if="$slots.reference">
      <slot name="reference" />
    </template>
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent, ref, computed, unref } from 'vue'
import ElButton from '@element-plus/components/button'
import ElIcon from '@element-plus/components/icon'
import ElTooltip from '@element-plus/components/tooltip'
import { useDeprecateAppendToBody } from '@element-plus/components/popper'
import { useLocale } from '@element-plus/hooks'
import { popconfirmProps } from './popconfirm'

const COMPONENT_NAME = 'Elpopperconfirm'
export default defineComponent({
  name: COMPONENT_NAME,

  components: {
    ElButton,
    ElTooltip,
    ElIcon,
  },

  props: popconfirmProps,

  setup(props) {
    const { compatTeleported } = useDeprecateAppendToBody(
      COMPONENT_NAME,
      'appendToBody'
    )
    const { t } = useLocale()
    const tooltipRef = ref<{ onClose: () => void }>()

    const hidePopper = () => {
      unref(tooltipRef)?.onClose?.()
    }

    const handleCallback = () => {
      hidePopper()
    }

    const confirm = (e: Event) => {
      props.onConfirm?.(e)
      handleCallback()
    }
    const cancel = (e: Event) => {
      props.onCancel?.(e)
      handleCallback()
    }

    const finalConfirmButtonText = computed(
      () => props.confirmButtonText || t('el.popconfirm.confirmButtonText')
    )
    const finalCancelButtonText = computed(
      () => props.cancelButtonText || t('el.popconfirm.cancelButtonText')
    )

    return {
      finalConfirmButtonText,
      finalCancelButtonText,
      tooltipRef,

      // Deprecation in 2.1.0
      compatTeleported,

      confirm,
      cancel,
    }
  },
})
</script>
