<template>
  <div
    class="el-select-dropdown el-popper"
    :class="[{ 'is-multiple': isMultiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script  lang="ts">
// import Popper from '@element-plus/vue-popper'
import {
  computed,
  onMounted,
  inject,
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
    // const selectUse = useSelect()
    // const select = selectUse._select
    const select = inject('Select', {})

    // computed
    const popperClass = computed(() => select.props.popperClass)
    // computed
    const isMultiple = computed(() => select.props.multiple)
    const minWidth = computed(() => select._select.value && select._select.value.getBoundingClientRect().width + 'px')

    onMounted(() => {
      // TODO: 需要补充
      // this.referenceElm = instance.parent.refs.reference?.$el
      // this.$parent.popperElm = this.popperElm = this.$el
      // this.$on('updatePopper', () => {
      //   if (this.$parent.visible) this.updatePopper()
      // });
      // this.$on('destroyPopper', this.destroyPopper)
    })

    return {
      minWidth,
      popperClass,
      isMultiple,
    }
  },
  methods: {
    // TODO: doDestroy
    doDestroy() {
      //
    },
  },
}
</script>
