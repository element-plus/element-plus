<template>
  <el-select-menu ref="menuRef">
    <div
      v-if="$slots.header"
      :class="nsSelect.be('dropdown', 'header')"
      @click.stop
    >
      <slot name="header" />
    </div>
    <el-scrollbar
      v-show="states.options.size > 0 && !loading"
      :id="contentId"
      ref="scrollbarRef"
      tag="ul"
      :wrap-class="nsSelect.be('dropdown', 'wrap')"
      :view-class="nsSelect.be('dropdown', 'list')"
      :class="[nsSelect.is('empty', filteredOptionsCount === 0)]"
      role="listbox"
      :aria-label="ariaLabel"
      aria-orientation="vertical"
      @scroll="popupScroll"
    >
      <el-option
        v-if="showNewOption"
        :value="states.inputValue"
        :created="true"
      />
      <el-options>
        <slot />
      </el-options>
    </el-scrollbar>
    <div
      v-if="$slots.loading && loading"
      :class="nsSelect.be('dropdown', 'loading')"
    >
      <slot name="loading" />
    </div>
    <div
      v-else-if="loading || filteredOptionsCount === 0"
      :class="nsSelect.be('dropdown', 'empty')"
    >
      <slot name="empty">
        <span>{{ emptyText }}</span>
      </slot>
    </div>
    <div
      v-if="$slots.footer"
      :class="nsSelect.be('dropdown', 'footer')"
      @click.stop
    >
      <slot name="footer" />
    </div>
  </el-select-menu>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  reactive,
  toRefs,
  watch,
} from 'vue'
import ElScrollbar from '@element-plus/components/scrollbar'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { flattedChildren, isArray, isObject } from '@element-plus/utils'
import ElOption from './option.vue'
import ElSelectMenu from './select-dropdown.vue'
import ElOptions from './options'
import { selectProps } from './select'
import { useFlatSelect } from './useFlatSelect'

import type { VNode } from 'vue'

const COMPONENT_NAME = 'ElSelect'
export default defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElSelectMenu,
    ElOption,
    ElOptions,
    ElScrollbar,
  },
  props: selectProps,
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, 'popup-scroll'],

  setup(props, { emit, slots }) {
    const instance = getCurrentInstance()!
    instance.appContext.config.warnHandler = (...args) => {
      // Overrides warnings about slots not being executable outside of a render function.
      // We call slot below just to simulate data when persist is false, this warning message should be ignored
      if (
        !args[0] ||
        args[0].includes(
          'Slot "default" invoked outside of the render function'
        )
      ) {
        return
      }
      // eslint-disable-next-line no-console
      console.warn(...args)
    }
    const modelValue = computed(() => {
      const { modelValue: rawModelValue, multiple } = props
      const fallback = multiple ? [] : undefined
      // When it is array, we check if this is multi-select.
      // Based on the result we get
      if (isArray(rawModelValue)) {
        return multiple ? rawModelValue : fallback
      }

      return multiple ? fallback : rawModelValue
    })

    const _props = reactive({
      ...toRefs(props),
      modelValue,
    })

    const API = inject('flat-select', () => useFlatSelect(_props, emit), true)

    const flatTreeSelectData = (data: any[]) => {
      return data.reduce((acc, item) => {
        acc.push(item)
        if (item.children && item.children.length > 0) {
          acc.push(...flatTreeSelectData(item.children))
        }
        return acc
      }, [])
    }

    const manuallyRenderSlots = (vnodes: VNode[] | undefined) => {
      // After option rendering is completed, the useSelect internal state can collect the value of each option.
      // If the persistent value is false, option will not be rendered by default, so in this case,
      // manually render and load option data here.
      const children = flattedChildren(vnodes || []) as VNode[]
      children.forEach((item) => {
        if (
          isObject(item) &&
          // @ts-expect-error
          (item.type.name === 'ElOption' || item.type.name === 'ElTree')
        ) {
          // @ts-expect-error
          const _name = item.type.name
          if (_name === 'ElTree') {
            // tree-select component is a special case.
            // So we need to handle it separately.
            const treeData = item.props?.data || []
            const flatData = flatTreeSelectData(treeData)
            flatData.forEach((treeItem: any) => {
              treeItem.currentLabel =
                treeItem.label ||
                (isObject(treeItem.value) ? '' : treeItem.value)
              API.onOptionCreate(treeItem)
            })
          } else if (_name === 'ElOption') {
            const obj = { ...item.props } as any
            obj.currentLabel =
              obj.label || (isObject(obj.value) ? '' : obj.value)
            API.onOptionCreate(obj)
          }
        }
      })
    }
    watch(
      () => {
        const slotsContent = slots.default?.()
        return slotsContent
      },
      (newSlot) => {
        if (props.persistent) {
          // If persistent is true, we don't need to manually render slots.
          return
        }
        manuallyRenderSlots(newSlot)
      },
      {
        immediate: true,
      }
    )

    return {
      ...API,
      modelValue,
    }
  },
})
</script>
