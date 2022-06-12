<template>
  <button
    ref="_ref"
    :class="[
      ns.b(),
      ns.m(type_),
      ns.m(size_),
      ns.is('disabled', disabled_),
      ns.is('loading', loading),
      ns.is('plain', plain),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.is('text', text),
      ns.is('link', link),
      ns.is('has-bg', bg),
    ]"
    :aria-disabled="disabled_ || loading"
    :disabled="disabled_ || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :style="buttonStyle"
    @click="handleClick"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <el-icon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </el-icon>
    </template>
    <el-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </el-icon>
    <span
      v-if="$slots.default"
      :class="{ [ns.em('text', 'expand')]: shouldAddSpace }"
    >
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { Text, computed, inject, ref, useSlots } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import {
  useDeprecated,
  useDisabled,
  useFormItem,
  useGlobalConfig,
  useNamespace,
  useSize,
} from '@element-plus/hooks'
import { buttonGroupContextKey } from '@element-plus/tokens'
import { buttonEmits, buttonProps } from './button'
import { useButtonCustomStyle } from './button-custom'

defineOptions({
  name: 'ElButton',
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const slots = useSlots()

useDeprecated(
  {
    from: 'type.text',
    replacement: 'type.link',
    version: '3.0.0',
    scope: 'props',
    ref: 'https://element-plus.org/en-US/component/button.html#button-attributes',
  },
  computed(() => props.type === 'text')
)

const buttonGroupContext = inject(buttonGroupContextKey, undefined)
const globalConfig = useGlobalConfig('button')
const ns = useNamespace('button')
const { form } = useFormItem()
const size_ = useSize(computed(() => buttonGroupContext?.size))
const disabled_ = useDisabled()
const _ref = ref<HTMLButtonElement>()

const type_ = computed(() => props.type || buttonGroupContext?.type || '')
const autoInsertSpace = computed(
  () => props.autoInsertSpace ?? globalConfig.value?.autoInsertSpace ?? false
)

// add space between two characters in Chinese
const shouldAddSpace = computed(() => {
  const defaultSlot = slots.default?.()
  if (autoInsertSpace.value && defaultSlot?.length === 1) {
    const slot = defaultSlot[0]
    if (slot?.type === Text) {
      const text = slot.children as string
      return /^\p{Unified_Ideograph}{2}$/u.test(text.trim())
    }
  }
  return false
})

const buttonStyle = useButtonCustomStyle(props)

const handleClick = (evt: MouseEvent) => {
  if (props.nativeType === 'reset') {
    form?.resetFields()
  }
  emit('click', evt)
}

defineExpose({
  /** @description button html element */
  ref: _ref,
  /** @description button size */
  size: size_,
  /** @description button type */
  type: type_,
  /** @description button disabled */
  disabled: disabled_,
  /** @description whether adding space */
  shouldAddSpace,
})
</script>
