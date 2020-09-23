import { computed } from 'vue'

import { isString } from '@element-plus/utils/util'

import type { AnyFunction } from '@element-plus/utils/types'

export interface IUsePopover {
  visible: boolean
  width: number | string
}

export const SHOW_EVENT = 'show'
export const HIDE_EVENT = 'hide'

export default function usePopover<T extends AnyFunction<void>>(props: IUsePopover, emitter: T) {
  // due to vue forbids user to return attribute starts with `_` or `$` which indicates
  // an internal member, we need to change the name as modelValue as it is a modelValue itself
  const modelValue = computed({
    get() {
      return props.visible
    },
    set(val) {
      emitter('update:visible', val)
      emitter(val ? SHOW_EVENT : HIDE_EVENT)
    },
  })

  const popperStyle = computed(() => {

    let _width: string

    if (isString(props.width)) {
      _width = props.width
    } else {
      _width = props.width + 'px'
    }

    return {
      width: _width,
    }
  })

  return {
    modelValue,
    popperStyle,
  }
}
