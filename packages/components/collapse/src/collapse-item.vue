<template>
  <div
    class=""
    :class="{
      [`${prefixClass}-item`]: true,
      'is-active': isActive,
      'is-disabled': disabled,
    }"
  >
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`${prefixClass}-content-${id}`"
      :aria-describedby="`${prefixClass}-content-${id}`"
    >
      <div
        :id="`${prefixClass}-head-${id}`"
        role="button"
        :tabindex="disabled ? -1 : 0"
        :class="{
          [`${prefixClass}-item__header`]: true,
          focusing: focusing,
          'is-active': isActive,
        }"
        @click="handleHeaderClick"
        @keyup.space.enter.stop="handleEnterClick"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{ title }}</slot>
        <el-icon
          :class="{
            [`${prefixClass}-item__arrow`]: true,
            'is-active': isActive,
          }"
        >
          <arrow-right />
        </el-icon>
      </div>
    </div>
    <el-collapse-transition>
      <div
        v-show="isActive"
        :id="`${prefixClass}-content-${id}`"
        :class="`${prefixClass}-item__wrap`"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`${prefixClass}-head-${id}`"
      >
        <div :class="`${prefixClass}-item__content`">
          <slot></slot>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, computed, ref } from 'vue'
import { generateId } from '@element-plus/utils/util'
import ElCollapseTransition from '@element-plus/components/collapse-transition'
import ElIcon from '@element-plus/components/icon'
import { usePrefixClass } from '@element-plus/hooks'
import { ArrowRight } from '@element-plus/icons-vue'

import type { PropType } from 'vue'
import type { CollapseProvider } from './collapse.type'

export default defineComponent({
  name: 'ElCollapseItem',
  components: { ElCollapseTransition, ElIcon, ArrowRight },
  props: {
    title: {
      type: String,
      default: '',
    },
    name: {
      type: [String, Number] as PropType<string | number>,
      default: () => {
        return generateId()
      },
    },
    disabled: Boolean,
  },
  setup(props) {
    const prefixClass = usePrefixClass('collapse')

    const collapse = inject<CollapseProvider>('collapse')

    const contentWrapStyle = ref({
      height: 'auto',
      display: 'block',
    })
    const contentHeight = ref(0)
    const focusing = ref(false)
    const isClick = ref(false)
    const id = ref(generateId())

    const isActive = computed(() => {
      return collapse?.activeNames.value.indexOf(props.name) > -1
    })

    const handleFocus = () => {
      setTimeout(() => {
        if (!isClick.value) {
          focusing.value = true
        } else {
          isClick.value = false
        }
      }, 50)
    }

    const handleHeaderClick = () => {
      if (props.disabled) return
      collapse?.handleItemClick(props.name)
      focusing.value = false
      isClick.value = true
    }

    const handleEnterClick = () => {
      collapse?.handleItemClick(props.name)
    }

    return {
      prefixClass,
      isActive,
      contentWrapStyle,
      contentHeight,
      focusing,
      isClick,
      id,
      handleFocus,
      handleHeaderClick,
      handleEnterClick,
      collapse,
    }
  },
})
</script>
