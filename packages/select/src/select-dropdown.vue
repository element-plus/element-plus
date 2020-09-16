<template>
  <div
    class="el-select-dropdown el-popper"
    :class="[{ 'is-multiple': $parent.multiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script type="text/babel">
// import Popper from '@element-plus/vue-popper'
import {
  computed,
  getCurrentInstance,
  watch,
  onMounted,
} from 'vue'

export default {
  name: 'ElSelectDropdown',

  componentName: 'ElSelectDropdown',
  // TODO: Popper
  // mixins: [Popper],

  props: {
    placement: {
      type: String,
      default: 'bottom-start',
    },

    boundariesPadding: {
      type: Number,
      default: 0,
    },

    popperOptions: {
      type: Object,
      default() {
        return {
          gpuAcceleration: false,
        }
      },
    },

    visibleArrow: {
      type: Boolean,
      default: true,
    },

    appendToBody: {
      type: Boolean,
      default: true,
    },
  },

  setup() {
    const minWidth = ref('')
    const instance = getCurrentInstance()
    // computed
    const popperClass = computed(() => instance.$parent.popperClass)
    // watch
    watch(() => instance.$parent.inputWidth, () => {
      minWidth.value = instance.$parent.$el.getBoundingClientRect().width + 'px'
    })

    onMounted(() => {
      // TODO: 需要补充
      // this.referenceElm = this.$parent.$refs.reference.$el
      // this.$parent.popperElm = this.popperElm = this.$el
      // this.$on('updatePopper', () => {
      //   if (this.$parent.visible) this.updatePopper()
      // });
      // this.$on('destroyPopper', this.destroyPopper)
    })

    return {
      minWidth,
      popperClass,
    }
  },
}
</script>
