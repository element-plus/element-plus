<template>
  <el-popper
    ref="popperRef"
    v-bind="$attrs"
    trigger="click"
    effect="light"
    popper-class="el-popover"
    append-to-body
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :hide-after="hideAfter"
  >
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
    <template v-if="$slots.reference" #trigger>
      <slot name="reference" />
    </template>
  </el-popper>
</template>

<script lang="ts">
import { defineComponent, ref, computed, unref } from 'vue'
import ElButton from '@element-plus/components/button'
import ElIcon from '@element-plus/components/icon'
import ElPopper from '@element-plus/components/popper'
import { useLocale } from '@element-plus/hooks'
import { popconfirmProps, popconfirmEmits } from './popconfirm'

export default defineComponent({
  name: 'ElPopconfirm',

  components: {
    ElButton,
    ElPopper,
    ElIcon,
  },

  props: popconfirmProps,
  emits: popconfirmEmits,

  setup(props, { emit }) {
    const { t } = useLocale()
    const visible = ref(false)
    const popperRef = ref<{ delayHide: () => void }>()

    const hidePopper = () => {
      unref(popperRef)?.delayHide?.()
    }
    const confirm = () => {
      if (visible.value) {
        emit('confirm')
      }
      hidePopper()
    }

    const cancel = () => {
      if (visible.value) {
        emit('cancel')
      }
      hidePopper()
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
      popperRef,

      confirm,
      cancel,
    }
  },
})
</script>
