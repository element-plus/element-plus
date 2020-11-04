<template>
  <li class="el-menu-item-group">
    <div
      class="el-menu-item-group__title"
      :style="{ paddingLeft: data.levelPadding + 'px' }"
    >
      <template v-if="!slots.title">{{ title }}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  watch,
  computed,
  ref,
  inject,
  ToRefs,
  reactive,
} from 'vue'
import mitt from 'mitt'
import { hasClass, addClass, removeClass } from '@element-plus/utils/dom'

export default defineComponent({
  name: 'ElMenuItemGroup',
  componentName: 'ElMenuItemGroup',

  props: {
    title: {
      type: String,
    },
  },
  setup(props) {
    // data
    const data = reactive({
      paddingLeft: 20,
    })
    // computed
    const levelPadding = computed(() => {
      // TODO: reconstruct
      let padding = 20
      let parent = this.$parent
      if (this.rootMenu.collapse) return 20
      while (parent && parent.$options.componentName !== 'ElMenu') {
        if (parent.$options.componentName === 'ElSubmenu') {
          padding += 20
        }
        parent = parent.$parent
      }
      return padding
    })

    // inject
    const { data: rootData, methods: rootMethods, props: rootProps } = inject<
      RootMenuProvider
    >('rootMenu')

    return {
      data,
      props,
    }
  },
})
</script>
