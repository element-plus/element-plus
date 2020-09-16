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
  onUnmounted,
  ref } from 'vue'
import useSelect from './useSelect'
import { getValueByPath, escapeRegexpString } from '@element-plus/utils/util'

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

  setup(props) {
    const visible = ref(true)
    const groupDisabled = ref(false)
    const hover = ref(false)

    const selectUse = useSelect()
    const _selectGroup = selectUse._selectGroup
    const select = selectUse._select
    const instance = getCurrentInstance()

    select.optionsCount.value++
    select.filteredOptionsCount.value++

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
        select.hoverIndex.value = select.options.value.indexOf(instance)
      }
    }

    // computed
    const isObject = computed(() => Object.prototype.toString.call(props.value).toLowerCase() === '[object object]')
    const currentLabel = computed(() => {
      return props.label || (isObject.value ? '' : props.value)
    })
    const currentValue = computed(() => props.value || props.label || '')
    const itemSelected = computed(() => {
      if (select.props.multiple) {
        return contains(select.props.modelValue, props.value)
      } else {
        return isEqual(props.value, select.props.modelValue)
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

    // TODO: groupDisabled
    const isDisabled = computed(() => {
      return props.disabled || groupDisabled.value || limitReached.value
    })

    function queryChange(query) {
      visible.value = new RegExp(escapeRegexpString(query), 'i').test(currentLabel.value) || props.created
      if (!visible.value) {
        select.filteredOptionsCount.value--
      }
    }
    // TODO: should change visible
    // this.$on('queryChange', queryChange)
    select.selectEmitter.on('elOptionQueryChange', queryChange)


    watch(() => currentLabel.value, () => {
      if (!props.created && !select.remote) select.setSelected()
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
      let index = select.cachedOptions.value.indexOf(instance)
      let selectedIndex = selectedOptions?.indexOf(instance)

      // if option is not selected, remove it from cache
      if (index > -1 && selectedIndex < 0) {
        select.cachedOptions.value.splice(index, 1)
      }
      select.onOptionDestroy(select.options.value.indexOf(this))
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
      visible,
      hover,
    }
  },

  created() {
    console.log('this.select: ', this.select)
    this.select.options.value.push(this)
    this.select.cachedOptions.value.push(this)
  },

  methods: {
    selectOptionClick() {
      if (this.disabled !== true && this.groupDisabled !== true) {
        this.select.handleOptionSelect(this, true)
      }
    },
  },
})

</script>
