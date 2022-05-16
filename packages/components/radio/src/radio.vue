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

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { radioEmits, radioProps, useRadio } from './radio'

export default defineComponent({
  name: 'ElRadio',
  props: radioProps,
  emits: radioEmits,

  setup(props, { emit }) {
    const ns = useNamespace('radio')
    const {
      radioRef,
      isGroup,
      radioGroup,
      focus,
      size,
      disabled,
      tabIndex,
      modelValue,
    } = useRadio(props, emit)

    function handleChange() {
      nextTick(() => emit('change', modelValue.value))
    }

    return {
      ns,
      focus,
      isGroup,
      radioGroup,
      modelValue,
      tabIndex,
      size,
      disabled,
      radioRef,

      handleChange,
    }
  },
})
</script>
