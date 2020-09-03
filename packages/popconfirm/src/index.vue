<template>
  <el-popper
    trigger="click"
    manual-mode
    :value="visible"
    effect="light"
  >
    <template #default>
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
            {{ cancelButtonText }}
          </el-button>
          <el-button
            size="mini"
            :type="confirmButtonType"
            @click="confirm"
          >
            {{ confirmButtonText }}
          </el-button>
        </div>
      </div>
    </template>
    <template #trigger>
      <div style="display: inline-block" @click="open">
        <slot name="reference"></slot>
      </div>
    </template>
  </el-popper>
</template>

<script lang="ts">
import { Popper as ElPopper } from '@element-plus/popper'
import { defineComponent,ref } from 'vue'
import { t } from '../../locale'
export default defineComponent({
  name: 'ElPopconfirm',
  props: {
    title: {
      type: String,
    },
    confirmButtonText: {
      type: String,
      default: t('el.popconfirm.confirmButtonText'),
    },
    cancelButtonText: {
      type: String,
      default: t('el.popconfirm.cancelButtonText'),
    },
    confirmButtonType: {
      type: String,
      default: 'primary',
    },
    cancelButtonType: {
      type: String,
      default: 'text',
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
  components: {
    ElPopper,
  },
  setup(props,ctx){
    const visible = ref(false)

    const confirm = () => {
      visible.value = false
      ctx.emit('confirm')
    }
    const cancel = () => {
      visible.value = false
      ctx.emit('cancel')
    }
    const open = (): void => {
      visible.value = !visible.value
    }
    return {
      visible,
      confirm,
      cancel,
      open,
    }
  },
})
</script>
