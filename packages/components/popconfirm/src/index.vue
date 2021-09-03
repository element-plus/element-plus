<template>
  <el-popper
    v-model:visible="visible"
    trigger="click"
    :effect="Effect.LIGHT"
    popper-class="el-popover"
    append-to-body
    :fallback-placements="['bottom' ,'top', 'right', 'left']"
  >
    <div class="el-popconfirm">
      <p class="el-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="el-popconfirm__icon"
          :style="{color: iconColor}"
        ></i>
        {{ title }}
      </p>
      <div class="el-popconfirm__action">
        <el-button
          size="mini"
          :type="cancelButtonType"
          @click="cancel"
        >
          {{ cancelButtonText_ }}
        </el-button>
        <el-button
          size="mini"
          :type="confirmButtonType"
          @click="confirm"
        >
          {{ confirmButtonText_ }}
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

import type { PropType } from 'vue'
import type { ButtonType } from '@element-plus/components/button/src/types'

export default defineComponent({
  name: 'ElPopconfirm',

  components: {
    ElButton,
    ElPopper,
  },

  props: {
    title: {
      type: String,
    },
    confirmButtonText: {
      type: String,
    },
    cancelButtonText: {
      type: String,
    },
    confirmButtonType: {
      type: String as PropType<ButtonType>,
      default: 'primary' as ButtonType,
    },
    cancelButtonType: {
      type: String as PropType<ButtonType>,
      default: 'text' as ButtonType,
    },
    icon: {
      type: String,
      default: 'el-icon-question',
    },
    iconColor: {
      type: String,
      default: '#f90',
    },
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },
  emits:['confirm','cancel'],
  setup(props,{ emit }){
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
    const confirmButtonText_ = computed(() => {
      return props.confirmButtonText || t('el.popconfirm.confirmButtonText')
    })
    const cancelButtonText_ = computed(() => {
      return props.cancelButtonText || t('el.popconfirm.cancelButtonText')
    })
    return {
      Effect,
      visible,
      confirm,
      cancel,
      confirmButtonText_,
      cancelButtonText_,
    }
  },
})
</script>
