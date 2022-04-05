<template>
  <label
    :class="[
      ns.b('button'),
      ns.bm('button', size),
      ns.is('disabled', isDisabled),
      ns.is('checked', isChecked),
      ns.is('focus', focus),
    ]"
    role="checkbox"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
  >
    <input
      v-if="trueLabel || falseLabel"
      v-model="model"
      :class="ns.be('button', 'original')"
      type="checkbox"
      :name="name"
      :tabindex="tabindex"
      :disabled="isDisabled"
      :true-value="trueLabel"
      :false-value="falseLabel"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false"
    />
    <input
      v-else
      v-model="model"
      :class="ns.be('button', 'original')"
      type="checkbox"
      :name="name"
      :tabindex="tabindex"
      :disabled="isDisabled"
      :value="label"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false"
    />

    <span
      v-if="$slots.default || label"
      :class="ns.be('button', 'inner')"
      :style="isChecked ? activeStyle : null"
    >
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useNamespace } from '@element-plus/hooks'
import { useCheckbox, useCheckboxGroup, useCheckboxProps } from './useCheckbox'

export default defineComponent({
  name: 'ElCheckboxButton',
  props: useCheckboxProps,
  emits: [UPDATE_MODEL_EVENT, 'change'],
  setup(props) {
    const { focus, isChecked, isDisabled, size, model, handleChange } =
      useCheckbox(props)
    const { checkboxGroup } = useCheckboxGroup()
    const ns = useNamespace('checkbox')

    const activeStyle = computed(() => {
      const fillValue = checkboxGroup?.fill?.value ?? ''
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: checkboxGroup?.textColor?.value ?? '',
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : null,
      }
    })

    return {
      focus,
      isChecked,
      isDisabled,
      model,
      handleChange,
      activeStyle,
      size,
      ns,
    }
  },
})
</script>
