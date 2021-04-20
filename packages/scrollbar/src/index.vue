<template>
  <div ref="scrollbar" class="el-scrollbar">
    <div
      ref="wrap"
      :class="[
        wrapClass,
        'el-scrollbar__wrap',
        native ? '' : 'el-scrollbar__wrap--hidden-default',
      ]"
      :style="style"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="resize"
        :class="['el-scrollbar__view', viewClass]"
        :style="viewStyle"
      >
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <bar :move="moveX" :size="sizeWidth" />
      <bar vertical :move="moveY" :size="sizeHeight" />
    </template>
  </div>
</template>
<script lang="ts">
import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'
import { addUnit, isArray, isString, toObject } from '@element-plus/utils/util'
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, provide, ref } from 'vue'
import Bar from './bar.vue'

export default defineComponent({
  name: 'ElScrollbar',
  components: { Bar },
  props: {
    height: {
      type: [String, Number],
      default: '',
    },
    maxHeight: {
      type: [String, Number],
      default: '',
    },
    native: {
      type: Boolean,
      default: false,
    },
    wrapStyle: {
      type: [String, Array],
      default: '',
    },
    wrapClass: {
      type: [String, Array],
      default: '',
    },
    viewClass: {
      type: [String, Array],
      default: '',
    },
    viewStyle: {
      type: [String, Array],
      default: '',
    },
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div',
    },
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const sizeWidth = ref('0')
    const sizeHeight = ref('0')
    const moveX = ref(0)
    const moveY = ref(0)
    const scrollbar = ref(null)
    const wrap = ref(null)
    const resize = ref(null)

    provide('scrollbar', scrollbar)
    provide('scrollbar-wrap', wrap)

    const handleScroll = () => {
      if (wrap.value) {
        moveY.value = (wrap.value.scrollTop * 100) / wrap.value.clientHeight
        moveX.value = (wrap.value.scrollLeft * 100) / wrap.value.clientWidth
        emit('scroll', {
          scrollLeft: moveX.value,
          scrollTop: moveY.value,
        })
      }
    }

    const update = () => {
      if (!wrap.value) return

      const heightPercentage = (wrap.value.clientHeight * 100) / wrap.value.scrollHeight
      const widthPercentage = (wrap.value.clientWidth * 100) / wrap.value.scrollWidth

      sizeHeight.value = heightPercentage < 100 ? heightPercentage + '%' : ''
      sizeWidth.value = widthPercentage < 100 ? widthPercentage + '%' : ''
    }

    const style = computed(() => {
      let style = props.wrapStyle
      if (isArray(style)) {
        style = toObject(style)
        style.height = addUnit(props.height)
        style.maxHeight = addUnit(props.maxHeight)
      } else if (isString(style)) {
        style += addUnit(props.height) ? `height: ${addUnit(props.height)};` : ''
        style += addUnit(props.maxHeight) ? `max-height: ${addUnit(props.maxHeight)};` : ''
      }
      return style
    })

    onMounted(() => {
      if (!props.native) {
        nextTick(update)
      }
      if (!props.noresize) {
        addResizeListener(resize.value, update)
        addEventListener('resize', update)
      }
    })

    onBeforeUnmount(() => {
      if (!props.noresize) {
        removeResizeListener(resize.value, update)
        removeEventListener('resize', update)
      }
    })

    return {
      moveX,
      moveY,
      sizeWidth,
      sizeHeight,
      style,
      scrollbar,
      wrap,
      resize,
      update,
      handleScroll,
    }
  },
})
</script>
