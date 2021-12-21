<template>
  <el-popper
    v-model:visible="visible"
    trigger="click"
    :effect="Effect.LIGHT"
    popper-class="el-popover"
    append-to-body
    :fallback-placements="['bottom', 'top', 'right', 'left']"
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
    <template #trigger>
      <slot name="reference"></slot>
    </template>
  </el-popper>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import ElButton from '@element-plus/components/button'
import ElIcon from '@element-plus/components/icon'
import ElPopper, { Effect } from '@element-plus/components/popper'
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
    const confirm = () => {
      visible.value = false
      emit('confirm')
    }
    const cancel = () => {
      visible.value = false
      emit('cancel')
    }
    const finalConfirmButtonText = computed(
      () => props.confirmButtonText || t('el.popconfirm.confirmButtonText')
    )
    const finalCancelButtonText = computed(
      () => props.cancelButtonText || t('el.popconfirm.cancelButtonText')
    )

    return {
      Effect,
      visible,

      finalConfirmButtonText,
      finalCancelButtonText,

      confirm,
      cancel,
    }
  },
})
</script>
