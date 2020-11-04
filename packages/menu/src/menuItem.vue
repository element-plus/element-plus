<template>
  <li
    class="el-menu-item"
    role="menuitem"
    tabindex="-1"
    :style="[paddingStyle, itemStyle, { backgroundColor }]"
    :class="{
      'is-active': active,
      'is-disabled': disabled,
    }"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="onMouseLeave"
    @mouseleave="onMouseLeave"
  >
    <el-tooltip
      v-if="
        parentMenu.$options.componentName === 'ElMenu' &&
          rootMenu.collapse &&
          $slots.title
      "
      effect="dark"
      placement="right"
    >
      <!-- <div slot="content"> -->
      <slot name="title"></slot>
      <!-- </div> -->
      <div
        style="position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: inline-block;box-sizing: border-box;padding: 0 20px;"
      >
        <slot></slot>
      </div>
    </el-tooltip>
    <template v-else>
      <slot></slot>
      <slot name="title"></slot>
    </template>
  </li>
</template>
<script lang="ts">
import { computed, onMounted, onBeforeUnmount } from 'vue'
// import Menu from './menu-mixin'
// import ElTooltip from "element-ui/packages/tooltip";
import mitt from 'mitt'

export default {
  name: 'ElMenuItem',

  componentName: 'ElMenuItem',

  // components: { ElTooltip },

  props: {
    index: {
      default: null,
      validator: val => typeof val === 'string' || val === null,
    },
    route: [String, Object],
    disabled: Boolean,
  },
  setup() {
    const active = computed(() => {
      return this.index === this.rootMenu.activeIndex
    })
    const hoverBackground = computed(() => {
      return this.rootMenu.hoverBackground
    })
    const backgroundColor = computed(() => {
      return this.rootMenu.backgroundColor || ''
    })
    const activeTextColor = computed(() => {
      return this.rootMenu.activeTextColor || ''
    })
    const textColor = computed(() => {
      return this.rootMenu.textColor || ''
    })
    const mode = computed(() => {
      return this.rootMenu.mode
    })
    const itemStyle = computed(() => {
      const style = {
        color: this.active ? this.activeTextColor : this.textColor,
      }
      if (this.mode === 'horizontal' && !this.isNested) {
        style.borderBottomColor = this.active
          ? this.rootMenu.activeTextColor
            ? this.activeTextColor
            : ''
          : 'transparent'
      }
      return style
    })
    const isNested = computed(() => {
      return this.parentMenu !== this.rootMenu
    })
    const onMouseEnter = () => {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return
      this.$el.style.backgroundColor = this.hoverBackground
    }
    const onMouseLeave = () => {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return
      this.$el.style.backgroundColor = this.backgroundColor
    }
    const handleClick = () => {
      if (!this.disabled) {
        this.dispatch('ElMenu', 'item-click', this)
        this.$emit('click', this)
      }
    }

    onMounted(() => {
      //   this.parentMenu.addItem(this)
      //   this.rootMenu.addItem(this)
    })

    onBeforeUnmount(() => {
      //   this.parentMenu.removeItem(this)
      //   this.rootMenu.removeItem(this)
    })
  },
}
</script>
