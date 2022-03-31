<template>
  <el-tooltip
    ref="tooltipRef"
    v-bind="$attrs"
    trigger="click"
    effect="light"
    :popper-class="`${ns.namespace.value}-popover`"
    :teleported="compatTeleported"
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
import { computed, defineComponent, ref, unref } from 'vue'
import ElButton from '@element-plus/components/button'
import ElIcon from '@element-plus/components/icon'
import ElTooltip from '@element-plus/components/tooltip'
import { useDeprecateAppendToBody } from '@element-plus/components/popper'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { popconfirmProps } from './popconfirm'

const COMPONENT_NAME = 'ElPopconfirm'
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
    const ns = useNamespace('popconfirm')
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
      ns,

      // Deprecation in 2.1.0
      compatTeleported,

      confirm,
      cancel,
    }
  },
})
</script>
