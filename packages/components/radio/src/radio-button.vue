<template>
  <label
    :class="[
      ns.b('button'),
      ns.is('active', modelValue === label),
      ns.is('disabled', disabled),
      ns.is('focus', focus),
      ns.is('no-group', !radioGroup),
      ns.bm('button', size),
    ]"
  >
    <input
      ref="radioRef"
      v-model="modelValue"
      :class="ns.be('button', 'original-radio')"
      :value="label"
      type="radio"
      :name="name || radioGroup?.name"
      :disabled="disabled"
      @focus="focus = true"
      @blur="focus = false"
      @change="handleChange"
    />
    <span
      :class="ns.be('button', 'inner')"
      :style="modelValue === label ? activeStyle : {}"
      @keydown.stop
    >
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, nextTick } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useRadio } from './use-radio'
import { radioButtonEmits, radioButtonProps } from './radio-button'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElRadioButton',
})

const props = defineProps(radioButtonProps)
const emit = defineEmits(radioButtonEmits)

const ns = useNamespace('radio')
const { radioRef, focus, size, disabled, modelValue, radioGroup } = useRadio(
  props,
  emit
)

const activeStyle = computed<CSSProperties>(() => {
  if (!radioGroup) return {}

  return {
    ...(radioGroup.fill
      ? {
          backgroundColor: radioGroup.fill,
          borderColor: radioGroup.fill,
          boxShadow: `-1px 0 0 0 ${radioGroup.fill}`,
        }
      : null),
    ...(radioGroup.textColor ? { color: radioGroup.textColor } : null),
  } as CSSProperties
})

function handleChange() {
  nextTick(() => emit('change', modelValue.value))
}
</script>
