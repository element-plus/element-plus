<script lang="ts">
import {
  defineComponent,
  h,
  Fragment,
  Teleport,
  Transition,
  withDirectives,
  vShow,
} from 'vue'
import { isArray } from '@vue/shared'

import throwError from '@element-plus/utils/error'
import { ClickOutside } from '@element-plus/directives'
import { default as usePopper, DEFAULT_TRIGGER, UPDATE_VALUE_EVENT } from './usePopper'

import type { PropType } from 'vue'

import type {
  Effect,
  Offset,
  Options,
  Placement,
  PositioningStrategy,
  TriggerType,
  IPopperOptions,
} from './popper'

const stop = (e: Event) => e.stopPropagation()

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
  },
  emits: [UPDATE_VALUE_EVENT],
  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      throwError(compName, 'Trigger must be provided')
    }
    // this is a reference that we need to pass down to child component
    // to obtain the child instance

    const {
      arrowRef,
      clickMask,
      doDestroy,
      onShow,
      onHide,
      popperInstance,
      popperId,
      popperRef,
      initializePopper,
      visible,
    } = usePopper(props as IPopperOptions, ctx)

    return {
      arrowRef,
      clickMask,
      popperId,
      doDestroy,
      onShow,
      onHide,
      popperRef,
      popperInstance,
      initializePopper,
      visible,
    }
  },
  deactivated() {
    this.doDestroy()
  },
  activated() {
    this.initializePopper()
  },
  render() {
    const arrow = this.showArrow
      ? h(
        'div',
        {
          ref: 'arrowRef',
          class: 'el-popper__arrow',
          'data-popper-arrow': '',
        },
      )
      : null

    const popper = h(
      Transition,
      {
        name: this.transition,
      },
      {
        default: () =>
          withDirectives(
            h(
              'div',
              {
                ariaHidden: this.visible ? 'false' : 'true',
                class: [
                  'el-popper',
                  'is-' + this.effect,
                  this.popperClass,
                  this.pure
                    ? 'el-popper__pure'
                    : '',
                ],
                id: this.popperId,
                ref: 'popperRef',
                role: 'tooltip',
                onMouseEnter: this.onShow,
                onMouseLeave: this.onHide,
                onClick: stop,
              },
              [
                this.$slots.default ? this.$slots.default() : this.content,
                arrow,
              ],
            ),
            [
              [vShow, this.visible],
            ],
          ),
      },
    )
    return h(
      Fragment,
      null,
      [
        this.$slots.trigger?.(),
        this.appendToBody
          ? h(
            Teleport,
            {
              to: 'body',
            },
            withDirectives(
              h(
                'div',
                {
                  class: 'el-popper__mask',
                  onClick: this.clickMask,
                },
                popper,
              ),
              [[ClickOutside, () => this.$emit(UPDATE_VALUE_EVENT, false)]],
            ),
          )
          : popper,
      ],
    )
  },
})
</script>

<style>

.el-popper__mask {
  font-size: 14px;
  font-weight: 400;
  position: fixed;
  z-index: 1000000;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  visibility: hidden;
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
  content: " ";
  transform: rotate(45deg);
  background: #303133;
  box-sizing: border-box;
}

.el-popper[data-popper-placement^="top"] > .el-popper__arrow {
  bottom: -5px;
}

.el-popper[data-popper-placement^="bottom"] > .el-popper__arrow {
  top: -5px;
}

.el-popper[data-popper-placement^="left"] > .el-popper__arrow {
  right: -5px;
}

.el-popper[data-popper-placement^="right"] > .el-popper__arrow {
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

.el-popper.is-light[data-popper-placement^="top"] .el-popper__arrow::before {
  border-top-color: transparent;
  border-left-color: transparent;
}

.el-popper.is-light[data-popper-placement^="bottom"] .el-popper__arrow::before {
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.el-popper.is-light[data-popper-placement^="left"] .el-popper__arrow::before {
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.el-popper.is-light[data-popper-placement^="right"] .el-popper__arrow::before {
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
