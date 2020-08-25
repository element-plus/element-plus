<template>
  <div
    :class="['el-tabs__active-bar', `is-${ rootTabs.props.tabPosition }`]"
    :style="barStyle"
  ></div>
</template>
<script lang='ts'>
import { defineComponent, inject, getCurrentInstance, watch, nextTick, ref, PropType } from 'vue'
import { capitalize } from '@vue/shared'
import { Pane, RootTabs } from './tabs.vue'

export default defineComponent({
  name: 'ElTabBar',
  props: {
    tabs: {
      type: Array as PropType<Pane[]>,
      default: () => ([] as Pane[]),
    },
  },
  setup(props) {
    const rootTabs = inject<RootTabs>('rootTabs')
    if (!rootTabs) {
      throw new Error(`ElTabBar must use with ElTabs`)
    }
    const instance = getCurrentInstance()

    const getBarStyle = () => {
      let style = {} as CSSStyleDeclaration
      let offset = 0
      let tabSize = 0

      const sizeName = ['top', 'bottom'].includes(rootTabs.props.tabPosition) ? 'width' : 'height'
      const sizeDir = sizeName === 'width' ? 'x' : 'y'

      props.tabs.every(tab => {
        let $el = instance.parent.refs?.[`tab-${tab.paneName}`] as Element
        if (!$el) { return false }
        if (!tab.active) {
          offset += $el[`client${capitalize(sizeName)}`]
          return true
        } else {
          tabSize = $el[`client${capitalize(sizeName)}`]

          const tabStyles = window.getComputedStyle($el)

          if (sizeName === 'width') {
            if (props.tabs.length > 1) {
              tabSize -= parseFloat(tabStyles.paddingLeft) + parseFloat(tabStyles.paddingRight)
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
      style.webkitTransform = transform

      return style
    }

    const barStyle = ref(getBarStyle())

    watch(() => props.tabs, () => {
      nextTick(() => {
        barStyle.value = getBarStyle()
      })
    })

    return {
      rootTabs,
      barStyle,
    }
  },
})
</script>
