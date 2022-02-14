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
    role="radio"
    :aria-checked="modelValue === label"
    :aria-disabled="disabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="modelValue = disabled ? modelValue : label"
  >
    <span
      :class="[
        ns.e('input'),
        ns.is('disabled', disabled),
        ns.is('checked', modelValue === label),
      ]"
    >
      <span :class="ns.e('inner')"></span>
      <input
        ref="radioRef"
        v-model="modelValue"
        :class="ns.e('original')"
        :value="label"
        type="radio"
        aria-hidden="true"
        :name="name"
        :disabled="disabled"
        tabindex="-1"
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

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useRadio, radioEmits, radioProps } from './radio'

export default defineComponent({
  name: 'ElRadio',
  props: radioProps,
  emits: radioEmits,

  setup(props, { emit }) {
    const ns = useNamespace('radio')
    const { radioRef, isGroup, focus, size, disabled, tabIndex, modelValue } =
      useRadio(props, emit)

    function handleChange() {
      nextTick(() => emit('change', modelValue.value))
    }

    return {
      ns,
      focus,
      isGroup,
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
