import { reactive, watch } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import Color from '../utils/color'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

type CommonColorProps = {
  modelValue?: string | null
  showAlpha: boolean
  colorFormat?: string
  showGradient?: boolean
}
type CommonColorEmits = (event: 'update:modelValue', ...args: any[]) => void

export const useCommonColor = <
  P extends CommonColorProps,
  E extends CommonColorEmits,
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

      // For gradient mode, convert both stops to match showAlpha
      // Otherwise inactive stop keeps rgba() while alpha slider is hidden
      if (color.isGradient) {
        const formatColor = (colorValue: string) => {
          const tiny = new TinyColor(colorValue)
          return props.showAlpha ? tiny.toRgbString() : tiny.toHexString()
        }
        color.startValue = formatColor(color.startValue)
        color.endValue = formatColor(color.endValue)
        color.value = color.toGradientValue()
        emit(UPDATE_MODEL_EVENT, color.toGradientValue())
      } else {
        color.doOnChange()
        emit(UPDATE_MODEL_EVENT, color.value)
      }
    }
  )

  return {
    color,
  }
}
