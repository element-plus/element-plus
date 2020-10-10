import { computed, watch } from 'vue'
import { isString } from '@element-plus/utils/util'
import usePopper from '@element-plus/popper/src/use-popper'


import type { IPopperOptions } from '@element-plus/popper/src/use-popper/defaults'
import type { SetupContext } from 'vue'

export interface IUsePopover extends IPopperOptions{
  width: number | string
}

export const SHOW_EVENT = 'show'
export const HIDE_EVENT = 'hide'

export default function usePopover(props: IUsePopover, ctx: SetupContext<string[]>) {
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

  const popperProps = usePopper(props, ctx)

  watch(popperProps.visibility, val => {
    ctx.emit(val ? SHOW_EVENT : HIDE_EVENT)
  })

  return {
    ...popperProps,
    popperStyle,
  }
}
