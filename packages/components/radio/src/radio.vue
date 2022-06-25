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
    v-bind="labelAttrs"
  >
    <span
      :class="[
        ns.e('input'),
        ns.is('disabled', disabled),
        ns.is('checked', modelValue === label),
      ]"
    >
      <input
        ref="radioRef"
        v-model="modelValue"
        :class="ns.e('original')"
        :value="label"
        :name="name || radioGroup?.name"
        :disabled="disabled"
        type="radio"
        v-bind="inputAttr"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
      <span :class="ns.e('inner')" />
    </span>
    <span :class="ns.e('label')" @keydown.stop>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, nextTick, useAttrs as useRawAttrs } from 'vue'
import { useAttrs, useNamespace } from '@element-plus/hooks'
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio'

defineOptions({
  name: 'ElRadio',
  inheritAttrs: false,
})

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)
const rawAttrs = useRawAttrs()

const labelAttrs = computed(() => {
  const cssAttrs: Record<string, unknown> = {}
  cssAttrs['class'] = rawAttrs['class']
  cssAttrs['style'] = rawAttrs['style']
  return cssAttrs
})

const inputAttr = useAttrs({
  excludeKeys: computed<string[]>(() => {
    return Object.keys(labelAttrs.value)
  }),
})

const ns = useNamespace('radio')
const { radioRef, radioGroup, focus, size, disabled, modelValue } = useRadio(
  props,
  emit
)

function handleChange() {
  nextTick(() => emit('change', modelValue.value))
}
</script>
