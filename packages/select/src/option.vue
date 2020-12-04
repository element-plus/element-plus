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


export default defineComponent({
  name: 'ElOption',
  componentName: 'ElOption',

  props: {
    value: {
      required: true,
      type: [String, Number, Object],
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
    select.onOptionCreate(vm)

    onBeforeUnmount(() => {
      const { selected } = select
      let selectedOptions = select.props.multiple ? selected : [selected]
      let index = select.cachedOptions.indexOf(vm)
      let selectedIndex = selectedOptions?.indexOf(vm)

      // if option is not selected, remove it from cache
      if (index > -1 && selectedIndex < 0) {
        select.cachedOptions.splice(index, 1)
      }
      select.onOptionDestroy(select.options.map(item => item.value).indexOf(props.value))
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
