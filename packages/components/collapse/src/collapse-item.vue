<template>
  <div
    :class="[
      ns.b('item'),
      ns.is('active', isActive),
      ns.is('disabled', disabled),
    ]"
  >
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="ns.b(`content-${id}`)"
      :aria-describedby="ns.b(`content-${id}`)"
    >
      <div
        :id="ns.b(`head-${id}`)"
        :class="[
          ns.be('item', 'header'),
          ns.is('active', isActive),
          { focusing },
        ]"
        role="button"
        :tabindex="disabled ? -1 : 0"
        @click="handleHeaderClick"
        @keyup.space.enter.stop="handleEnterClick"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{ title }}</slot>
        <el-icon :class="[ns.be('item', 'arrow'), ns.is('active', isActive)]">
          <arrow-right />
        </el-icon>
      </div>
    </div>
    <el-collapse-transition>
      <div
        v-show="isActive"
        :id="ns.b(`content-${id}`)"
        :class="ns.be('item', 'wrap')"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="ns.b(`head-${id}`)"
      >
        <div :class="ns.be('item', 'content')">
          <slot></slot>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, computed, ref } from 'vue'
import { generateId } from '@element-plus/utils'
import ElCollapseTransition from '@element-plus/components/collapse-transition'
import ElIcon from '@element-plus/components/icon'
import { ArrowRight } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'

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
    const collapse = inject<CollapseProvider>('collapse')
    const ns = useNamespace('collapse')

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
      isActive,
      contentWrapStyle,
      contentHeight,
      focusing,
      isClick,
      id,
      ns,
      handleFocus,
      handleHeaderClick,
      handleEnterClick,
      collapse,
    }
  },
})
</script>
