<template>
  <button
    :class="[
      'el-button',
      buttonType ? 'el-button--' + buttonType : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
    @keypress.enter.prevent
  >
    <el-icon v-if="loading" class="is-loading"><loading /></el-icon>
    <el-icon v-else-if="icon">
      <component :is="icon" />
    </el-icon>
    <span
      v-if="$slots.default"
      :class="{ 'el-button__text--expand': shouldAddSpace }"
    >
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { computed, inject, defineComponent, Text } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { useFormItem, useGlobalConfig } from '@element-plus/hooks'
import { elButtonGroupKey, elFormKey } from '@element-plus/tokens'
import { Loading } from '@element-plus/icons'
import { buttonEmits, buttonProps } from './button'

export default defineComponent({
  name: 'ElButton',

  components: {
    ElIcon,
    Loading,
  },

  props: buttonProps,
  emits: buttonEmits,

  setup(props, { emit, slots }) {
    const elBtnGroup = inject(elButtonGroupKey, undefined)
    const globalConfig = useGlobalConfig()
    const autoInsertSpace = computed(() => {
      return props.autoInsertSpace ?? globalConfig?.button.autoInsertSpace
    })

    // add space between two characters in Chinese
    const shouldAddSpace = computed(() => {
      const defaultSlot = slots.default?.()
      if (autoInsertSpace.value && defaultSlot?.length === 1) {
        const slot = defaultSlot[0]
        if (slot?.type === Text) {
          const text = slot.children
          return /^\p{Unified_Ideograph}{2}$/u.test(text as string)
        }
      }
      return false
    })
    const { size: buttonSize, disabled: buttonDisabled } = useFormItem({
      size: computed(() => elBtnGroup?.size),
    })
    const buttonType = computed(
      () => props.type || elBtnGroup?.type || 'default'
    )

    const elForm = inject(elFormKey, undefined)

    const handleClick = (evt: MouseEvent) => {
      if (props.nativeType === 'reset') {
        elForm?.resetFields()
      }
      emit('click', evt)
    }

    return {
      buttonSize,
      buttonType,
      buttonDisabled,

      shouldAddSpace,

      handleClick,
    }
  },
})
</script>
