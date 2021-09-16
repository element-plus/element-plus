<template>
  <div
    v-resize="update"
    :class="['el-tabs__active-bar', `is-${rootTabs.props.tabPosition}`]"
    :style="barStyle"
  ></div>
</template>
<script lang="ts">
import {
  defineComponent,
  inject,
  getCurrentInstance,
  watch,
  nextTick,
  ref,
} from 'vue'
import { capitalize } from '@vue/shared'
import { Resize } from '@element-plus/directives'
import type { Pane, RootTabs } from './token'

import type { CSSProperties, PropType } from 'vue'

export default defineComponent({
  name: 'ElTabBar',
  directives: {
    Resize,
  },
  props: {
    tabs: {
      type: Array as PropType<Pane[]>,
      default: () => [] as Pane[],
    },
  },
  setup(props) {
    const rootTabs = inject<RootTabs>('rootTabs')
    if (!rootTabs) {
      throw new Error(`ElTabBar must use with ElTabs`)
    }
    const instance = getCurrentInstance()

    const getBarStyle = () => {
      const style = {} as CSSProperties
      let offset = 0
      let tabSize = 0

      const sizeName = ['top', 'bottom'].includes(rootTabs.props.tabPosition)
        ? 'width'
        : 'height'
      const sizeDir = sizeName === 'width' ? 'x' : 'y'

      props.tabs.every((tab) => {
        const $el = instance.parent.refs?.[`tab-${tab.paneName}`] as Element
        if (!$el) {
          return false
        }
        if (!tab.active) {
          return true
        } else {
          tabSize = $el[`client${capitalize(sizeName)}`]
          const position = sizeDir === 'x' ? 'left' : 'top'
          offset =
            $el.getBoundingClientRect()[position] -
            $el.parentElement.getBoundingClientRect()[position]
          const tabStyles = window.getComputedStyle($el)

          if (sizeName === 'width') {
            if (props.tabs.length > 1) {
              tabSize -=
                parseFloat(tabStyles.paddingLeft) +
                parseFloat(tabStyles.paddingRight)
            }
            offset += parseFloat(tabStyles.paddingLeft)
          }
          return false
        }
      })

      const transform = `translate${capitalize(sizeDir)}(${offset}px)`
      style[sizeName] = `${tabSize}px`
      style.transform = transform
      style.msTransform = transform
      ;(style as any).webkitTransform = transform

      return style
    }

    const barStyle = ref(getBarStyle() as CSSProperties)

    const update = () => {
      barStyle.value = getBarStyle()
    }

    watch(
      () => props.tabs,
      () => {
        nextTick(() => {
          update()
        })
      }
    )

    return {
      rootTabs,
      barStyle,
      update,
    }
  },
})
</script>
