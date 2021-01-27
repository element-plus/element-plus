import type { SetupContext } from 'vue'
import { ref, watch, watchEffect } from 'vue'
import { isString } from '@element-plus/utils/util'
import type { IPopperOptions } from '@element-plus/popper'
import { usePopper } from '@element-plus/popper'
import PopupManager from '@element-plus/utils/popup-manager'
import { EmitType } from '@element-plus/popper/src/use-popper'

export interface IUsePopover extends IPopperOptions {
  width: number | string
}

export const SHOW_EVENT = 'show'
export const HIDE_EVENT = 'hide'

export default function usePopover(props: IUsePopover, ctx: SetupContext<string[]>) {
  const popperStyle = ref({})

  const updatePopperStyle = () => {
    let _width: string

    if (isString(props.width)) {
      _width = props.width as string
    } else {
      _width = props.width + 'px'
    }
    popperStyle.value = {
      width: _width,
      zIndex: PopupManager.nextZIndex(),
    }
  }

  const popperProps = usePopper(props, ctx as SetupContext<EmitType[]>)

  watchEffect(() => {
    updatePopperStyle()
  })

  watch(popperProps.visibility, val => {
    if (val) {
      updatePopperStyle()
    }
    ctx.emit(val ? SHOW_EVENT : HIDE_EVENT)
  })

  return {
    ...popperProps,
    popperStyle,
  }
}
