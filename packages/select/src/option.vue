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
  computed,
  watch,
  defineComponent,
  getCurrentInstance,
  onUnmounted } from 'vue'
import useSelect from './useSelect'
import { getValueByPath } from '@element-plus/utils/util'
// escapeRegexpString

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
    const selectUse = useSelect()
    const _selectGroup = selectUse._selectGroup
    const select = selectUse._select
    const instance = getCurrentInstance()

    select.options.push(instance)
    select.cachedOptions.push(instance)
    select.optionsCount++
    select.filteredOptionsCount++

    function contains(arr = [], target) {
      if (!isObject.value) {
        return arr && arr.indexOf(target) > -1
      } else {
        const valueKey = this.select.valueKey
        return arr && arr.some(item => {
          return getValueByPath(item, valueKey) === getValueByPath(target, valueKey)
        })
      }
    }

    function isEqual(a, b) {
      if (!isObject.value) {
        return a === b
      } else {
        const valueKey = select.valueKey
        return getValueByPath(a, valueKey) === getValueByPath(b, valueKey)
      }
    }

    function hoverItem() {
      if (!props.disabled && !_selectGroup.disabled) {
        select.hoverIndex = select.options.indexOf(instance)
      }
    }

    // computed
    const isObject = computed(() => Object.prototype.toString.call(props.value).toLowerCase() === '[object object]')
    const currentLabel = computed(() => props.label || (isObject.value ? '' : props.value))
    const currentValue = computed(() => props.value || props.label || '')
    const itemSelected = computed(() => {
      if (select.multiple) {
        return contains(select.value, props.value)
      } else {
        return isEqual(props.value, select.value)
      }
    })
    const limitReached = computed(() => {
      if (select.multiple) {
        return !itemSelected.value &&
          (select.value || []).length >= select.multipleLimit &&
          select.multipleLimit > 0
      } else {
        return false
      }
    })

    const isDisabled = computed(() => {
      return props.disabled || _selectGroup.disabled || limitReached
    })

    // TODO: should change visible
    // this.$on('queryChange', queryChange)

    watch(() => currentLabel, () => {
      if (!props.created && !select.remote) select.setSelected()
      // TODO: select should provide setSelected
      // this.dispatch('ElSelect', 'setSelected')
    })

    watch(() => props.value, (val, oldVal) => {
      const { remote, valueKey } = select
      if (!props.created && !remote) {
        if (valueKey && typeof val === 'object' && typeof oldVal === 'object' && val[valueKey] === oldVal[valueKey]) {
          return
        }
        select.setSelected()
      }
    })


    onUnmounted(() => {
      const { selected, multiple } = select
      let selectedOptions = multiple ? selected : [selected]
      let index = select.cachedOptions.indexOf(instance)
      let selectedIndex = selectedOptions.indexOf(instance)

      // if option is not selected, remove it from cache
      if (index > -1 && selectedIndex < 0) {
        select.cachedOptions.splice(index, 1)
      }
      select.onOptionDestroy(select.options.indexOf(this))
    })

    return {
      isObject,
      currentLabel,
      currentValue,
      itemSelected,
      limitReached,
      isDisabled,
      select,
      hoverItem,
    }
  },

  methods: {
    selectOptionClick() {
      if (this.disabled !== true && this.groupDisabled !== true) {
        // TODO: should provide handleOptionClick
        this.select.handleOptionClick()
      }
    },
  },
})

</script>
