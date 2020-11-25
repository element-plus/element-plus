<template>
  <div
    class="el-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }"
  >
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`el-collapse-content-${id}`"
      :aria-describedby="`el-collapse-content-${id}`"
    >
      <div
        :id="`el-collapse-head-${id}`"
        class="el-collapse-item__header"
        role="button"
        :tabindex="disabled ? -1 : 0"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @click="handleHeaderClick"
        @keyup.space.enter.stop="handleEnterClick"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{ title }}</slot>
        <i
          class="el-collapse-item__arrow el-icon-arrow-right"
          :class="{'is-active': isActive}"
        >
        </i>
      </div>
    </div>
    <el-collapse-transition>
      <div
        v-show="isActive"
        :id="`el-collapse-content-${id}`"
        class="el-collapse-item__wrap"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`el-collapse-head-${id}`"
      >
        <div class="el-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script lang='ts'>
import { defineComponent, PropType, inject, computed, ref } from 'vue'
import { CollapseProvider } from './collapse'
import { generateId } from '@element-plus/utils/util'
import ElCollapseTransition from '@element-plus/collapse-transition'

export default defineComponent({
  name: 'ElCollapseItem',
  components: { ElCollapseTransition },
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
    const collapseMitt = collapse?.collapseMitt

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
        if(!isClick.value) {
          focusing.value = true
        } else {
          isClick.value = false
        }
      }, 50)
    }

    const handleHeaderClick = () => {
      if(props.disabled) return
      collapseMitt?.emit('item-click', props.name)
      focusing.value = false
      isClick.value = true
    }

    const handleEnterClick = () => {
      collapseMitt?.emit('item-click', props.name)
    }

    return {
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
