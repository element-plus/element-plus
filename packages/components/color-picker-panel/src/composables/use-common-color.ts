import { reactive, watch } from 'vue'
import Color from '../utils/color'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

type CommonColorProps = {
  modelValue?: string | null
  showAlpha: boolean
  colorFormat?: string
}
type CommonColorEmits = (event: 'update:modelValue', ...args: any[]) => void

export const useCommonColor = <
  P extends CommonColorProps,
  E extends CommonColorEmits
>(
  props: P,
  emit: E
) => {
  const color = reactive(
    new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat || '',
      value: props.modelValue,
    })
  ) as Color

  watch(
    () => [props.colorFormat, props.showAlpha],
    () => {
      color.enableAlpha = props.showAlpha
      color.format = props.colorFormat || color.format
      color.doOnChange()
      emit(UPDATE_MODEL_EVENT, color.value)
    }
  )

  return {
    color,
  }
}
