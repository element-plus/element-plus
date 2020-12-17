import { computed, inject, nextTick, reactive, ref, watch } from 'vue'
import { toRawType } from '@vue/shared'
import { isEdge, isIE, useGlobalConfig } from '@element-plus/utils/util'
import { ElFormContext, ElFormItemContext, elFormItemKey, elFormKey } from '@element-plus/form'
import { t } from '@element-plus/locale'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import isEqual from 'lodash/isEqual'
import lodashDebounce from 'lodash/debounce'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { TreeKey } from '@element-plus/tree/src/tree.type'
import { isKorean } from '@element-plus/utils/isDef'


export const useTreeSelectStates = props => {

  const states = reactive({
    data: props.treeData,
    selected: props.modelValue,
    inputLength: 20,
    inputWidth: 0,
    initialInputHeight: 0,
    filteredOptionsCount: 0,
    dropdownTreeVisible: false,
    softFocus: false,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: '',
    currentPlaceholder: t('el.select.placeholder'),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
  })

  return states
}

export const useTreeSelect = (props, states, ctx) => {
  const ELEMENT = useGlobalConfig()

  // template refs
  const tree = ref(null)
  const reference = ref(null)
  const input = ref(null)
  const popper = ref(null)
  const tags = ref(null)
  const treeSelectWrapper = ref<HTMLElement | null>(null)
  const scrollbar = ref(null)
  const hoverOption = ref(-1)

  // inject
  const elForm = inject(elFormKey, {} as ElFormContext)

  const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

  const treeSelectSize = computed(() => props.size || elFormItem.size || ELEMENT.size)

  const collapseTagSize = computed(() => ['small', 'mini'].indexOf(treeSelectSize.value) > -1 ? 'mini' : 'small')

  const readonly = computed(() => !props.filterable || props.multiple || (!isIE() && !isEdge() && !states.dropdownTreeVisible))

  const treeSelectDisabled = computed(() => props.disabled || elForm.disabled)

  const showClose = computed(() => {
    const hasValue = props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length > 0
      : props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== ''

    return props.clearable &&
      !treeSelectDisabled.value &&
      states.inputHovering &&
      hasValue
  })
  const dropdownTreeVisible = computed(() => states.dropdownTreeVisible && emptyText.value !== false)

  const iconClass = computed(() => props.remote && props.filterable ? '' : (states.dropdownTreeVisible ? 'arrow-up is-reverse' : 'arrow-up'))

  const debounce = computed(() => props.remote ? 300 : 0)

  const treeProps = computed(() => Object.assign({
    id: 'id',
    children: 'children',
    label: 'label',
    disabled: 'disabled',
    isLeaf: 'isLeaf',
  }, props.props))

  watch(() => props.placeholder, val => {
    states.cachedPlaceHolder = states.currentPlaceholder = val
  })

  watch(() => props.treeData, val => {
    states.data = val
  })

  watch(() => props.modelValue, val => {
    if(props.multiple){
      resetInputHeight()
      if ((val && val.length > 0) || (input.value && states.query !== '')) {
        states.currentPlaceholder = ''
      } else {
        states.currentPlaceholder = states.cachedPlaceHolder
      }
      if (props.filterable && !props.reserveKeyword) {
        states.query = ''
        handleQueryChange(states.query)
      }
    } else {
      states.selectedLabel = props.modelValue
    }
  }, {
    flush: 'post',
  })

  const toggleDropdownTree = () => {
    if (props.automaticDropdown) return
    if (!treeSelectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false
      } else {
        states.dropdownTreeVisible = !states.dropdownTreeVisible
      }
      if (states.dropdownTreeVisible) {
        (input.value || reference.value).focus()
      }
    }
  }
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t('el.select.loading')
    } else {
      if (props.remote && states.query === '' && states.data.length === 0) return false
      if (props.filterable && states.query && states.data.length > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t('el.select.noMatch')
      }
      if (states.data.length === 0) {
        return props.noDataText || t('el.select.noData')
      }
    }

    return null
  })

  const handleClose = () => {
    states.dropdownTreeVisible = false
  }

  const handleResize = () => {
    resetInputWidth()
    popper.value?.update()
    if (props.multiple) resetInputHeight()
  }

  const resetInputHeight = () => {
    if (props.collapseTags && !props.filterable) return
    nextTick(() => {
      if (!reference.value) return
      const inputChildNodes = reference.value.$el.childNodes
      const input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
      const _tags = tags.value
      const sizeInMap = states.initialInputHeight || 40
      input.style.height = states.selected.length === 0
        ? sizeInMap + 'px'
        : Math.max(
          _tags ? (_tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0)) : 0,
          sizeInMap) + 'px'
      if (states.dropdownTreeVisible && emptyText.value !== false) {
        popper.value?.update?.()
      }
    })
  }

  const resetInputWidth = () => {
    states.inputWidth = reference.value?.$el.getBoundingClientRect().width
  }

  const setSelected = (key: TreeKey | TreeKey[]) => {
    const rowType = toRawType(key)
    if(['string', 'number', 'array'].includes(rowType)){
      // TODO: warning
      return
    }
    if (!props.multiple && rowType === 'array') {
      // TODO: warning
      return
    }
    if (!props.multiple) {
      const node = tree.value.store.getNode(key)
      const data = node.data
      ctx.emit(UPDATE_MODEL_EVENT, data[treeProps.value.id])
      ctx.emit('change', data[treeProps.value.id], data, node)
    } else {
      if(rowType !== 'array') key = [key] as TreeKey[]
      // TODO: set
    }
  }

  const handleFocus = event => {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        states.dropdownTreeVisible = true
        if (props.filterable) {
          states.menuVisibleOnFocus = true
        }
      }
      ctx.emit('focus', event)
    } else {
      states.softFocus = false
    }
  }

  const handleBlur = event => {
    // https://github.com/ElemeFE/element/pull/10822
    nextTick(() => {
      if (states.isSilentBlur) {
        states.isSilentBlur = false
      } else {
        ctx.emit('blur', event)
      }
    })
    states.softFocus = false
  }

  const handleClearClick = event => {
    deleteSelected(event)
  }

  const deleteSelected = event => {
    event.stopPropagation()
    const value = props.multiple ? [] : ''
    ctx.emit(UPDATE_MODEL_EVENT, value)
    emitChange(value)
    states.dropdownTreeVisible = false
    ctx.emit('clear')
  }

  const emitChange = val => {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val)
    }
  }

  const handleQueryChange = val => {
    if (states.previousQuery === val || states.isOnComposition) return
    if (
      states.previousQuery === null &&
      (typeof props.filterMethod === 'function' || typeof props.remoteMethod === 'function')
    ) {
      states.previousQuery = val
      return
    }
    states.previousQuery = val
    nextTick(() => {
      if (states.visible) popper.value?.update?.()
    })
    states.hoverIndex = -1
    if (props.multiple && props.filterable) {
      nextTick(() => {
        const length = input.value.length * 15 + 20
        states.inputLength = props.collapseTags ? Math.min(50, length) : length
        managePlaceholder()
        resetInputHeight()
      })
    }
    if (typeof props.filterMethod === 'function') {
      props.filterMethod(val)
    }
  }

  const onInputChange = () => {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel
      handleQueryChange(states.query)
    }
  }

  const managePlaceholder = () => {
    if (states.currentPlaceholder !== '') {
      states.currentPlaceholder = input.value ? '' : states.cachedPlaceHolder
    }
  }

  const resetInputState = (e: KeyboardEvent) => {
    if (e.code !== EVENT_CODE.backspace) toggleLastOptionHitState(false)
    states.inputLength = input.value.length * 15 + 20
    resetInputHeight()
  }

  const toggleLastOptionHitState = (hit?: boolean) => {
    if (!Array.isArray(states.selected)) return
    const option = states.selected[states.selected.length - 1]
    if (!option) return

    if (hit === true || hit === false) {
      option.hitState = hit
      return hit
    }

    option.hitState = !option.hitState
    return option.hitState
  }

  const deletePrevTag = e => {
    if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
      const value = props.modelValue.slice()
      value.pop()
      ctx.emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
    }
  }

  const debouncedQueryChange = lodashDebounce(e => {
    handleQueryChange(e.target.value)
  }, debounce.value)

  const debouncedOnInputChange = lodashDebounce(() => {
    onInputChange()
  }, debounce.value)

  const handleComposition = event => {
    const text = event.target.value
    if (event.type === 'compositionend') {
      states.isOnComposition = false
      nextTick(() => handleQueryChange(text))
    } else {
      const lastCharacter = text[text.length - 1] || ''
      states.isOnComposition = !isKorean(lastCharacter)
    }
  }

  const navigateNode = (e: KeyboardEvent) => {
    const code = e.code
    if (!document.activeElement.classList.contains('el-tree-node')) {
      if (!props.multiple) {
        if (states.selected) {
          const treeItems = Array.from<HTMLElement>(tree.value.$el.querySelectorAll('.is-focusable[role=treeitem]'))
          const currentIndex = treeItems.findIndex(item => item.classList.contains('is-current'))
          e.preventDefault()
          let nextIndex
          if (code === EVENT_CODE.up) {
            nextIndex = currentIndex === -1 ? 0 : currentIndex !== 0 ? currentIndex - 1 : treeItems.length - 1
            const startIndex = nextIndex
            while (true) {
              if (tree.value.store.getNode(treeItems[nextIndex].dataset.key).canFocus) break
              nextIndex--
              if (nextIndex === startIndex) {
                nextIndex = -1
                break
              }
              if (nextIndex < 0) {
                nextIndex = treeItems.length - 1
              }
            }
          } else {
            nextIndex = currentIndex === -1 ? 0 : (currentIndex < treeItems.length - 1) ? currentIndex + 1 : 0
            const startIndex = nextIndex
            while (true) {
              if (tree.value.store.getNode(treeItems[nextIndex].dataset.key).canFocus) break
              nextIndex++
              if (nextIndex === startIndex) {
                nextIndex = -1
                break
              }
              if (nextIndex >= treeItems.length) {
                nextIndex = 0
              }
            }
          }
          nextIndex !== -1 && treeItems[nextIndex].focus()
          return
        }
        tree.value.$el.querySelectorAll('.is-focusable[role=treeitem]')[0].focus()
      }
    } else {
      // TODO: multiple
    }
  }

  const handleEnterKeydown = e => {
    const targetKey = e.target.dataset.key
    selectNode(tree.value.store.nodesMap[targetKey].data)
  }

  const selectNode = data => {
    if(props.multiple) return
    states.selected = data
    states.selectedLabel = data[treeProps.value.label]
    states.dropdownTreeVisible = false
    ctx.emit(UPDATE_MODEL_EVENT, data[treeProps.value.id])
    ctx.emit('change', data[treeProps.value.id], data)
  }

  const handleCheckChange = (data, { checkedNodes, checkedKeys }) => {
    states.selected = checkedNodes.map(item => {
      return item
    })
    resetInputHeight()
    ctx.emit(UPDATE_MODEL_EVENT, checkedKeys)
    ctx.emit('change', checkedKeys, checkedNodes)
  }

  const deleteTag = (e, tag) => {
    const index = states.selected.indexOf(tag)
    if (index > -1 && !treeSelectDisabled.value) {
      tree.value.setChecked(tag[props.props.id], false, !props.checkStrictly)
      states.selected = tree.value.getCheckedNodes()
      const value = tree.value.getCheckedKeys()
      ctx.emit(UPDATE_MODEL_EVENT, value)
      ctx.emit('change', value, states.selected)
      ctx.emit('remove-tag', tag.value)
    }
    e.stopPropagation()
  }

  return {
    tree,
    reference,
    input,
    popper,
    tags,
    dropdownTreeVisible,
    treeSelectWrapper,
    scrollbar,
    hoverOption,
    readonly,
    treeSelectDisabled,
    treeSelectSize,
    collapseTagSize,
    showClose,
    iconClass,
    treeProps,
    toggleDropdownTree,
    emptyText,
    handleClose,
    handleResize,
    setSelected,
    handleClearClick,
    handleFocus,
    handleBlur,
    debouncedOnInputChange,
    navigateNode,
    resetInputHeight,
    selectNode,
    handleEnterKeydown,
    handleCheckChange,
    deleteTag,
    resetInputState,
    managePlaceholder,
    deletePrevTag,
    handleComposition,
    debouncedQueryChange,
  }
}
