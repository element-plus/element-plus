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
      <p class="el-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="el-popconfirm__icon"
          :style="{ color: iconColor }"
        ></i>
        {{ title }}
      </p>
      <div class="el-popconfirm__action">
        <el-button size="mini" :type="cancelButtonType" @click="cancel">
          {{ _cancelButtonText }}
        </el-button>
        <el-button size="mini" :type="confirmButtonType" @click="confirm">
          {{ _confirmButtonText }}
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
import ElPopper, { Effect } from '@element-plus/components/popper'
import { useLocaleInject } from '@element-plus/hooks'
import { popconfirmProps, popconfirmEmits } from './popconfirm'

export default defineComponent({
  name: 'ElPopconfirm',

  components: {
    ElButton,
    ElPopper,
  },

  props: popconfirmProps,
  emits: popconfirmEmits,

  setup(props, { emit }) {
    const { t } = useLocaleInject()
    const visible = ref(false)
    const confirm = () => {
      visible.value = false
      emit('confirm')
    }
    const cancel = () => {
      visible.value = false
      emit('cancel')
    }
    const _confirmButtonText = computed(
      () => props.confirmButtonText || t('el.popconfirm.confirmButtonText')
    )
    const _cancelButtonText = computed(
      () => props.cancelButtonText || t('el.popconfirm.cancelButtonText')
    )

    return {
      Effect,
      visible,
      _confirmButtonText,
      _cancelButtonText,

      confirm,
      cancel,
    }
  },
})
</script>
