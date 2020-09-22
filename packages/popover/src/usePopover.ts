import { computed, ref, watch } from 'vue'

import { isString } from '@element-plus/utils/util'

import type { AnyFunction } from '@element-plus/utils/types'

export interface IUsePopover {
  initVisible: boolean
  width: number | string
}

export const SHOW_EVENT = 'show'
export const HIDE_EVENT = 'hide'

export default function usePopover<T extends AnyFunction<void>>(props: IUsePopover, emitter: T) {
  const _visible = ref(props.initVisible)

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

  watch(_visible, val => {
    emitter('update:value', val)
    emitter(val ? SHOW_EVENT : HIDE_EVENT)
  })

  return {
    _visible,
    popperStyle,
  }
}
