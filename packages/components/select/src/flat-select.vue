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
import { computed, defineComponent, inject, reactive, toRefs } from 'vue'
import ElScrollbar from '@element-plus/components/scrollbar'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { isArray } from '@element-plus/utils'
import ElOption from './option.vue'
import ElSelectMenu from './select-dropdown.vue'
import ElOptions from './options'
import { selectProps } from './select'
import { useFlatSelect } from './useFlatSelect'

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

  setup(props, { emit }) {
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
    return {
      ...API,
      modelValue,
    }
  },
})
</script>
