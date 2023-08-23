<template>
  <li
    v-show="visible"
    :class="containerKls"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script lang="ts">
// @ts-nocheck
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onBeforeUnmount,
  reactive,
  toRefs,
  unref,
} from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useOption } from './useOption'
import type { SelectOptionProxy } from './token'

export default defineComponent({
  name: 'ElOption',
  componentName: 'ElOption',

  props: {
    /**
     * @description value of option
     */
    value: {
      required: true,
      type: [String, Number, Boolean, Object],
    },
    /**
     * @description label of option, same as `value` if omitted
     */
    label: [String, Number],
    created: Boolean,
    /**
     * @description whether option is disabled
     */
    disabled: Boolean,
  },

  setup(props) {
    const ns = useNamespace('select')

    const containerKls = computed(() => [
      ns.be('dropdown', 'item'),
      ns.is('disabled', unref(isDisabled)),
      {
        selected: unref(itemSelected),
        hover: unref(hover),
      },
    ])

    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false,
    })

    const { currentLabel, itemSelected, isDisabled, select, hoverItem } =
      useOption(props, states)

    const { visible, hover } = toRefs(states)

    const vm = getCurrentInstance().proxy

    select.onOptionCreate(vm as unknown as SelectOptionProxy)

    onBeforeUnmount(() => {
      const key = (vm as unknown as SelectOptionProxy).value
      const { selected } = select
      const selectedOptions = select.props.multiple ? selected : [selected]
      const doesSelected = selectedOptions.some((item) => {
        return item.value === (vm as unknown as SelectOptionProxy).value
      })
      // if option is not selected, remove it from cache
      nextTick(() => {
        if (select.cachedOptions.get(key) === vm && !doesSelected) {
          select.cachedOptions.delete(key)
        }
      })
      select.onOptionDestroy(key, vm)
    })

    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm)
      }
    }

    return {
      ns,
      containerKls,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
      states,
    }
  },
})
</script>
