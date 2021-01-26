import { defineComponent, h, ref } from 'vue'
import ElPopper from '@element-plus/popper'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import throwError from '@element-plus/utils/error'

import type { PropType } from 'vue'
import type {
  Effect,
  Placement,
  Options,
} from '@element-plus/popper'

/**
 * ElTooltip
 * Tooltip is essentially an upper layer for Popper, due to popper has already implemented so many functionalities and Popper is essentially a component shared internally
 * Tooltip also does the API translation work for popper.
 * Tooltip shares the exact same API which v2 has, so that the user should be able to
 */
export default defineComponent({
  name: 'ElTooltip',
  components: {
    ElPopper,
  },
  props: {
    effect: {
      type: String as PropType<Effect>,
      default: 'dark' as Effect,
    },
    class: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    hideAfter: {
      type: Number,
      default: 200,
    },
    manual: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      validator: (val: unknown) => {
        return typeof val === 'boolean'
      },
      default: undefined,
    },
    offset: {
      type: Number,
      default: 12,
    },
    // This API should be decaprecate since it's confusing with close-delay
    openDelay: {
      type: Number,
      default: 0,
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom' as Placement,
    },
    // Once this option were given, the entire popper is under the users' control, top priority
    popperOptions: {
      type: Object as PropType<Options>,
      default: () => null,
    },
    // Alias for open-delay, which controls the popper's appearing time
    showAfter: {
      type: Number,
      default: 0,
    },
    transition: {
      type: String,
      default: 'el-fade-in-linear',
    },
    trigger: {
      type: [String, Array] as PropType<string | string[]>,
      default: () => ['hover'],
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    stopPopperMouseEvent: {
      type: Boolean,
      default: true,
    },
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props, ctx) {
    // when manual mode is true, v-model must be passed down
    if (props.manual && typeof props.modelValue === 'undefined') {
      throwError('[ElTooltip]', 'You need to pass a v-model to el-tooltip when `manual` is true')
    }

    const popper = ref(null)

    const onUpdateVisible = val => {
      ctx.emit(UPDATE_MODEL_EVENT, val)
    }

    const updatePopper = () => {
      return popper.value.update()
    }

    return {
      popper,
      onUpdateVisible,
      updatePopper,
    }
  },
  render() {
    const {
      $slots,
      content,
      disabled,
      effect,
      enterable,
      hideAfter,
      manual,
      offset,
      openDelay,
      onUpdateVisible,
      placement,
      popperOptions,
      showAfter,
      transition,
      trigger,
      visibleArrow,
      stopPopperMouseEvent,
    } = this
    const popper = h(
      ElPopper,
      {
        ref: 'popper',
        appendToBody: true,
        class: this.class,
        disabled,
        effect,
        enterable,
        hideAfter,
        manualMode: manual,
        offset,
        placement,
        showAfter: openDelay || showAfter, // this is for mapping API due to we decided to rename the current openDelay API to showAfter for better readability,
        showArrow: visibleArrow,
        stopPopperMouseEvent,
        transition,
        trigger,
        popperOptions, // Breakings!: Once popperOptions is provided, the whole popper is under user's control, ElPopper nolonger generates the default options for popper, this is by design if the user wants the full control on @PopperJS, read the doc @https://popper.js.org/docs/v2/
        visible: this.modelValue,
        'onUpdate:visible': onUpdateVisible,
      },
      {
        default: () => ($slots.content ? $slots.content() : content),
        trigger: () => $slots.default(),
      },
    )
    return popper
  },
})
