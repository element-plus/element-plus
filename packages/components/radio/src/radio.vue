<template>
  <label
    :class="[
      ns.b(),
      ns.is('disabled', disabled),
      ns.is('focus', focus),
      ns.is('bordered', border),
      ns.is('checked', modelValue === actualValue),
      ns.m(size),
    ]"
  >
    <span
      :class="[
        ns.e('input'),
        ns.is('disabled', disabled),
        ns.is('checked', modelValue === actualValue),
      ]"
    >
      <input
        ref="radioRef"
        v-model="modelValue"
        :class="ns.e('original')"
        :value="actualValue"
        :name="name || radioGroup?.name"
        :disabled="disabled"
        :checked="modelValue === actualValue"
        type="radio"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        @click.stop
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
import { nextTick } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio'

defineOptions({
  name: 'ElRadio',
})

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const ns = useNamespace('radio')
const { radioRef, radioGroup, focus, size, disabled, modelValue, actualValue } =
  useRadio(props, emit)

function handleChange() {
  nextTick(() => emit('change', modelValue.value))
}
</script>
