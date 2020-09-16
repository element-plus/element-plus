<script lang="ts">
import {
  defineComponent,
  h,
  openBlock,
  createBlock,
  Fragment,
  Teleport,
  nextTick,
} from 'vue'

import { isArray } from '@element-plus/utils/util'
import { stop } from '@element-plus/utils/dom'
import { ClickOutside } from '@element-plus/directives'
import throwError, { warn } from '@element-plus/utils/error'
import { renderBlock } from '@element-plus/utils/vnode'

import {
  default as usePopper,
  DEFAULT_TRIGGER,
  UPDATE_VISIBLE_EVENT,
} from './usePopper'
import {
  renderMask,
  renderPopper,
  renderTrigger,
  renderArrow,
} from './renderers'

import type { PropType, SetupContext } from 'vue'

import type {
  Effect,
  Offset,
  Options,
  Placement,
  PositioningStrategy,
  TriggerType,
  IPopperOptions,
} from './popper'

const compName = 'ElPopper'

export default defineComponent({
  name: compName,
  directives: {
    ClickOutside,
  },
  props: {
    arrowOffset: {
      type: Number,
      default: 15,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    boundariesPadding: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      default: '',
    },
    class: {
      type: String,
      default: '',
    },
    closeDelay: {
      type: Number,
      default: 200,
    },
    cutoff: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    effect: {
      type: String as PropType<Effect>,
      default: 'dark' as Effect,
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    flip: {
      type: Boolean,
      default: true,
    },
    hideAfter: {
      type: Number,
      default: 0,
    },
    manualMode: {
      type: Boolean,
      default: false,
    },
    showAfter: {
      type: Number,
      default: 0,
    },
    offset: {
      type: [Number, Array] as PropType<Offset>,
      default: [0, 12] as Offset,
      validator: (val: Offset): boolean => {
        return (isArray(val) && val.length === 2) || typeof val === 'number'
      },
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom' as Placement,
    },
    popperClass: {
      type: String,
      default: '',
    },
    pure: {
      type: Boolean,
      default: false,
    },
    // Once this option were given, the entire popper is under the users' control, top priority
    popperOptions: {
      type: Object as PropType<Options>,
      default: () => null,
    },
    referrer: {
      type: HTMLElement as PropType<Nullable<HTMLElement>>,
      default: null as Nullable<HTMLElement>,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
    strategy: {
      type: String as PropType<PositioningStrategy>,
      default: 'fixed' as PositioningStrategy,
    },
    transition: {
      type: String,
      default: 'el-fade-in-linear',
    },
    trigger: {
      type: [String, Array] as PropType<TriggerType | Array<TriggerType>>,
      default: DEFAULT_TRIGGER,
    },
    tabIndex: {
      type: String,
      default: '0',
    },
    value: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: undefined,
    },
  },
  emits: [UPDATE_VISIBLE_EVENT],
  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      throwError(compName, 'Trigger must be provided')
    }
    // this is a reference that we need to pass down to child component
    // to obtain the child instance

    return usePopper(props as IPopperOptions, ctx as SetupContext)
  },

  render() {
    const {
      $slots,
      appendToBody,
      class: kls,
      effect,
      excludes,
      onHide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      popperClass,
      popperId,
      pure,
      showArrow,
      tabIndex,
      transition,
      visibility,
    } = this

    const arrow = renderArrow(showArrow)

    const popper = renderPopper(
      {
        effect,
        name: transition,
        popperClass,
        popperId,
        pure,
        onMouseEnter: onPopperMouseEnter,
        onMouseLeave: onPopperMouseLeave,
        visibility,
      },
      [$slots.default?.() || this.content, arrow],
    )

    const trigger = renderTrigger($slots.trigger?.(), {
      ariaDescribedby: popperId,
      class: kls,
      ref: 'triggerRef',
      tabindex: tabIndex,
      onMouseDown: stop,
      onMouseUp: stop,
      ...this.events,
    })

    return (
      renderBlock(Fragment, null, [
        trigger,
        appendToBody
          ? h(
            Teleport,
            {
              to: 'body',
            },
            renderMask(popper, {
              onHide,
            }),
          )
          : popper,
      ])
    )
  },
})
</script>

<style>
.el-popper__mask {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.el-popper {
  position: absolute;
  border-radius: 4px;
  padding: 10px;
  z-index: 2000;
  font-size: 12px;
  line-height: 1.2;
  min-width: 10px;
  word-wrap: break-word;
  visibility: visible;
}

.el-popper__arrow,
.el-popper__arrow::before {
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: -1;
}

.el-popper__arrow::before {
  content: ' ';
  transform: rotate(45deg);
  background: #303133;
  box-sizing: border-box;
}

.el-popper[data-popper-placement^='top'] > .el-popper__arrow {
  bottom: -5px;
}

.el-popper[data-popper-placement^='bottom'] > .el-popper__arrow {
  top: -5px;
}

.el-popper[data-popper-placement^='left'] > .el-popper__arrow {
  right: -5px;
}

.el-popper[data-popper-placement^='right'] > .el-popper__arrow {
  left: -5px;
}

.el-popper.is-dark {
  background: #303133;
  color: #fff;
}
.el-popper.is-light {
  background: #fff;
  border: 1px solid #303133;
}

.el-popper.is-dark .el-popper__arrow::before {
  background: #303133;
}

.el-popper.is-light .el-popper__arrow::before {
  background: #fff;
  border: 1px solid #303133;
}

.el-popper.is-light[data-popper-placement^='top'] .el-popper__arrow::before {
  border-top-color: transparent;
  border-left-color: transparent;
}

.el-popper.is-light[data-popper-placement^='bottom'] .el-popper__arrow::before {
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.el-popper.is-light[data-popper-placement^='left'] .el-popper__arrow::before {
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.el-popper.is-light[data-popper-placement^='right'] .el-popper__arrow::before {
  border-top-color: transparent;
  border-right-color: transparent;
}

.el-popper.el-popper__pure {
  padding: 0;
  border: none;
}

.el-popper.el-popper__pure .el-popper__arrow::before {
  border: none;
}
</style>
