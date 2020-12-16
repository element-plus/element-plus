<template>
  <div
    ref="treeSelectWrapper"
    v-clickOutside="handleClose"
    class="el-tree-select"
    :class="[treeSelectSize ? 'el-select--' + treeSelectSize : '']"
    @click.stop="toggleDropdownTree"
  >
    <el-popper
      ref="popper"
      v-model:visible="dropdownTreeVisible"
      :show-arrow="true"
      :append-to-body="popperAppendToBody"
      placement="bottom"
      effect="light"
      manual-mode
      trigger="click"
      popper-class="el-tree-select--popper"
      :offset="11"
    >
      <template #default>
        <el-tree
          ref="tree"
          style="min-width: 221.4px;"
          v-bind="$props"
          :data="data"
          :empty-text="noDataText"
          :show-checkbox="multiple"
          :current-node-key="multiple ? [] : selected[props.id]"
          :expand-on-click-node="false"
          :node-key="props.id"
          :icon-class="treeIconClass"
          @current-change="selectNode"
          @keydown.enter="handleEnterKeydown"
        />
      </template>
      <template #trigger>
        <div>
          <el-input
            :id="id"
            ref="reference"
            type="text"
            :model-value="$props.multiple ? '' : selectedLabel"
            :placeholder="currentPlaceholder"
            :name="name"
            :size="treeSelectSize"
            :disabled="treeSelectDisabled"
            :readonly="readonly"
            :validate-event="false"
            :class="{ 'is-focus': dropdownTreeVisible }"
            :tabindex="(multiple && filterable) ? '-1' : null"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="debouncedOnInputChange"
            @paste="debouncedOnInputChange"
            @keydown.down.stop.prevent="navigateNode"
            @keydown.up.stop.prevent="navigateNode"
            @keydown.enter.stop.prevent="handleEnterKeydown"
            @keydown.esc.stop.prevent="dropdownTreeVisible = false"
            @keydown.tab="dropdownTreeVisible = false"
            @mouseenter="inputHovering = true"
            @mouseleave="inputHovering = false"
          >
            <template #suffix>
              <i v-show="!showClose" :class="['el-tree-select__caret', 'el-input__icon', 'el-icon-' + iconClass]"></i>
              <i
                v-if="showClose"
                :class="`el-select__caret el-input__icon ${clearIcon}`"
                @click="handleClearClick"
              ></i>
            </template>
          </el-input>
        </div>
      </template>
    </el-popper>
  </div>
</template>
<script lang='ts'>
import { defineComponent, PropType, onMounted, nextTick, toRefs } from 'vue'
import ElInput from '@element-plus/input'
import ElTree from '@element-plus/tree'
import ClickOutside from '@element-plus/directives/click-outside'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { t } from '@element-plus/locale'
import { addResizeListener } from '@element-plus/utils/resize-event'
import { useTreeSelect, useTreeSelectStates } from './useTreeSelect'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'

export default defineComponent({
  name: 'ElTreeSelect',
  components: { ElInput, ElTree },
  directives: { ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [String, Array],
      default: '',
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    popperClass: String,
    lazy: {
      type: Boolean,
      default: false,
    },
    loading: Boolean,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    filterNodeMethod: Function,
    multiple: {
      type: Boolean,
      default: false,
    },
    multipleLimit: {
      type: Number,
      default: 0,
    },
    treeData: {
      type: Array,
      default: () => ([]),
    },
    props: {
      type: Object,
      default() {
        return {
          id: 'id',
          children: 'children',
          label: 'label',
          disabled: 'disabled',
          isLeaf: 'isLeaf',
        }
      },
    },
    renderAfterExpand: Boolean,
    load: Function,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    checkOnClickNode: Boolean,
    autoExpandParent: {
      type: Boolean,
      default: true,
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number] as PropType<string | number>,
    renderContent: Function,
    highlightCurrent: {
      type: Boolean,
      default: true,
    },
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18,
    },
    treeIconClass: String,
    placeholder: {
      type: String,
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close',
    },
  },
  emit: [UPDATE_MODEL_EVENT],
  setup(props, ctx) {
    const states = useTreeSelectStates(props)

    const {
      data,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
    } = toRefs(states)

    const {
      tree,
      reference,
      input,
      popper,
      tags,
      treeSelectWrapper,
      scrollbar,
      hoverOption,
      readonly,
      dropdownTreeVisible,
      treeSelectDisabled,
      treeSelectSize,
      showClose,
      iconClass,
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
      selectNode,
      handleEnterKeydown,
      resetInputHeight,
    } = useTreeSelect(props, states, ctx)

    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = (props.placeholder || t('el.select.placeholder'))
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = ''
      }
      addResizeListener(treeSelectWrapper.value as any, handleResize)
      if (reference.value && reference.value.$el) {
        const sizeMap = {
          medium: 36,
          small: 32,
          mini: 28,
        }
        const input = reference.value.$el
        states.initialInputHeight = input.getBoundingClientRect().height || sizeMap[treeSelectSize.value]
      }
      if (props.remote && props.multiple) {
        resetInputHeight()
      }
      nextTick(() => {
        if (reference.value.$el) {
          inputWidth.value = reference.value.$el.getBoundingClientRect().width
        }
      })
      setSelected()
    })

    return {
      tree,
      reference,
      input,
      popper,
      tags,
      treeSelectWrapper,
      scrollbar,
      hoverOption,
      readonly,
      dropdownTreeVisible,
      treeSelectDisabled,
      treeSelectSize,
      showClose,
      iconClass,
      toggleDropdownTree,
      emptyText,
      handleClose,
      handleClearClick,
      handleFocus,
      handleBlur,
      debouncedOnInputChange,
      navigateNode,
      selectNode,
      handleEnterKeydown,

      data,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
    }
  },
})
</script>
