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
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, ctx) {
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
    } = useOption(props, states, ctx)

    const {
      visible,
      hover,
    } = toRefs(states)

    const instance = getCurrentInstance()

    onBeforeUnmount(() => {
      const { selected, multiple } = select
      let selectedOptions = multiple ? selected : [selected]
      let index = select.cachedOptions.indexOf(instance)
      let selectedIndex = selectedOptions?.indexOf(instance)

      // if option is not selected, remove it from cache
      if (index > -1 && selectedIndex < 0) {
        select.cachedOptions.splice(index, 1)
      }
      select.onOptionDestroy(select.options.map(item => item.value).indexOf(props.value))
    })
    select.options.push(instance)
    select.cachedOptions.push(instance)


    function selectOptionClick() {
      if (this.disabled !== true && this.groupDisabled !== true) {
        this.select.handleOptionSelect(this, true)
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
