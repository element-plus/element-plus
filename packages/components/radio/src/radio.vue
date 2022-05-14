<template>
  <label
    :class="[
      ns.b(),
      ns.is('disabled', disabled),
      ns.is('focus', focus),
      ns.is('bordered', border),
      ns.is('checked', modelValue === label),
      ns.m(size),
    ]"
    @keydown.space.stop.prevent="modelValue = disabled ? modelValue : label"
  >
    <span
      :class="[
        ns.e('input'),
        ns.is('disabled', disabled),
        ns.is('checked', modelValue === label),
      ]"
    >
      <span :class="ns.e('inner')" />
      <input
        ref="radioRef"
        v-model="modelValue"
        :class="ns.e('original')"
        :value="label"
        type="radio"
        :name="name"
        :disabled="disabled"
        :tabindex="tabIndex"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
    </span>
    <span :class="ns.e('label')" @keydown.stop>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { nextTick } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { radioEmits, radioProps, useRadio } from './radio'

defineOptions({
  name: 'ElRadio',
})

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const ns = useNamespace('radio')
const { radioRef, focus, size, disabled, tabIndex, modelValue } = useRadio(
  props,
  emit
)

function handleChange() {
  nextTick(() => emit('change', modelValue.value))
}
</script>
