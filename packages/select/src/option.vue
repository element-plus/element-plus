<template>
  <li
    v-show="visible"
    class="el-select-dropdown__item"
    :class="{
      'selected': itemSelected,
      'is-disabled': isDisabled,
      'hover': hover}"
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
import { useOption } from './useOption'
import { SelectOptionProxy } from './token'


export default defineComponent({
  name: 'ElOption',
  componentName: 'ElOption',

  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object],
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false,
    })

    const {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
    } = useOption(props, states)

    const {
      visible,
      hover,
    } = toRefs(states)

    const vm = getCurrentInstance().proxy
    const key = (vm as unknown as SelectOptionProxy).value
    select.onOptionCreate(vm as unknown as SelectOptionProxy)

    onBeforeUnmount(() => {
      const { selected } = select
      let selectedOptions = select.props.multiple ? selected : [selected]
      const doesExist = select.cachedOptions.has(key)
      const doesSelected = selectedOptions.some(item => {
        return item.value === (vm as unknown as SelectOptionProxy).value
      })
      // if option is not selected, remove it from cache
      if (doesExist && !doesSelected) {
        select.cachedOptions.delete(key)
      }
      select.onOptionDestroy(key)
    })

    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm, true)
      }
    }

    return {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
    }
  },
})

</script>
