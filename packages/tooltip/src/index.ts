import { defineComponent, h, ref, cloneVNode, registerRuntimeCompiler } from 'vue'
import ElPopper from '@element-plus/popper'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import throwError from '@element-plus/utils/error'
import { getFirstValidNode } from '@element-plus/utils/vnode'
import {
  usePopperProps,
  useModelToggleProps,
} from '@element-plus/hooks'

const mappingAPI = [
  'manual',
  'openDelay',
  'visibleArrow',
  'tabindex',
]

/**
 * ElTooltip
 * Tooltip is essentially an upper layer for Popper, due to popper has already implemented so many functionalities and Popper is essentially a component shared internally
 * Tooltip also does the API translation work for popper.
 * Tooltip shares the exact same API which v2 has, so that the user should be able to
 */
export default defineComponent({
  name: 'ElTooltip',
  props: {
    ...usePopperProps,
    ...useModelToggleProps,
    manual: {
      type: Boolean,
      default: false,
    },
    // This API should be decaprecate since it's confusing with close-delay
    openDelay: {
      type: Number,
      default: 0,
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    tabindex: {
      type: [String, Number],
      default: '0',
    },
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props, { emit, expose, slots }) {
    // when manual mode is true, v-model must be passed down
    if (props.manual && typeof props.modelValue === 'undefined') {
      throwError('[ElTooltip]', 'You need to pass a v-model to el-tooltip when `manual` is true')
    }

    const popper = ref(null)

    const onUpdateVisible = (val: boolean) => {
      emit(UPDATE_MODEL_EVENT, val)
    }

    const updatePopper = () => {
      return popper.value.update()
    }

    expose({
      popper,
      onUpdateVisible,
      updatePopper,
    })

    return () => {
      const mappedProps = Object.keys(props)
        .filter(key => !mappingAPI.includes(key))
        .reduce((p, key) => {
          p[key] = props[key]
          return p
        }, {})

      return h(
        ElPopper,
        {
          ...mappedProps,
          ref: popper,
          manualMode: props.manual,
          showAfter: props.openDelay || props.showAfter, // this is for mapping API due to we decided to rename the current openDelay API to showAfter for better readability,
          showArrow: props.visibleArrow,
        },
        {
          default: () => (slots.content ? slots.content() : props.content),
          trigger: () => {
            if (slots.default) {
              const firstVnode = getFirstValidNode(slots.default(), 1)
              return cloneVNode(firstVnode, { tabinex: props.tabindex }, true)
            }
          },
        },
      )
    }
  },
})
