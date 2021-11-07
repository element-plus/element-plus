import { computed, ref, watch } from 'vue'
import { isString } from '@element-plus/utils/util'
import { usePopper } from '@element-plus/components/popper'
import PopupManager from '@element-plus/utils/popup-manager'

import { SHOW_EVENT, HIDE_EVENT } from './popover'
import type { PopoverProps } from './popover'
import type { SetupContext } from 'vue'
import type { PopperEmits } from '@element-plus/components/popper'

export default function usePopover(props: PopoverProps, ctx) {
  const zIndex = ref(PopupManager.nextZIndex())
  const width = computed(() => {
    if (isString(props.width)) {
      return props.width as string
    }
    return `${props.width}px`
  })

  const popperStyle = computed(() => {
    return {
      width: width.value,
      zIndex: zIndex.value,
    }
  })

  const popperProps = usePopper(props, ctx as SetupContext<PopperEmits>)

  watch(popperProps.visibility, (val) => {
    if (val) {
      zIndex.value = PopupManager.nextZIndex()
    }
    ctx.emit(val ? SHOW_EVENT : HIDE_EVENT)
  })

  return {
    ...popperProps,
    popperStyle,
  }
}
