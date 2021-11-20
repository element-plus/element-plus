<template>
  <li
    v-show="visible"
    class="el-select-dropdown__item"
    :class="{
      selected: itemSelected,
      'is-disabled': isDisabled,
      hover: hover,
    }"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script lang="ts">
import {
  toRefs,
  defineComponent,
  getCurrentInstance,
  onBeforeUnmount,
  reactive,
} from 'vue'
import { useOption } from './use-option'
import { optionProps } from './option'
import type { OptionInstance, OptionStates } from './option'

export default defineComponent({
  name: 'ElOption',
  props: optionProps,

  setup(props) {
    const vm = getCurrentInstance()!.proxy as unknown as OptionInstance

    const states = reactive<OptionStates>({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false,
    })

    const { currentLabel, itemSelected, isDisabled, selectContext, hoverItem } =
      useOption(props, states)

    const { visible, hover } = toRefs(states)

    const key = vm.value
    selectContext.onOptionCreate(vm)

    onBeforeUnmount(() => {
      const { selected } = selectContext
      const selectedOptions = selectContext.props.multiple
        ? selected
        : [selected]
      const doesExist = selectContext.cachedOptions.has(key)
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value
      })
      // if option is not selected, remove it from cache
      if (doesExist && !doesSelected) {
        selectContext.cachedOptions.delete(key)
      }
      selectContext.onOptionDestroy(key)
    })

    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        selectContext.handleOptionSelect(vm, true)
      }
    }

    return {
      currentLabel,
      itemSelected,
      isDisabled,
      selectContext,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
      states,
    }
  },
})
</script>
